
import { useSelector,useDispatch } from "react-redux"
import { useEffect } from "react"
import { init_journals, addJournal } from "../reducers/journalReducer"
import TextInput from './TextInput'
import { Typography } from "@material-ui/core"

const JournalForm = () => {
    const journals = useSelector(state=>state.journals)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(init_journals()) //if there is a user logged on from window.localstorage, we set it to user state. 
    },[dispatch]) 

   




    return (
        <div>
            <TextInput label="What are you grateful for today?" title="Enter your title here:"></TextInput>


            <br></br>
            <br></br>
            <br></br>
            <Typography variant='h3'>Your past gratitudes - don't stop now!</Typography>
            <br></br>
           {journals.map(journal => <div>{journal.data}</div>)}
        </div>
    )
}

export default JournalForm