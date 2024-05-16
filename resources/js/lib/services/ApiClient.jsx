import axios from "axios";
import Cookies from "js-cookie";

const ApiClient = axios.create({
    baseURL: `http://localhost:8000/api/v1/`,
});

ApiClient.interceptors.request.use((config) => {
    const token = Cookies.get("accessToken");

    console.log(token);

    config.headers.Authorization = `Bearer ${token}`;
    return config;
});

ApiClient.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        const { response } = error;
        console.log(response.data.message);
        throw error;
    }
);

export default ApiClient;
