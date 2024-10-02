import {
    createBrowserRouter,
} from "react-router-dom";
import "./index.css";
import LoginPage from "./pages/LoginPage";
import ResetPasswordPage from './pages/ResetPasswordPage'
import {CREATE_PASSWORD,HOME} from './config/routes.path'

const router = createBrowserRouter([
    {
        path: HOME,
        element: <LoginPage />,
    },
    {
        path:CREATE_PASSWORD,
        element:<ResetPasswordPage/>
    }
    
]);

export default router