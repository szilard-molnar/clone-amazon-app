import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5001/clone-6ae1d/us-central1/api' // THE API URL (Cloud Function URL)
})

export default instance;