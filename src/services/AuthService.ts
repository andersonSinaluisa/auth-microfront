import {  AxiosError } from "axios";
import { Api } from "../config/constans";
import { LoginDto } from "./Dtos";
import {LOGIN_URL} from '../config/endpoints'

export class AuthService{
    

    async login(data:LoginDto){

        try{
            const res = await Api.post(LOGIN_URL ,data,{
                withCredentials: true
            })

            return res.data

        }catch(error){
            if (error instanceof AxiosError) {
                throw new Error(error.response?.data.message||'Ocurrio un error con el servicio de autenticacion')
            }else{
                throw new Error('Ocurrio un error con el servicio de autenticacion')
            }
        }
    }


    async resetPassword(data){
        
    }
}