import { APP_NAME } from "../../../config/constans";
import { LoginDto } from "../../../services/Dtos";
import ImageCover from "../../atoms/ImageCover";
import LoginForm from "../../molecules/LoginForm";

interface Props {
    handleSubmit: (data: LoginDto) => void
    error: string,
    onClosed: () => void
}
const Login = (props: Props) => {

    return (
        <div className="authentication-wrapper authentication-cover">
            <div className="authentication-inner row m-0">
                {/* /Left Text */}
                <div className="d-none d-lg-flex col-lg-7 col-xl-8 align-items-center">
                    <ImageCover
                        img="/assets/img/pages/login-light.png"
                        title={"Inicia Sesión en " + APP_NAME}
                        subtitle={<p className="mb-4">Please sign-in to your account and start the adventure</p>}
                    >


                    </ImageCover>
                </div>
                {/* /Left Text */}

                {/* Login */}
                <div className="d-flex col-12 col-lg-5 col-xl-4 align-items-center authentication-bg p-sm-5 p-4 bg-white">
                    <div className="w-px-400 mx-auto">
                        {/* Logo */}

                        {/* /Logo */}
                        <h4 className="mb-2">Welcome to Frest! 👋</h4>
                        <p className="mb-4">Please sign-in to your account and start the adventure</p>

                        <LoginForm
                            onSubmit={props.handleSubmit}
                            error={props.error}
                            onClosed={props.onClosed}
                        />


                    </div>
                </div>
                {/* /Login */}
            </div>
        </div>
    )

}

export default Login;