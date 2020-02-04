import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    ContainerGeral: {
        width: '100%',
        height: '100%',
        backgroundColor:'#F2C04D',
        alignItems:'center'},
    ViewName:{
        height:'8%',
        marginTop:'5%',
        alignItems:'center',
        justifyContent:'center'
    },
    TextName:{
        color:'#FFF',
        fontSize:25
    },
    MiddleContent:{
        width:'80%',
        height:'60%',
    },
    RedView:{
        width:'100%',
        height:'80%',
        backgroundColor:'#F56960',
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        alignItems:'center',
        justifyContent:'center'
    },
    TextSaldo:{
        fontSize:25,
        color:'#FFF',
        marginBottom:'10%'
    },
    TextSaldoDois:{
        fontSize:45,
        color:'#FFF',
        fontWeight:'bold'
    },
    WhiteView:{
        width:'100%',
        height:'20%',
        backgroundColor:'#FFF',
        justifyContent:'center',
        alignItems:'center'
    },
    TextLog:{
        fontSize:20,
        color:'#393E41',
    },
    Botoes:{
        width:'80%',
        height:'20%',
    },
    Botao:{
        width:'100%',
        height:'40%',
        backgroundColor:'#2274A5',
        marginTop:'5%',
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center'
    },
    TextBotao:{
        color:'#FFF',
        fontSize:25,
        fontWeight:'bold'
    }
    })

export default styles