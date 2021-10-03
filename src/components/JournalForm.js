
import { useSelector,useDispatch } from "react-redux"
import { useEffect } from "react"
import { init_journals} from "../reducers/journalReducer"
import TextInput from './TextInput'
import { makeStyles, Container, Typography, Avatar, Box} from "@material-ui/core"



const useStyles = makeStyles((theme) => ({
    avatar: {
        margin:theme.spacing(1),
        backgroundColor: theme.palette.secondary.main
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }
}))

const JournalForm = () => {
    const journals = useSelector(state=>state.journals);
    const dispatch = useDispatch();
    const classes = useStyles();


    useEffect(() => {
        dispatch(init_journals()) //if there is a user logged on from window.localstorage, we set it to user state. 
    },[dispatch]) 

  
    return (
        <Container component="main">
            <div className={classes.paper}>
                <TextInput label="What are you grateful for today?" title="Enter your title here:"></TextInput>
                 <br></br>
                 <br></br>
                 <br></br>
                 <Typography variant='h3'>Your past gratitudes - don't stop now!</Typography>
                 <br></br>
                {journals.map(journal => <div>{journal.data}</div>)}
            </div>
        </Container>
        // <div>
        //     <TextInput label="What are you grateful for today?" title="Enter your title here:"></TextInput>


        //     <br></br>
        //     <br></br>
        //     <br></br>
        //     <Typography variant='h3'>Your past gratitudes - don't stop now!</Typography>
        //     <br></br>
        //    {journals.map(journal => <div>{journal.data}</div>)}
        // </div>
    )
}

export default JournalForm