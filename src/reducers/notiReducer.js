const notiReducer = (state = null , action) => {
    switch(action.type) {
        case 'signin':
            return action.message

        case 'reset':
            return action.message

        case 'journal':
            return action.message

        default: 
            return state 
    }
}

export const signinError = () => {
    return async dispatch => {
        dispatch({
            type: 'signin',
            message: 'Error signing in. Please check your credentials again!'
        })
    }}

export const resetError = () => {
    return async dispatch => {
        dispatch({
            type:'reset',
            message:null
        })
    }
}

export const journalError = () => {
    return async dispatch => { 
        dispatch({
            type:'journal',
            message:'Error addding journal. Please check for both title and body!'
        })
    }
}



export default notiReducer