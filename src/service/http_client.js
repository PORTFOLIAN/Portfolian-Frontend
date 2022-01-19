import axios from "axios";

// const API_DEV = "http://3.36.84.11:3000/";
// const API_PRODICT = "http://3.36.84.11:3000/";
// const baseURL = process.env.NODE_ENV === 'development' ? API_DEV : API_PRODUCT;

// const baseURL = "http://3.36.84.11:3000/"
const baseURL = "https://api.portfolian.site:443/"

const httpClient = axios.create({
  baseURL,
  withCredentials: true,
});

export default httpClient;