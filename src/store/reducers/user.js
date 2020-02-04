import { USUARIO_LOGADO, USUARIO_DESLOGADO } from '../actions/actionsTypes'

const initalState = {
    email: null,
    password: null
}

const reducer = (state = initalState, action) => {
    switch (action.type) {
        case USUARIO_LOGADO:
            return {
                ...state,
                email: action.payload.email,
                password: action.payload.password
            }
        case USUARIO_DESLOGADO:
            return {
                ...state,
                email: null,
                password: null
            }
        default:
            return state
    }
}

export default reducer