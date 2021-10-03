
import loginService from '../services/login'
import journalService from '../services/journal'
import { signinError,resetError } from './notiReducer'


const authReducer = (state = null , action) => {
    switch(action.type) {
        case 'INIT_USER' : 
            return action.user 

        case 'LOGIN' : 
            return action.user 

        case 'LOGOUT' : 
            return action.user 

        default: 
            return state 
    }
}

export const initUser = () => {
    return async dispatch => {
        //if there is a user already logged in, we use that detail to stay logged on.
        const loggedUserJSON = window.localStorage.getItem('loggedOnUser')
        if (loggedUserJSON){
            const user = JSON.parse(loggedUserJSON)
            journalService.setToken(user.token)
            dispatch({
                type:'INIT_USER',
                user:user 
            }) } 
    }}


export const loginUser = (username,password) => { 
    
    return async dispatch => {
        try {
        const response = await loginService.login({"username":username,"password":password})
        if (response.status == 200) {
            const user = response.data
            window.localStorage.setItem('loggedOnUser',JSON.stringify(user))
            journalService.setToken(user.token)
            dispatch({
                type:'LOGIN',
                user: user
            }) 
        }
        }
        catch(err){
            await dispatch(signinError())
            const waitFor = delay => new Promise(resolve => setTimeout(resolve, delay));
            await waitFor(3000);
            await dispatch(resetError())
        }
        
        
    }
}

export const logoutUser = () => {
    return async dispatch => {
        console.log("Logged out")
        window.localStorage.removeItem('loggedOnUser')
        dispatch({
            type:'LOGOUT',
            user: null
        })
    }
}


export default authReducer 