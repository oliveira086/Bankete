
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

        Dia : `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`,
        Hora : `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`,

        Id:'',
        Conta:'',
        NomeSocial:'',
        Classe:''
      };
    
      async componentDidMount() {
        this.getPermissionsAsync();
        const Dados = firebase.database().ref('users/'+firebase.auth().currentUser.uid).once('value')
        .then(function(snapshot) {
            ContatosId = snapshot.val().ContatosId
            ClasseId = snapshot.val().Classe 
            this.Contato(ContatosId)
            this.Classe(ClasseId)

            
      })
      Contato = (ContatosId) =>{
        this.setState({Id:parseInt(ContatosId)+1})
        
      }
      Classe = (ClasseId) =>{
        this.setState({Classe:ClasseId})
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
          this.ObterId()
          this.props.navigation.navigate('TelaDeConfirmacao')
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
        this.setState({scanned: true})
      }
      
      ObterId = async () => {
        try{

        const Nome = await firebase.database().ref('users/'+this.state.Conta).once('value')
            .then(function(snapshot){
            NomeDaConta = snapshot.val().Nome
            })
            this.UparId()
          }
        catch{
          alert('Usuario não existe OU não foi encontrado tente novamente')
          this.props.navigation.navigate('Principal')
        }
      }
      UparId = async () =>{
        const salvandoDadosDoUser = await firebase.database().ref('users/'+ firebase.auth().currentUser.uid + '/Transferencia/'
        + firebase.auth().currentUser.uid+'Transferencia').update({
            Remetente: firebase.auth().currentUser.uid ,
            Destinatario:this.state.Conta,
            Hora: this.state.Hora,
            Data: this.state.Dia,
            SenhaSeis:'',
            Valor:0,
        })
        this.UparValor()
  }
  UparValor = async () =>{
    var valor = parseInt(this.state.Classe)

    if (valor === 0){
      alert('Sua Conta estar bloqueada procure o antedimento')
    }
    if (valor === 1){
      var custo = 0.85
      const salvandoDadosDoUser = await firebase.database().ref('users/'+ firebase.auth().currentUser.uid + '/Transferencia/'
        + firebase.auth().currentUser.uid+'Transferencia').update({
            Valor:custo,
        })
      
    }
    if (valor===2){
      var custo = 1.25
      const salvandoDadosDoUser = await firebase.database().ref('users/'+ firebase.auth().currentUser.uid + '/Transferencia/'
        + firebase.auth().currentUser.uid+'Transferencia').update({
            Valor:custo,
        })
    }
    if (valor===3){
      var custo = 3.00
      const salvandoDadosDoUser = await firebase.database().ref('users/'+ firebase.auth().currentUser.uid + '/Transferencia/'
        + firebase.auth().currentUser.uid+'Transferencia').update({
            Valor:custo,
        })
    }
  }


}