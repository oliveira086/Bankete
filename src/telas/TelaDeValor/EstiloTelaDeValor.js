import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    ContainerGeral: {
        width: '100%',
        height: '100%',
        backgroundColor:'#F2C04D',
        alignItems:'center'
    },
    ViewTop:{
        width:'100%',
        height:'40%',
        marginRight:'2%',
        alignItems:'center'
    },
    ViewHorizontal:{
        width:'100%',
        height:'30%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    },
    ViewBotoes:{
        width:'100%',
        height:'60%',
        alignItems:'center'
    },
    Text:{
        fontSize:35,
        marginTop:'5%',
        marginLeft:'3%'
    },
    TextRs:{
        fontSize:40,
        fontWeight:'bold',
        marginRight:'2%'
    },
    TextBotao:{
        fontSize:20,
        color:'#FFF'
    },
    TextInput:{
        width:'40%',
        height:'50%',
        fontSize:30,
        textAlign:'center',
        borderWidth:2,
        borderColor:'#000',
        borderRadius:5,
        backgroundColor:'#69B9E9'
    },
    BotaoConfirmar:{
        width:'90%',
        height:'15%',
        backgroundColor:'#2274A5',
        borderRadius:5,
        alignItems:'baseline',
        justifyContent:'flex-end',
        marginTop:'5%',
        justifyContent:'center',
        alignItems:'center'
    },
    BotaoVoltar:{
        width:'90%',
        height:'15%',
        backgroundColor:'#F56960',
        borderRadius:5,
        marginTop:'5%',
        justifyContent:'center',
        alignItems:'center'
    },
    })

export default styles