import React from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import styles from './EstiloTelaDeRecuperacao'
import * as firebase from 'firebase'

export default class TelaDeLogin extends React.Component {
    state = {
        email: '',
    }

    Recuperar = async () => {
        try {
            const RecSenha = await firebase.auth().sendPasswordResetEmail(this.state.email)
            this.props.navigation.navigate('Inicio')
        }
        catch{

        }
    }

    render() {
        return (
            <View style={styles.ContainerGeral}>
                <View style={styles.Entradas}>
                    <Text style={styles.Text}>Digite seu email para recuperação da senha</Text>
                    <TextInput keyboardType='email-address' maxLength={30} autoCapitalize='none'
                        style={styles.TextInput} placeholder='Email' value={this.state.email} onChangeText={email => this.setState({ email })} />
                    <TouchableOpacity style={styles.Botao} onPress={this.Recuperar}>
                        <Text style={styles.TextBotao}>Recuperar</Text>
                    </TouchableOpacity>
                </View>
            </View>

        )
    }
}