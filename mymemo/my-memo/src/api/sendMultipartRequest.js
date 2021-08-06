import axios from "axios";

const instance = axios.create({});

instance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('accessToken')
        if (token)
            config.headers.Authorization = token
        else
            console.log('No token')
        config.headers['Content-Type'] = 'multipart/form-data';
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

instance.interceptors.response.use(
    (response)=>{
        return response;
    },
    (error)=>{
        return Promise.reject(error)
    }
);

export default instance;





