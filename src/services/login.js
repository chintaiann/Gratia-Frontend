import axios from 'axios'
const baseUrl = 'http://localhost:3003/api/login'

const login = async credentials => { //login 
  const response = await axios.post(baseUrl,credentials)
  return response
}

export default { login }