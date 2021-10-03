
import './App.css';
import SignIn from './components/SignIn'
import {useDispatch,useSelector} from 'react-redux'
import { useEffect } from 'react'
import { logoutUser , initUser} from './reducers/authReducer'
import Notification from './components/Notifcation';

import JournalForm from './components/JournalForm';
const App = () => {
  const dispatch = useDispatch()
  const user = useSelector(state=>state.user)

  useEffect(() => {
    dispatch(initUser()) //if there is a user logged on from window.localstorage, we set it to user state. 
  },[dispatch]) 

  return (
   <div>
     <Notification></Notification>
     {user === null ? 
        <SignIn></SignIn>
      :
        <div>
          Logged in {user.username}
          <br></br>
          <br></br>
          <button onClick={ () => dispatch(logoutUser())}>Logout</button>
          <JournalForm></JournalForm>
        </div>}
        
     
   </div>
  )
}

export default App;
