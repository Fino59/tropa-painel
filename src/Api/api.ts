import axios from "axios"

var baseUrl

if(process.env.NODE_ENV === 'development') {
  baseUrl = 'https://';
} else if (process.env.NODE_ENV === 'test') {
  baseUrl = 'https://';
} else {
  baseUrl = 'https://'
}

const TOKEN = window.localStorage.getItem('')

const api = axios.create({
  baseURL: baseUrl,
  headers: {
    'Authorization': 'Bearer '+TOKEN
  }
})

export { api, TOKEN }