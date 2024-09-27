
import axios, { AxiosError } from 'axios';


export const BASEURL = 'http://localhost:3000'

export const APP_NAME = "Inventory"




export const Api = axios.create({
    baseURL: BASEURL,
    headers: {
        'Content-Type': 'application/json',
    },
});
Api.defaults.withCredentials = true;

//error handling
Api.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error instanceof AxiosError) {
            
            throw error as AxiosError;
        }else{
            throw new Error(error.message)
        }
    }
);