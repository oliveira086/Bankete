import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    ContainerGeral: {
        width: '100%',
        height: '100%',
        backgroundColor:'#F2C04D',
        alignItems:'center'
    },
    ViewDadosTop:{
        width:'100%',
        height:'30%',
        alignItems:'center',
        justifyContent:'center'
    },
    TextTop:{
        fontSize:30,
        color:'#000',
    },
    TextMiddle:{
        fontSize:40,
        fontWeight:'bold',
        color:'#FFF'
    },
    TextBottom:{
        fontSize:20,
        color:'#494949',
    },
    ViewDados:{
        width:'100%',
        height:'30%',
        backgroundColor:'#F56960',
        justifyContent:'center',
        alignItems:'center',
        marginBottom:'10%'
    },
    ViewDadosLinha:{
        flexDirection:'row',
        width:'98%',
        height:'20%',
        backgroundColor:'#2274A5',
        borderRadius:5,
        alignItems:'center',
        justifyContent:'space-between',
        marginTop:'1%',
        marginBottom:'1%',
        marginLeft:'1%',
        marginRight:'1%',
    },
    TextLinha:{
        fontSize:15,
        color:'#FFF',
        marginLeft:'2%'
    },
    TextLinhaDois:{
        fontSize:15,
        color:'#FFF',
        marginRight:'2%'
    },
    ViewBotao:{
        width:'100%',
        height:'10%',
        
    },
    BotaoConfirmar:{
        width:'100%',
        height:'100%',
        backgroundColor:'#2274A5',
        borderRadius:5,
        alignItems:'center',
        justifyContent:'center'
    },
    TextBotao:{
        fontSize:20,
        color:'#FFF',
        fontWeight:'bold'
    }

    
    })

export default styles