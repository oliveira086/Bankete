import React from 'react'
import { View, Text, TextInput, TouchableOpacity, } from 'react-native'
import styles from './EstiloTelaDeConfirmacaoDeDados'
import * as firebase from 'firebase'

export default class TelaDeLogin extends React.Component {
    state = {
        IdDestinatario: '',
        NomeDestinatario: '',
        Valor: '',
        Saldo: '',
        SaldoDestinatario:0,
        Data: '',
        Hora: ''

    }
    componentWillMount() {

        const salvandoDadosDoUser = firebase.database().ref('users/' + firebase.auth()
            .currentUser.uid + '/Transferencia/' + firebase.auth().currentUser.uid + 'Transferencia').once('value')
            .then(function (snapshot) {
                var Dia = snapshot.val().Data
                var Horario = snapshot.val().Hora
                this.UparDataEHora(Dia, Horario)
            })
        UparDataEHora = (Dia, Horario) => {
            this.setState({ Data: Dia })
            this.setState({ Hora: Horario })
            this.UparDadosParaOBancoDeDados
        }

        const Dados = firebase.database().ref('users/' + firebase.auth().currentUser.uid +
            '/Transferencia/' + firebase.auth().currentUser.uid + 'Transferencia/')
            .once('value').then(function (snapshot) {
                IdDoDestinatario = String(snapshot.val().Destinatario)
                ValorDaTransferencia = String(snapshot.val().Valor)
                this.UparDadosProEstado(IdDoDestinatario, ValorDaTransferencia)
            })

        UparDadosProEstado = (IdDoDestinatario, ValorDaTransferencia) => {
            this.setState({ IdDestinatario: IdDoDestinatario })
            this.setState({ Valor: ValorDaTransferencia })
            this.ObterDados(IdDoDestinatario)
        }

    }
    ObterDados = async (IdDoDestinatario) => {
        const DadosDois = firebase.database().ref('users/' + IdDoDestinatario).once('value')
            .then(function (snapshot) {
                NomeDestinatario = String(snapshot.val().Nome)
                this.UparNome(NomeDestinatario)
            })

        UparNome = (NomeDestinatario) => {
            this.setState({ NomeDestinatario: NomeDestinatario })
        }
    }

    ObterSaldo = async () => {
        const DadosDois = firebase.database().ref('users/' + firebase.auth().currentUser.uid).once('value')
            .then(function (snapshot) {
                SaldoEmConta = snapshot.val().Saldo
                this.UparSaldo(SaldoEmConta)
            })
    }
    UparSaldo = (SaldoEmConta) => {
        this.setState({ Saldo: SaldoEmConta })
    }

    VerificarDebito = async () => {
        var ValorTransferir = this.state.Valor
        if (Saldo > ValorTransferir) {
            const salvandoDadosDoDinheiro = firebase.database().ref('users/'+ `${this.state.IdDestinatario}/`).once('value')
            .then(function (snapshot) {
                Dinheiro = snapshot.val().Saldo
                SomarA = parseFloat(Dinheiro)
                SomarB = parseFloat(ValorTransferir)
                Somar = SomarA + SomarB
                this.UparDinheiro(Somar)
            })
            UparDinheiro = (Somar) =>{
                const salvandoDadosDoSaldo = firebase.database().ref('users/'+ `${this.state.IdDestinatario}/`)
                .update({
                    Saldo: Somar
                })
                
            } 
            
            

            const salvandoDadosDoUser = await firebase.database().ref('Transferencias/').push({
                Remetente: firebase.auth().currentUser.uid,
                Destinatario: this.state.IdDestinatario,
                Hora: this.state.Hora,
                Data: this.state.Data,
                Valor: this.state.Valor
            })

            var Debito = parseFloat(Saldo) - parseFloat(ValorTransferir)
            var DebitoCerto = parseFloat(Debito.toFixed(2))
            const Dados = firebase.database().ref('users/'+firebase.auth().currentUser.uid).update({
                Saldo:DebitoCerto
            })
            this.props.navigation.navigate('TelaDeRedirecionar')
            

        }
        else {
            alert('Saldo Insuficente!')
            this.props.navigation.navigate('Principal')

        }
    }




    render() {
        return (
            <View style={styles.ContainerGeral}>
                <View style={styles.ViewDadosTop}>
                    <Text style={styles.TextTop}>Você está Transferindo</Text>
                    <Text style={styles.TextMiddle}>{`R$ ${this.state.Valor}`}</Text>
                    <Text style={styles.TextBottom}>{`Para ${this.state.NomeDestinatario}`}</Text>
                </View>
                <View style={styles.ViewDados}>
                    <View style={styles.ViewDadosLinha}>
                        <Text style={styles.TextLinha}>Nome</Text>
                        <Text style={styles.TextLinhaDois}>{this.state.NomeDestinatario}</Text>
                    </View>
                    <View style={styles.ViewDadosLinha}>
                        <Text style={styles.TextLinha}>Conta</Text>
                        <Text style={styles.TextLinhaDois}>{this.state.IdDestinatario}</Text>
                    </View>
                    <View style={styles.ViewDadosLinha}>
                        <Text style={styles.TextLinha}>Valor</Text>
                        <Text style={styles.TextLinhaDois}>{`R$ ${this.state.Valor}`}</Text>
                    </View>
                </View>
                <View style={styles.ViewBotao}>
                    <TouchableOpacity style={styles.BotaoConfirmar} onPress={this.VerificarDebito}>
                        <Text style={styles.TextBotao}>Confirmar Transferencia</Text>
                    </TouchableOpacity>
                </View>



            </View>
        )
    }
}