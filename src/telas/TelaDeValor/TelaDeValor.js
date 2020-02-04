import React from 'react'
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Image } from 'react-native'
import styles from './EstiloTelaDeValor'
import * as firebase from 'firebase'

export default class TelaDeLogin extends React.Component {
    state = {
        IdDestinatario: '',
        NomeDestinatario: '',
        Valor:''

    }
    componentDidMount(){
        const Dados = firebase.database().ref('users/' + firebase.auth().currentUser.uid +
            '/Transferencia/' + firebase.auth().currentUser.uid + 'Transferencia/')
            .once('value').then(function (snapshot) {
                IdDoDestinatario = String(snapshot.val().Destinatario)
                ValorDaTransferencia = String(snapshot.val().Valor)
                this.UparDadosProEstado(IdDoDestinatario)
            })

        UparDadosProEstado = (IdDoDestinatario) => {
            this.setState({ IdDestinatario: IdDoDestinatario })
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
    ConfirmarDados = async () =>{
        const salvandoDadosDoUser = await firebase.database().ref('users/'+ firebase.auth().currentUser.uid + '/Transferencia/'
        + firebase.auth().currentUser.uid+'Transferencia').update({
            Valor:this.state.Valor,
        })
        this.MudarTela()
    }
    MudarTela = () => {
        this.props.navigation.navigate('TelaDeConfirmacao')
    }



    render() {
        return (
            <View style={styles.ContainerGeral}>
                <View style={styles.ViewTop}>
                    <Text style={styles.Text}>{`Quanto você quer transferir para\n${this.state.NomeDestinatario}`}</Text>
                    <View style={styles.ViewHorizontal}>
                        <TextInput style={styles.TextInput} keyboardType='phone-pad' maxLength={5}
                        placeholder='R$' value={this.state.Valor} onChangeText={Valor => this.setState({ Valor })}></TextInput>
                    </View>
                </View>


                <View style={styles.ViewBotoes}>
                    <TouchableOpacity style={styles.BotaoConfirmar} onPress={this.ConfirmarDados}>
                        <Text style={styles.TextBotao}>Confirmar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.BotaoVoltar}>
                        <Text style={styles.TextBotao}>Voltar</Text>
                    </TouchableOpacity>
                </View>


            </View>
        )
    }
}