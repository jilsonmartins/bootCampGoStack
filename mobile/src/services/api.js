import axios from 'axios';

const api = axios.create({
    baseURL: '10.0.2.2',
});

export default api();