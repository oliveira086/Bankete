import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    ContainerGeral: {
        width: '100%',
        height: '100%',
        backgroundColor:'#F2C04D',
        alignItems:'center'},
    
    TopView:{
        width:'100%',
        height:'10%',
        backgroundColor:'#2274A5',
        alignItems:'center',
        justifyContent:'center'
    },
    TextCadastro:{
        color:'#FFF',
        fontSize:20,
        fontWeight:'bold'
    },
    Entradas:{
        width:'90%',
        height:'60%',
    },
    TextInput:{
        width:'100%',
        height:'15%',
        backgroundColor:'#FFF',
        borderRadius:10,
        borderWidth:2,
        borderColor:'#2274A5',
        textAlign:'center',
        marginTop:'2%'
    },
    Botao:{
        width:'100%',
        height:'15%',
        backgroundColor:'#F56960',
        borderRadius:10,
        marginTop:'4%',
        alignItems:'center',
        justifyContent:'center'
    },
    TextBotao:{
        fontSize:25,
        color:'#FFF',
        fontWeight:'bold'
    }
    
    })

export default styles