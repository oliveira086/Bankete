import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './EstiloTelaDeHistorico'
import * as firebase from 'firebase'

export default class TelaDeLogin extends React.Component {


    state = {
        Saldo:''
    }
        
    componentWillMount(){
        const Dados = firebase.database().ref('users/'+firebase.auth().currentUser.uid).once('value')
        .then(function(snapshot) { 
            Saldo = snapshot.val().Saldo
            this.SaldoAtual(Saldo)
        })

        SaldoAtual = (Saldo) =>{
            this.setState({Saldo: Saldo})
        }
    }
    

    render() {
        return (
            <View style={styles.ContainerGeral}>
                <View style={styles.TopViewBlue}>
                    <Text style={styles.TextSaldo}>Saldo</Text>
                    <Text style={styles.TextSaldoDois}>{`R$ ${this.state.Saldo}`}</Text>
                    <View style={styles.ViewHorizontal}>
                        <TouchableOpacity style={styles.Botao}>
                            <Text style={styles.TextBotoes}>Pagar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.BotaoTres}>
                            <Text style={styles.TextBotoes}>Guardar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.BotaoDois}>
                            <Text style={styles.TextBotoes}>Transferir</Text>
                        </TouchableOpacity>
                    </View>
                </View>


            </View>

        )
    }
}