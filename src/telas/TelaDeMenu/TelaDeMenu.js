import React from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import styles from './EstiloTelaDeMenu'
import * as firebase from 'firebase'
import QRCode from 'react-native-qrcode-svg'

export default class TelaDeLogin extends React.Component {
    state = {
        NomeSocial: '',
        Id:'Bankete',
    }
    
    componentWillMount(){
        const Dados = firebase.database().ref('users/'+firebase.auth().currentUser.uid).once('value')
        .then(function(snapshot) {
            Name = snapshot.val().NomeSocial
            Identificacao = firebase.auth().currentUser.uid 
            this.Nome(Name,Identificacao)
        })

        Nome = (Name,Identificacao) =>{
            this.setState({NomeSocial:Name})
            this.setState({Id:Identificacao})
        }
    }
    

    render() {
        return (
            <View style={styles.ContainerGeral}>
                <Text style={styles.TextTop}>{this.state.NomeSocial}</Text>
                <View style={styles.ViewQr}>
                    <QRCode
                        value={this.state.Id}
                        color='#000'
                        logoSize={1000}
                        backgroundColor='#FFF'>
                    </QRCode>
                </View>
                <View style={styles.ViewTextInput}>
                    <TextInput style={styles.TextInput} value={this.state.Id}></TextInput>
                </View>
                <View style={styles.ViewBotoes}>
                    <TouchableOpacity style={styles.Botoes}>
                        <Text style={styles.TextBotao}>Ajuda</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.Botoes} onPress={()=>this.props.navigation.navigate('TelaDeSeisDigitos')}>
                        <Text style={styles.TextBotao}>Adicionar/Mudar senha de 6 digitos</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.Botoes}>
                        <Text style={styles.TextBotao}>Configurações do app</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.Botoes}>
                        <Text style={styles.TextBotao}>Perfil</Text>
                        <Text style={styles.TextBotaoDois}>Alterar nome e senhas</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.BotaoSair}>
                        <Text style={styles.TextBotao}>Sair</Text>
                    </TouchableOpacity>
                    
                </View>

            </View>
        )
    }
}