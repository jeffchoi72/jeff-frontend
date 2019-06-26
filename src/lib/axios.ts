import axios from 'axios';

let API_URL = "http://52.79.227.127:8080/api";

if (process.env.NODE_ENV === "development") {
  API_URL = "http://127.0.0.1:4000/api";
}

export const baseAxios = (() => {
  return axios.create({
    baseURL: API_URL,
    timeout: 1000
  });
})();

export const authAxios = ((token: string | null) => {
  return axios.create({
    baseURL: API_URL,
    timeout: 1000,
    headers: {
      "bearer-token": token
    }
  });
})(localStorage.getItem("token"));
