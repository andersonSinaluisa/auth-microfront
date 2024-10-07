import { language } from "./constans";

export const HOME = '/';
export const CREATE_PASSWORD = '/create-password';
export const FORGOT_PASSWORD = '/forgot-password';
export const VERIFY_EMAIL = '/verify-email';


export const HOME_ES = '/';
export const CREATE_PASSWORD_ES = '/crear-contrasena';
export const FORGOT_PASSWORD_ES = '/recuperar-contrasena';
export const VERIFY_EMAIL_ES = '/verificar-email';

export const es = {
    HOME: HOME_ES,
    CREATE_PASSWORD: CREATE_PASSWORD_ES,
    FORGOT_PASSWORD: FORGOT_PASSWORD_ES,
    VERIFY_EMAIL: VERIFY_EMAIL_ES
}

export const en = {
    HOME,
    CREATE_PASSWORD,
    FORGOT_PASSWORD,
    VERIFY_EMAIL
}


export const routesPath ={
  es,
  en
}

export const getRoutes = (type:string)=>{
  switch(type){
    case 'HOME':  
      return routesPath[language as keyof typeof routesPath].HOME
  
    case 'CREATE_PASSWORD':
      return routesPath[language as keyof typeof routesPath].CREATE_PASSWORD

    case 'FORGOT_PASSWORD':
      return routesPath[language as keyof typeof routesPath].FORGOT_PASSWORD
    case 'VERIFY_EMAIL':
      return routesPath[language as keyof typeof routesPath].VERIFY_EMAIL
    default:
      return routesPath[language as keyof typeof routesPath].HOME
  }
}
