import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { APP_NAME } from './config/constans';

i18n.use(initReactI18next)
    .init({
        lng: 'es',
        fallbackLng: 'es',
        interpolation: {
            escapeValue: false
        },
        resources: {
            en: {
                translation: {
                    title: APP_NAME,
                    email: 'Correo',
                    enter_your_email: 'Ingresa tu correo',
                    password: 'Contraseña',
                    enter_your_password: 'Ingresa tu contraseña',
                    rememberme: 'Recordarme',
                    login: 'Inicia sesión',
                    forgot_password: '¿Recuperar tu contraseña?',
                    invalid_email: 'Invalid email'
                }
            },
            es: {
                translation: {
                    title: APP_NAME,
                    email:'Correo',
                    enter_your_email:'Ingresa tu correo',
                    password:'Contraseña',
                    enter_your_password:'Ingresa tu contraseña',
                    rememberme:'Recordarme',
                    login:'Inicia sesión',
                    forgot_password:'¿Recuperar tu contraseña?',
                    invalid_email:'Ingresa un correo válido'
                }
            },
        }
    });

export default i18n;