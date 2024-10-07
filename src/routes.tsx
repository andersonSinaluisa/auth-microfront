import {
    createBrowserRouter,
} from "react-router-dom";
import "./index.css";
import LoginPage from "./pages/LoginPage";
import ResetPasswordPage from './pages/ResetPasswordPage'
import { getRoutes} from './config/routes.path'
import VerifyEmailPage from "./pages/VerifyEmailPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";

//OBTENER EL IDIOMA


const router = createBrowserRouter([
    {
        path: getRoutes('HOME'),
        element: <LoginPage />,
    },
    {
        path: getRoutes('VERIFY_EMAIL'),
        element: <VerifyEmailPage/>
    },
    {
        path: getRoutes('CREATE_PASSWORD'),
        element:<ResetPasswordPage/>
    },
    {
        path:getRoutes('FORGOT_PASSWORD'),
        element: <ForgotPasswordPage/>
    }
    
]);

export default router