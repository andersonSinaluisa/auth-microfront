import { AES } from "crypto-js"
import { KEYPASS } from "./constans"



export const encrypt = (text: string): string => {
    return AES.encrypt(text, KEYPASS).toString()
}