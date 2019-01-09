import axios from 'axios';

let API_URL = 'Xhttp://52.78.225.36/api';

if (process.env.NODE_ENV === 'development') {
  // API_URL = 'http://127.0.0.1:4000/api';
  API_URL = 'http://52.78.225.36/api';
}

export const baseAxios = (() => {
  return axios.create({
    baseURL: API_URL,
    timeout: 1000,
  });
})();

export const authAxios = ((token: string| null) => {
  return axios.create({
    baseURL: API_URL,
    timeout: 1000,
    headers: {
      'bearer-token': token,
    }
  })
})(localStorage.getItem('token'));
