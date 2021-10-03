
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import authReducer from './reducers/authReducer'
import journalReducer from './reducers/journalReducer'
import notiReducer from './reducers/notiReducer'


const reducer = combineReducers({
    user: authReducer ,
    journals: journalReducer,
    notification: notiReducer
})

const store = createStore(reducer,applyMiddleware(thunk))

export default store 