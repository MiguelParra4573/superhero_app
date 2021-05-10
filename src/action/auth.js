import { fetchSinTokent } from "../helpers/fetch"
import { types } from "../types/types"
export const startLogin = (email,password) => {
   
    return async (dispatch) => {
        const token = await fetchSinTokent({ email, password}, 'POST')
        // console.log(token);
        
        if ( token ) {
            localStorage.setItem('token', JSON.stringify(token) )
            dispatch(login(token))
        }else{
            console.error("Ha ingresado mal los datos")
            // TODO: Mejorar como se muestra el error
        }
    }
}

// Action
const login = ( token ) => ({
    type: types.login,
    payload: token
});

export const startChecking = () => {
    return (dispatch) => {
        (!!localStorage.getItem('token')) ?
                    (dispatch(logeado())) :
                    (dispatch(logout()))

    }
}

const logeado = () => ({ type: types.checkingLog })

export const startLogout = () =>{
    return (dispatch) => {
        localStorage.removeItem('token')        
        dispatch(logout())
    }
}

const logout = () => ({
    type: types.logout,
});

