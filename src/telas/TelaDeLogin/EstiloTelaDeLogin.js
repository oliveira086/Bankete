import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    ContainerGeral: {
        width: '100%',
        height: '100%',
        backgroundColor:'#F2C04D',
        alignItems:'center'},

    ViewImagem:{
        width:'80%',
        height:'45%',
        justifyContent:'center',
        alignItems:'center'
    },
    Imagem:{
        width:'100%',
        height:'100%'
    },
    Entradas:{
        width:'80%',
        height:'40%',
        
    },
    TextInput:{
        width:'100%',
        height:'20%',
        backgroundColor:'#FFF',
        borderRadius:10,
        borderWidth:2,
        borderColor:'#2274A5',
        marginTop:'2%',
        textAlign:'center',
        fontSize:15
    },
    BotaoDeEntrar:{
        width:'100%',
        height:'20%',
        borderRadius:10,
        backgroundColor:'#F56960',
        alignItems:'center',
        justifyContent:'center',
        marginTop:'4%'
    },
    TextEntrar:{
        color:'#FFF',
        fontWeight:'bold',
        fontSize:20
    },
    BotaoDeCadastrar:{
        width:'100%',
        height:'20%',
        borderRadius:10,
        backgroundColor:'#2274A5',
        alignItems:'center',
        justifyContent:'center',
        marginTop:'4%'
    },
    TextCadastrar:{
        color:'#FFF',
        fontWeight:'bold',
        fontSize:20,
    },
    BotaoEsqueceu:{
        backgroundColor:'#F2C04D',
        marginTop:'2%',
        alignItems:'center',
        justifyContent:'center',
    },
    TextEsqueceu:{
        color:'#FFF',
        fontWeight:'bold',
        fontSize:15
    },
    
    
    })

export default styles