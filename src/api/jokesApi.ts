import axios from 'axios';

const jokesApi = axios.create({
    baseURL: 'https://official-joke-api.appspot.com'
});

export default jokesApi;