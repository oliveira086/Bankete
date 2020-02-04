import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    ContainerGeral: {
        width: '100%',
        height: '100%',
        backgroundColor:'#F2C04D',
        alignItems:'center'
    },
    ViewFundo:{
        width:'95%',
        height:'20%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',

    },
    Text:{
        color:'#FFF',
        fontSize:25,
        marginTop:'5%',
        marginBottom:'2%'
    },
    TextInput:{
        width:'40%',
        height:'50%',
        borderWidth:2,
        borderColor:'#F56960',
        borderRadius:5,
        textAlign:'center',
        fontSize:50
    },
    Botao:{
        width:'95%',
        height:'40%',
        backgroundColor:'#F56960',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:5,
    },
    BotaoConfirmar:{
        width:'95%',
        height:'40%',
        backgroundColor:'#2274A5',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:5,
        
    },
    TextBotao:{
        color:'#FFF',
        fontSize:20
    },
    ViewBotao:{
        width:'100%',
        height:'20%',
        alignItems:'center',
        justifyContent:'space-between'
    }
    
    })

export default styles