import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './EstiloTelaDeRedirecionar'
import * as firebase from 'firebase'

export default class TelaDeLogin extends React.Component {
    state={
        CodigoTransferencia:'',
    }

    componentWillMount() {
        var refDois = firebase.database().ref()
        refDois.child('/Transferencias').on('child_added',function (snapshot, prevChildKey) {
            var Chave = prevChildKey
            this.UparChave(Chave)
        })
        UparChave = (Chave) =>{
            this.setState({CodigoTransferencia:Chave})
            this.props.navigation.navigate('TelaDeConcluido')
        }
        
    }



    render() {
        return (
            <View style={styles.ContainerGeral}>
                <View style={styles.ViewTop}>
                    <Text style={styles.Text}>Transferencia em andamento</Text>
                </View>

            </View>

        )
    }
}