import axios from 'axios';
const httpRequest = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});
export default httpRequest;
