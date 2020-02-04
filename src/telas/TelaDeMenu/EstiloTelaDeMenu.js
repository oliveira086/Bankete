import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    ContainerGeral: {
        width: '100%',
        height: '100%',
        backgroundColor:'#F2C04D',
        alignItems:'center',
    },
    ViewQr:{
        flexDirection:'column',
        width:'40%',
        height:'20%',
        alignItems:'center',
        justifyContent:'center',
        marginTop:'10%'
    },
    TextTop:{
        marginTop:'10%',
        color:'#FFF',
        fontSize:30
    },
    ViewBotoes:{
        width:'90%',
        height:'50%',
        justifyContent:'space-between'
    },
    ViewTextInput:{
        width:'60%',
        height:'5%',
        backgroundColor:'#2274A5',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:5

    },
    Botoes:{
        width:'100%',
        height:'15%',
        backgroundColor:'#F56960',
        borderRadius:5,
        alignItems:'center',
        justifyContent:'center',
        marginTop:'2%'
    },
    BotaoSair:{
        width:'100%',
        height:'15%',
        backgroundColor:'#2274A5',
        borderRadius:5,
        alignItems:'center',
        justifyContent:'center',
    },
    TextBotao:{
        fontSize:20,
        color:'#FFF'
    },
    TextBotaoDois:{
        fontSize:15,
        color:'#898989'
    },
    TextInput:{
        fontSize:20,
        color:'#FFF'
    },
    
    })

export default styles