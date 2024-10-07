
import axios, { AxiosError } from 'axios';
import i18n from '../i18n';


export const BASEURL = 'http://localhost:3000'

export const APP_NAME = "Inventory"

export const language = i18n.language != 'es' && i18n.language != 'en' ? 'es' : i18n.language



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