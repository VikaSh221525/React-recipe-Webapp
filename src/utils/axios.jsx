import axios from "axios";



const axiosinstance = axios.create({
    // centralized axios
    baseURL: "https://fakestoreapi.com/",
    // withCredentials : true,
})


// interceptors
axiosinstance.interceptors.request.use(function (config) {
    // Do something before request is sent
    console.log('Request sent:', config);
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
axiosinstance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    console.log("Response recieved:", response);
    
    return response;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    console.error("API Error: ", error);
    
    return Promise.reject(error);
});

export default axiosinstance;