import React from 'react'
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Image} from 'react-native'
import styles from './EstiloTelaDeLogin'
import * as firebase from 'firebase'

export default class TelaDeLogin extends React.Component{
    state = {
        email: '',
        password: '',
        isAuthenticated: false,
        
    }
    componentDidMount() {
        const firebaseConfig = {
            apiKey: "AIzaSyCInvmVvdVUeJ2e0rO1trOQW2Z53aL_wsY",
            authDomain: "posso-calcular.firebaseapp.com",
            databaseURL: "https://posso-calcular.firebaseio.com",
            projectId: "posso-calcular",
            storageBucket: "posso-calcular.appspot.com",
            messagingSenderId: "477986938088",
            appId: "1:477986938088:web:2bea1032f485991a"
        }
        firebase.initializeApp(firebaseConfig);
        
    }

    login = async () => {
        try {
            const user = await firebase.auth()
                .signInWithEmailAndPassword(this.state.email, this.state.password)
            this.setState({ isAuthenticated: true })
            this.props.navigation.navigate('Principal')
        }
        catch{
            alert('Usuario ou senha incorreto')
            this.setState({email:''})
            this.setState({password:''})
        }
    }


    render(){
        return(
            <KeyboardAvoidingView behavior='position'>
                <View style={styles.ContainerGeral}>
                    <View style={styles.ViewImagem}>
                        <Image source={require('../TelaDeLogin/bankete.png')} style={styles.Imagem}>
                        </Image>
                    </View>
                    <View style={styles.Entradas}>
                        <TextInput keyboardType='email-address' maxLength={30} autoCapitalize='none'
                        style={styles.TextInput} placeholder='Email' value={this.state.email} onChangeText={email => this.setState({ email })}/>

                        <TextInput secureTextEntry={true} autoCapitalize='none' style={styles.TextInput} placeholder='Senha'
                        value={this.state.password} onChangeText={password => this.setState({ password })}/>

                        <TouchableOpacity style={styles.BotaoDeEntrar} onPress={this.login}>
                            <Text style={styles.TextEntrar}>Entrar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.BotaoDeCadastrar} onPress={()=>this.props.navigation.navigate('Cadastro')}>
                            <Text style={styles.TextCadastrar}>Cadastrar-se</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.BotaoEsqueceu} onPress={()=>this.props.navigation.navigate('TelaDeRecuperacao')}>
                            <Text style={styles.TextEsqueceu}>Esqueceu a senha?</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        )
    }
}