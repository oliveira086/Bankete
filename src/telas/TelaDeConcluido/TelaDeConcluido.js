import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './EstiloTelaDeConcluido'
import * as firebase from 'firebase'

export default class TelaDeLogin extends React.Component {
    state = {
        Codigo:'',
        SaldoAtual:''
    }

    componentWillMount() {
        var ref = firebase.database().ref()
        ref.child('/Transferencias').orderByKey().limitToLast(1).on('child_added',function (snapshot) {
            Chave = String(snapshot.key)
        })
        this.setState({Codigo:Chave})

        const Dados = firebase.database().ref('users/'+firebase.auth().currentUser.uid).once('value')
        .then(function(snapshot) {
            Saldo = snapshot.val().Saldo
        })
        this.setState({SaldoAtual:Saldo})
    }

    
 
    render() {
        return (
            <View style={styles.ContainerGeral}>
                <View style={styles.ViewTop}>
                    <Text style={styles.Text}>Transferencia Concluida</Text>
                </View>
                <View style={styles.ViewSaldo}>
                    <Text style={styles.TextDois}>Saldo Atual</Text>
                    <Text style={styles.Text}>{`R$ ${this.state.SaldoAtual}`}</Text>
                </View>
                <View style={styles.ViewCodigo}>
                    <Text style={styles.TextDois}>Codigo da Transferencia</Text>
                    <Text style={styles.TextTres}>{this.state.Codigo}</Text>
                </View>
                
                <View style={styles.ViewBotao}>
                    <TouchableOpacity style={styles.Botao} onPress={() => this.props.navigation.navigate('Principal')}>
                        <Text style={styles.Text}>Concluir</Text>
                    </TouchableOpacity>
                    
                </View>

            </View>

        )
    }
}