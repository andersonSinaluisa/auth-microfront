import { APP_NAME } from "../../../config/constans";
import { LoginDto } from "../../../services/Dtos";
import LoginForm from "../../molecules/LoginForm";

interface Props {
    handleSubmit: (data: LoginDto) => void
    error: string,
    onClosed: () => void
}
const Login = (props: Props) => {

    return (
        <div className="flex  ">
                {/* Left Text */}
                <div className="hidden lg:flex flex-col w-1/2">
                    <img
                        src="/assets/images/login-ilustration.svg"
                        className="lg:w-[90%] h-[100vh]"
                    />
                </div>
                {/* /Left Text */}

                {/* Login */}
            <div className="flex flex-col w-full lg:w-1/2 xl:w-1/3  bg-white justify-center items-center m-8 ">
                    <div className="w-full  max-w-md mx-auto">
                        {/* Logo */}
                        {/* /Logo */}
                        <div className="flex flex-row  justify-center mb-10">
                            <img src="/assets/images/logo.svg" className="w-1/3" />

                        </div>
                        <h4 className="text-2xl font-semibold mb-2 text-gray-800">
                            Welcome to {APP_NAME}! 👋
                        </h4>
                        <p className="text-gray-600 mb-6">Please sign-in to your account and start the adventure</p>

                        <LoginForm
                            onSubmit={props.handleSubmit}
                            error={props.error}
                            onClosed={props.onClosed}
                        />
                    </div>
            </div>
                {/* /Login */}
        </div>
    )

}

export default Login;