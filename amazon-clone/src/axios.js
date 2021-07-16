import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://us-central1-clone-6ae1d.cloudfunctions.net/api'
    // 'http://localhost:5001/clone-6ae1d/us-central1/api' THE API URL (Cloud Function URL local for debugging)
});
export default instance;