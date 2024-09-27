import {  AxiosError } from "axios";
import { Api } from "../config/constans";
import { LoginDto } from "./Dtos";


export class AuthService{
    

    async login(data:LoginDto){

        try{
            const res = await Api.post('/auth/login',data)

            return res.data

        }catch(error){
            if (error instanceof AxiosError) {
                throw new Error(error.response?.data.message||'Ocurrio un error con el servicio de autenticacion')
            }else{
                throw new Error('Ocurrio un error con el servicio de autenticacion')
            }
        }
    }
}