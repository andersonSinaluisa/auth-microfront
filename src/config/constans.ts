
import axios, { AxiosError } from 'axios';
import i18n from '../i18n';
import { encrypt } from './functions';


export const BASEURL = import.meta.env.VITE_URL_API;
export const KEYPASS = import.meta.env.VITE_KEY_ENCRYPT;
export const APP_NAME = "Inventory"

export const language = i18n.language != 'es' && i18n.language != 'en' ? 'es' : i18n.language



export const Api = axios.create({
    baseURL: BASEURL,
    headers: {
        'Content-Type': 'application/json',
    },
});
Api.defaults.withCredentials = true;

//encriptar los datos
Api.interceptors.request.use(
    (config) => {
        
        const _data = config.data;

        for (const key in _data) {
            if (Object.prototype.hasOwnProperty.call(_data, key)) {
                const element = _data[key];
                if (typeof element == 'string') {
                    _data[key] = encrypt(element)
                }
            }
        }
        config.data = _data;

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
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