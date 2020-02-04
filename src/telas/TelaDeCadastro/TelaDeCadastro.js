import React from 'react'
import { AsyncStorage } from 'react-native'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import styles from './EstiloTelaDeCadastro'
import * as firebase from 'firebase'

export default class TelaDeLogin extends React.Component {
    state = {
        Nome:'',
        NomeSocial:'',
        Classe:'0',
        Nascimento:'',
        Curso:'',
        Cpf:'',
        Email:'',
        Senha:'',
        Saldo:'0',
        Guardado:'0',
        ContatosId:0,
        isCadastred: 'false'
    }
    cadastrar = async () => {
        try {
            const usercadastrado = await firebase.auth()
                .createUserWithEmailAndPassword(this.state.Email, this.state.Senha)
            this.props.navigation.navigate('Inicio')
            const salvandoDadosDoUser = await firebase.database().ref('users/' + firebase.auth().currentUser.uid).set({
                Nome: this.state.Nome,
                NomeSocial: this.state.NomeSocial,
                Nascimento: this.state.Nascimento,
                Cpf: this.state.Cpf,
                Classe: this.state.Classe,
                Curso: this.state.Curso,
                Email: this.state.Email,
                Senha: this.state.Senha,
                SenhaSeis: '',
                Saldo: this.state.Saldo,
                Guardado: this.state.Guardado,
                ContatosId:this.state.ContatosId
            })
            this.bancoDeTransferencia()
        }

        catch{
        }
    }

    bancoDeTransferencia = async () =>{
        const salvandoDadosDoUser = await firebase.database().ref('users/'+ firebase.auth().currentUser.uid + '/Transferencia/'
        +firebase.auth().currentUser.uid+'Transferencia').set({
            Remetente: '' ,
            Destinatario:'',
            Hora: '',
            Data: '',
            SenhaSeis:'',
            Valor:0
        })
    }
    render() {
        return (
            <View style={styles.ContainerGeral}>
                <View style={styles.TopView}>
                    <Text style={styles.TextCadastro}>Insira seus dados e cadastre-se</Text>
                </View>


                <View style={styles.Entradas}>
                    <TextInput style={styles.TextInput} keyboardType='default' maxLength={30} autoCapitalize='none'
                        placeholder='Nome completo'  onChangeText={Nome => this.setState({ Nome })}/>

                    <TextInput style={styles.TextInput} keyboardType='default' maxLength={30} autoCapitalize='none'
                        placeholder='Como prefere ser chamado(a)?' onChangeText={NomeSocial => this.setState({ NomeSocial })}/>

                    <TextInput style={styles.TextInput} keyboardType='default' maxLength={30} autoCapitalize='none'
                        placeholder='Data de Nascimento - ex: 22/01/2001' onChangeText={Nascimento => this.setState({ Nascimento })} />

                    <TextInput style={styles.TextInput} keyboardType='numeric' maxLength={11} autoCapitalize='none'
                        placeholder='CPF - somente os numeros' onChangeText={Cpf => this.setState({ Cpf })}/>

                    <TextInput style={styles.TextInput} keyboardType='default' maxLength={30} autoCapitalize='none'
                    placeholder='Curso' onChangeText={Curso => this.setState({Curso})}/>

                    <TextInput style={styles.TextInput} keyboardType='default' maxLength={30} autoCapitalize='none'
                        placeholder='Email' onChangeText={Email => this.setState({ Email })}/>

                    <TextInput style={styles.TextInput} keyboardType='default' maxLength={30} autoCapitalize='none'
                        placeholder='Senha' onChangeText={Senha => this.setState({ Senha })}/>

                    <TouchableOpacity style={styles.Botao} onPress={this.cadastrar}>
                        <Text style={styles.TextBotao}>Cadastrar</Text>
                    </TouchableOpacity>
                </View>

            </View>




        )
    }
}