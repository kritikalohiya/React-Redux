import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-myburger-e7240-default-rtdb.firebaseio.com/'
});

export default instance;