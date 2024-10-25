import { AxiosError } from "axios";
import { Api } from "../config/constans";
import { ForgotPasswordDto, LoginDto, ResetPasswordDto } from "./Dtos";
import { CREATE_PASSWORD_URL, FORGOT_PASSWORD_URL, LOGIN_URL, VALIDATE_TOKEN_URL } from '../config/endpoints'

export class AuthService {


    async login(data: LoginDto) {

        try {
            const res = await Api.post(LOGIN_URL, data, {
                withCredentials: true
            })

            return res.data

        } catch (error) {
            if (error instanceof AxiosError) {
                throw new Error(error.response?.data.message || 'Ocurrio un error con el servicio de autenticacion')
            } else {
                throw new Error('Ocurrio un error con el servicio de autenticacion')
            }
        }
    }


    async forgotPassword(data: ForgotPasswordDto) {
        try {
            const res = await Api.post(FORGOT_PASSWORD_URL, data)

            return res.data
        } catch (error) {
            if (error instanceof AxiosError) {
                throw new Error(error.response?.data.message || 'Ocurrio un error con el servicio de autenticacion')
            } else {
                throw new Error('Ocurrio un error con el servicio de autenticacion')
            }
        }

    }

    async verifyToken(token: string) {
        try {
            const res = await Api.post(VALIDATE_TOKEN_URL, { token })

            return res.data
        } catch (error) {
            if (error instanceof AxiosError) {
                throw new Error(error.response?.data.message || 'Ocurrio un error con el servicio de autenticacion')
            } else {
                throw new Error('Ocurrio un error con el servicio de autenticacion')
            }
        }
    }

    async resetPassword(data: ResetPasswordDto) {
        try {
            const res = await Api.post(CREATE_PASSWORD_URL, data)

            return res.data
        } catch (error) {
            if (error instanceof AxiosError) {
                throw new Error(error.response?.data.message || 'Ocurrio un error con el servicio de autenticacion')
            } else {
                throw new Error('Ocurrio un error con el servicio de autenticacion')
            }
        }
    }
}