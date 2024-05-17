import axios from "axios";
import Cookies from "js-cookie";
import UserServices from "./User/UserServices";

const ApiClient = axios.create({
    baseURL: `http://localhost:8000/api/v1/`,
});

ApiClient.interceptors.request.use((config) => {
    const token = Cookies.get("accessToken");

    // console.log(token);

    config.headers.Authorization = `Bearer ${token}`;
    return config;
});

ApiClient.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        const { response } = error;
        const isError = response?.data?.message;
        if (isError === "Unauthenticated.") {
            return;
        }
        return;
    }
);

export default ApiClient;
