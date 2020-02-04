import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './EstiloTelaPrincipal'
import * as firebase from 'firebase'

export default class TelaDeLogin extends React.Component {

    state = {
        NomeSocial: '',
        Saldo:''
    }
        
    componentDidMount(){
        const Dados = firebase.database().ref('users/'+firebase.auth().currentUser.uid).once('value')
        .then(function(snapshot) {
            Name = snapshot.val().NomeSocial 
            Saldo = snapshot.val().Saldo
            this.Nome(Name,Saldo)
        })

        Nome = (Name,Saldo) =>{
            this.setState({NomeSocial:Name})
            this.setState({Saldo: Saldo})
        }
    }
    

    render() {
        return (
            <View style={styles.ContainerGeral}>
                <TouchableOpacity style={styles.ViewName} onPress={() =>this.props.navigation.navigate('TelaDeMenu')}>
                    <Text style={styles.TextName}>{this.state.NomeSocial}</Text>
                </TouchableOpacity>
                <View style={styles.MiddleContent}>
                    <TouchableOpacity style={styles.RedView} onPress={()=>this.props.navigation.navigate('Historico')}>
                        <Text style={styles.TextSaldo}>Saldo</Text>
                        <Text style={styles.TextSaldoDois}>R${this.state.Saldo}</Text>
                    </TouchableOpacity>
                    <View style={styles.WhiteView}>
                        <Text style={styles.TextLog}>Transferencia efetuada para David</Text>
                    </View>
                </View>
                <View style={styles.Botoes}>
                    <TouchableOpacity style={styles.Botao} onPress={()=> this.props.navigation.navigate('TelaDePagamento')}>
                        <Text style={styles.TextBotao}>Pagar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.Botao} onPress={()=> this.props.navigation.navigate('Transferencia')}>
                        <Text style={styles.TextBotao}>Transferir</Text>
                    </TouchableOpacity>
                </View>

            </View>

        )
    }
}