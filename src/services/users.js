
import axios from 'axios'
const baseUrl = '/api/users'

const getAll = async () => { //get all users 
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const newUser = async (userDetails) => { //register new user 
    const response = await axios.post(baseUrl, userDetails)
    return response.data 
}


export default { getAll , newUser }