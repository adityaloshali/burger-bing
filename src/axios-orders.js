import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-react-redux.firebaseio.com/'
});

export default instance;