import axios from "axios"

const instance = axios.create({
    baseUrl: 'http://localhost:5001/commerce-c5f88/us-central1/api'
})

export default instance