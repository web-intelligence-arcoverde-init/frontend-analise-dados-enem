import axios from 'axios'

const api = axios.create({
  baseURL: 'http://18.228.9.148:3333/api/v1/',
})

export default api
