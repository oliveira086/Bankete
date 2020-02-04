import React, {useState, useEffect} from 'react'
import { View, Text, TextInput, TouchableOpacity, FlatList} from 'react-native'
import styles from './EstiloTelaDeTransferencia'

import * as firebase from 'firebase'

export default class TelaDeTransferencia extends React.Component {
    constructor(props) {
        
        super(props)
        
        var date = new Date().getDate(); //Current Date
        var month = new Date().getMonth() + 1; //Current Month
        var year = new Date().getFullYear(); //Current Year
        var hours = new Date().getHours(); //Current Hours
        var min = new Date().getMinutes(); //Current Minutes
        var sec = new Date().getSeconds(); //Current Seconds
        this.state = {
            data: [],
            Dia: `${date}/${month}/${year}`,
            Hora: `${hours}:${min}:${sec}`,

        }

        var ref = firebase.database().ref('users/' + firebase.auth()
            .currentUser.uid).child('Contatos')

        ref.once('value').then(snapshot => {
            var samplesObject = snapshot.val();
            var items = []
            snapshot.forEach((child) => {
                items.push({
                    Id: child.val().Id,
                    Conta: child.val().Conta,
                    Nome: child.val().Nome,

                })
            })

            this.setState({ data: items })
        })
    }
    AdicionarId = (Conta) => {
        const salvandoDadosDoUser = firebase.database().ref('users/' + firebase.auth().currentUser.uid + '/Transferencia/'
            + firebase.auth().currentUser.uid + 'Transferencia').update({
                Remetente: firebase.auth().currentUser.uid,
                Destinatario: Conta,
                Hora: this.state.Hora,
                Data: this.state.Dia,
                Valor: 0,
            })
            this.MudarTela()
    }
    MudarTela = () =>{
        this.props.navigation.navigate('TelaDeValor')
    }

    renderItem = ({ item }) => {
        var Conta = item.Conta
        return <TouchableOpacity style={styles.ViewFundo} onPress={() => this.AdicionarId(Conta)}>
            <Text style={styles.Text}>{item.Nome}</Text>
        </TouchableOpacity>
    }
    
        render(){   
        return (
            <View style={styles.ContainerGeral}>
                <View style={styles.ViewTop}>
                    <TextInput style={styles.Buscar} placeholder='Buscar contato'></TextInput>
                    <TouchableOpacity style={styles.Botao} onPress={() =>this.props.navigation.navigate('TelaTransferenciaNovo')}>
                        <Text style={styles.TextBotao}>Transferir para novo contato</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.Contato}>
                    <View style={styles.ViewTM}>
                        
                    <FlatList
                        data={this.state.data}
                        keyExtractor={(item) => item.Id.toString()}
                        renderItem={this.renderItem}
                    >

                    </FlatList>

                </View>
                </View>
            </View>
        )
    }
}
