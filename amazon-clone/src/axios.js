import axios from 'axios';

const instance = axios.create({
    baseURL: '...' // THE API URL (Cloud Function URL)
})

export default instance;