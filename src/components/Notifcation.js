import {useDispatch,useSelector} from 'react-redux'
import Typography from '@material-ui/core/Typography';



const Notification = () => {
    const noti = useSelector(state=>state.notification)


    return (
        <div>
            <Typography variant='h4'>{noti}</Typography>
        </div>
    )
}


export default Notification