import axios from "axios";

const ApiClient = axios.create({
    baseURL: `http://localhost:8000/api/`,
});

// ApiClient.interceptors.request.use((config) => {
//   const token = Cookies.get('accessToken');

//   config.headers.Authorization = `Bearer ${token}`;
//   return config;
// });

ApiClient.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        const { response } = error;
        throw error;
    }
);

export default ApiClient;