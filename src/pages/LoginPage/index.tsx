import React from "react";
import Login from "../../components/organims/Login";
import { AuthService } from "../../services/AuthService";
import { LoginDto } from "../../services/Dtos";
import { Events } from "../../config/events";


const LoginPage = () => {
    const authService = new AuthService()


    const [error, setError] = React.useState<string>('')
    const handleSubmit = (data:LoginDto)=>{
        
        authService.login(data).then((res)=>{
            setError('')
            window.dispatchEvent(new CustomEvent(Events.LOGIN, {detail: res}))
        }).catch((err)=>{
            setError(err.message)

        })
    }
    const onClosed = ()=>{
        setError('')
    }

    return (
        <Login
        handleSubmit={handleSubmit}
        error={error}
        onClosed={onClosed}
        visible={error!==''}

        />
    )

}

export default LoginPage;