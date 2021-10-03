import axios from 'axios'
const baseUrl = 'http://localhost:3003/api/journals'


let token = null
const setToken = newToken => {
  token = `bearer ${newToken}`
} //whenever we create/delete/update a journal, we need to make sure the correct user to logged in. 



const getJournals = () => { //get all journals
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const addJournal = async (journalDetails) => { //add journal 
    const config = {headers: {Authorization:token}}
    const response = await axios.post(baseUrl,journalDetails,config)
    return response
}

export default {setToken, getJournals, addJournal}