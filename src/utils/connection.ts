import axios from 'axios';

console.log(process.env.REACT_APP_SOBOT_URL);
const connection = axios.create({
  baseURL: process.env.REACT_APP_SOBOT_URL,
});

export default connection;
