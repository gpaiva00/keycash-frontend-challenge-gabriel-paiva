import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3000/properties',
  // baseURL: 'http://192.168.18.7:3000/properties',
  // baseURL: 'http://168.232.162.129:3000/properties',
})

export default api
