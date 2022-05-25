import axios from "axios";


export const DEV_API = "https://be-great-app.herokuapp.com/";
// export const PROD_API = "https://";

export const $api = axios.create({
    baseURL: DEV_API,
     // withCredentials:true

});

// $api.interceptors.request.use((config) => {
//     if (config.headers) {
//         config.headers.authorization = `Bearer ${localStorage.getItem("token")}`;
//         return config;
//     }
// });