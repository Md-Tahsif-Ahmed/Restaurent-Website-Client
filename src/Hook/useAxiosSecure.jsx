import axios from "axios";
import { Navigate } from "react-router-dom";
import useAuth from "./useAuth";
const axiosSecure = axios.create({
    baseURL: 'http://localhost:3000/'
})
const useAxiosSecure = () => {
    const {logOut} = useAuth();
    // request interceptor to add authentication header for every secure call to the api
   axiosSecure.interceptors.request.use(function (config){
    const token = localStorage.getItem('access-token');
    console.log('request stop by interceptor', token);
    config.headers.Authorization = `Bearer ${token}`
    return config;
   }, function(error){
    return Promise.reject(error);
   });
//    interceptor 401 and 403  status
   axiosSecure.interceptors.response.use(function(response){
    return response
   }, async (error)=>{
    const status = error.response.status;
    console.log('interceptor error', status)
    if(status === 401 || status ===403){
        await logOut();
        Navigate('/login');
    }
    return Promise.reject(error);
   })
   return axiosSecure;
};

export default useAxiosSecure;