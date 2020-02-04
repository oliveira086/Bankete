import React from 'react'
import { View, Text, TextInput, TouchableOpacity,  } from 'react-native'
import styles from './EstiloTelaDeConfirmacao'
import * as firebase from 'firebase'

export default class TelaDeLogin extends React.Component {
    state = {
        SenhaDigitada:'',
        SenhaDeSeisDigitos:''
    }
    componentWillMount(){
        const Dados = firebase.database().ref('users/'+firebase.auth().currentUser.uid).once('value')
        .then(function(snapshot) {
            SenhaSeis = snapshot.val().SenhaSeis
            this.UparSenha(SenhaSeis)
        })

        UparSenha = (SenhaSeis) =>{
            this.setState({SenhaDeSeisDigitos:String(SenhaSeis)})
            
        }
    }
    Verificar = async () =>{
        if (this.state.SenhaDigitada === this.state.SenhaDeSeisDigitos){
            const salvandoSenhaSeisDigitos = await firebase.database().ref('users/'+ firebase.auth().currentUser.uid+'/Transferencia/'+
            firebase.auth().currentUser.uid+'Transferencia')
            .update({
                SenhaQuatro: String(this.state.SenhaDigitada)
            })
            this.MudarTela()
        }
        else{
            alert('Senha de seis digitos incorreta ou ainda não foi adicionada')
        }
    }
    MudarTela = ()=>{
        this.props.navigation.navigate('TelaDeConfirmacaoDeDados')
        
    }






    render() {
        return (
            <View style={styles.ContainerGeral}>
                <Text style={styles.Text}>Por favor Digite sua senha de 6 Digitos</Text>
                <View style={styles.ViewFundo}>
                    <TextInput  secureTextEntry={true} keyboardType='numeric' style={styles.TextInput}
                    maxLength={6}
                    onChangeText={SenhaDigitada => this.setState({ SenhaDigitada })} />
                </View>
                <View style={styles.ViewBotao}>
                    <TouchableOpacity style={styles.BotaoConfirmar} onPress={this.Verificar}>
                        <Text style={styles.TextBotao}>Confirmar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.Botao} >
                        <Text style={styles.TextBotao}>Cancelar</Text>
                    </TouchableOpacity>
                </View>
                

            </View>
        )
    }
}