import React from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import styles from './EstiloTelaMudarSeisDigitos'
import * as firebase from 'firebase'


export default class TelaDeLogin extends React.Component {
    state = {
        SenhaDigitada:'',
        SenhaDeConfirmacao:''
    }
    VerificarSenhas = ()=>{
        var SenhaUm = this.state.SenhaDigitada
        var SenhaDois = this.state.SenhaDeConfirmacao

        if (SenhaUm===SenhaDois){
            this.SalvarSenhaSeis()
        }
        else{
            alert('As senhas não iguais')
        }
    }
    SalvarSenhaSeis = async () => {
        const salvandoSenhaSeisDigitos = await firebase.database().ref('users/'+ firebase.auth().currentUser.uid).update({
            SenhaSeis: String(this.state.SenhaDigitada)
        })
        this.props.navigation.navigate('Inicio')
    }
    render() {
        return (
            <View style={styles.ContainerGeral}>
                <View style={styles.ViewTop}>
                    <Text style={styles.Text}>Digite sua nova senha de 6 digitos</Text>
                    <TextInput style={styles.TextInput}  maxLength={6} placeholder={'Digite sua senha de login'}
                    value={this.state.SenhaDigitada} secureTextEntry={true} onChangeText={SenhaDigitada => this.setState({ SenhaDigitada })}></TextInput>

                    <TextInput style={styles.TextInput}  maxLength={6} placeholder={'Confirme sua senha de login'}
                    value={this.state.SenhaDeConfirmacao} secureTextEntry={true} onChangeText={SenhaDeConfirmacao => this.setState({ SenhaDeConfirmacao })}></TextInput>

                    <TouchableOpacity style={styles.Botao} onPress={this.VerificarSenhas}>
                        <Text style={styles.Text}>Confirmar</Text>
                    </TouchableOpacity>
                </View>


            </View>
        )
    }
}