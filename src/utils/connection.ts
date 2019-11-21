import axios from 'axios';

const connection = axios.create({
  baseURL: process.env.REACT_APP_SOBOT_URL,
});

export default connection;
