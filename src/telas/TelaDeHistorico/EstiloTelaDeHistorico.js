import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    ContainerGeral: {
        width: '100%',
        height: '100%',
        backgroundColor:'#F2C04D',
        alignItems:'center'
    },
    TopViewBlue:{
        width:'100%',
        height:'30%',
        backgroundColor:'#2274A5',
        alignItems:'center',
        justifyContent:'center'
    },
    TextSaldo:{
        fontSize:25,
        color:'#FFF',
    },
    TextSaldoDois:{
        fontSize:45,
        color:'#FFF',
        fontWeight:'bold'
    },
    ViewHorizontal:{
        width:'100%',
        height:'30%',
        flexDirection:'row',
        marginTop:'10%',
        justifyContent:'space-between'

    },
    Botao:{
        width:'25%',
        height:'80%',
        backgroundColor:'#F56960',
        borderRadius:10,
        marginLeft:'5%',
        alignItems:'center',
        justifyContent:'center'
    },
    BotaoDois:{
        width:'25%',
        height:'80%',
        backgroundColor:'#F56960',
        borderRadius:10,
        marginRight:'5%',
        alignItems:'center',
        justifyContent:'center'
    },
    BotaoTres:{
        width:'25%',
        height:'80%',
        backgroundColor:'#F56960',
        borderRadius:10,
        marginRight:'1.9%',
        alignItems:'center',
        justifyContent:'center'
    },
    TextBotoes:{
        color:'#FFF',
        fontSize:20,
        fontWeight:'bold'
    },
    })

export default styles