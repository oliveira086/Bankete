import {USUARIO_LOGADO,USUARIO_DESLOGADO} from './actionsTypes'

export const login = user =>{
    return{
        type: USUARIO_LOGADO,
        payload: user
    }

}

export const sair = user =>{
    return{
        type: USUARIO_DESLOGADO,
    }

}