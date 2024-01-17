import axios from "axios";

const instance = axios.create({
    baseURL: "https://ecommerce-api-kote.onrender.com",
    timeout: 3000,
    withCredentials: true
});

export default instance;