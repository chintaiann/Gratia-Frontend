import journalService from '../services/journal'
import { journalError,resetError } from './notiReducer'

const journalReducer = (state = [] , action) => {
    switch(action.type) {
        case 'INIT' : 
            return action.journal

        case 'ADD' : 
            return state.concat(action.journal)

        default: 
            return state 
    }
}

export const init_journals = () => {
    return async dispatch => {
        const response = await journalService.getJournals()
        
       dispatch({
           type:'INIT',
           journal: response
       })
    }}


export const addJournal = (journal) => { 
    return async dispatch => {
        try {
            const response = await journalService.addJournal(journal)
            if (response.status == 201) {
                dispatch({
                    type: 'ADD',
                    journal: journal
                })
            }
        }
        catch(err){
            await dispatch(journalError())
            const waitFor = delay => new Promise(resolve => setTimeout(resolve, delay));
            await waitFor(3000);
            await dispatch(resetError())
        }
        
       
      
    }
}

export default journalReducer 