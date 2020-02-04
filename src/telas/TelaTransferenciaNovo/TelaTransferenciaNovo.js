
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import * as firebase from 'firebase'
import * as React from 'react';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

import { BarCodeScanner } from 'expo-barcode-scanner';

export default class TelaDeLogin extends React.Component {
    state = {
        hasCameraPermission: null,
        scanned: false,
        Id:'',
        Conta:'',
        Nome:'',
      };
    
      async componentDidMount() {
        this.getPermissionsAsync();
        const Dados = firebase.database().ref('users/'+firebase.auth().currentUser.uid).once('value')
        .then(function(snapshot) {
            ContatosId = snapshot.val().ContatosId 
            this.Contato(ContatosId)

            
      })
      Contato = (ContatosId) =>{
        this.setState({Id:parseInt(ContatosId)+1})
        
      }
  }
    
      getPermissionsAsync = async () => {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === 'granted' });
      };
    
      render() {
        const { hasCameraPermission, scanned } = this.state;
    
        if (hasCameraPermission === null) {
          return <Text>Aguardando a permissão da camera</Text>;
        }
        if (hasCameraPermission === false) {
          return <Text>Sem Acesso a camera</Text>;
        }
        if (scanned === true){
            this.ObterNome()
        }
        return (
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'flex-end',
            }}>
            <BarCodeScanner
              onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
              style={StyleSheet.absoluteFillObject}
            />
          </View>
        );
      }
    
      handleBarCodeScanned = ({ type, data }) => {
        this.setState({Conta:`${data}`})
        this.adicionar()
      }
      adicionar = () =>{
        this.setState({scanned: true})
      }


      ObterNome = async () => {
        try{

        const Nome = await firebase.database().ref('users/'+this.state.Conta).once('value')
            .then(function(snapshot){
            NomeDaConta = snapshot.val().Nome
            })
            this.UparNome(NomeDaConta)
          }
        catch{
          alert('Usuario não existe OU não foi encontrado tente novamente')
          this.props.navigation.navigate('Transferencia')
        }
      }

      UparNome = (NomeDaConta) =>{
        this.setState({Nome:String(NomeDaConta)})
        this.cadastrarContato()
      
      }

      cadastrarContato = async () => {
        try {

            const salvandoDadosDoUser = await firebase.database().ref('users/'+ firebase.auth().currentUser.uid + '/Contatos/' + this.state.Conta).set({
                Id:this.state.Id,
                Conta: this.state.Conta,
                Nome : this.state.Nome
            })
            const SalvarValorId = await firebase.database().ref('users/' + firebase.auth().currentUser.uid)
            .update({
              ContatosId: this.state.Id
            })
            this.props.navigation.navigate('Transferencia')
        }
        catch{
          
            
        }
    }
  }