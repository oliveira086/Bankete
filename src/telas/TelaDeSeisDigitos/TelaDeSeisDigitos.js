import React from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import styles from './EstiloTelaDeSeisDigitos'
import * as firebase from 'firebase'


export default class TelaDeLogin extends React.Component {
    state = {
        SenhaDigitada:'',
        Senha:'',
        SenhaSeisDigitos:'',
    }
    componentWillMount(){
        const Dados = firebase.database().ref('users/'+firebase.auth().currentUser.uid).once('value')
        .then(function(snapshot) {
            SenhaLogin = snapshot.val().Senha 
            this.UparSenha(SenhaLogin)
        })

        UparSenha = (SenhaLogin) =>{
            this.setState({Senha:String(SenhaLogin)})
            
        }
    }
    Printar = ()=>{
        if(this.state.Senha === this.state.SenhaDigitada){
            this.props.navigation.navigate('TelaMudarSeisDigitos')
        }
        else{
            alert('Senha incorreta. Tente Novamente')
        }
    }
    
    render() {
        return (
            <View style={styles.ContainerGeral}>
                <View style={styles.ViewTop}>
                    <Text style={styles.Text}>Digite sua senha de login</Text>
                    <TextInput style={styles.TextInput} secureTextEntry={true} placeholder={'Digite sua senha de login'}
                    value={this.state.SenhaDigitada} onChangeText={SenhaDigitada => this.setState({ SenhaDigitada })}></TextInput>
                    <TouchableOpacity style={styles.Botao} onPress={this.Printar}>
                        <Text style={styles.Text}>Confirmar</Text>
                    </TouchableOpacity>
                </View>


            </View>
        )
    }
}