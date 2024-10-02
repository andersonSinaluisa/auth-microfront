
import ImageCover from "../../atoms/ImageCover";
import ResetPasswordForm from "../../molecules/ResetPasswordForm";
interface Props{
    handleSubmit:(data:ResetPasswordDto)=>void
    error:string,
    onClosed:()=>void
    visible:boolean
}
const ResetPassword = (props:Props)=>{
 return(
     <div className="authentication-wrapper authentication-cover">
            <div className="authentication-inner row m-0">
                {/* /Left Text */}
                <div className="d-none d-lg-flex col-lg-7 col-xl-8 align-items-center">
                    <ImageCover
                        img="/assets/img/pages/reset-password-light.png"
                     title={"Setup new passwoard 👩🏻‍💻"}
                     subtitle={<p className="mb-4">You can change your password for security
                         reasons or reset it if you forget it.</p>}
                    />
                </div>
                {/* /Left Text */}

                {/* Login */}
                <div className="d-flex col-12 col-lg-5 col-xl-4 align-items-center authentication-bg p-sm-5 p-4 bg-white">
                    <div className="w-px-400 mx-auto">
                        {/* Logo */}

                        {/* /Logo */}
                        <h4 className="mb-2">Welcome to Frest! 👋</h4>
                        <p className="mb-4">Please sign-in to your account and start the adventure</p>

                        <ResetPasswordForm
                            onSubmit={props.handleSubmit}
                            error={props.error}
                            onClosed={props.onClosed}
                            visible={props.visible}
                        />


                    </div>
                </div>
                {/* /Login */}
            </div>
        </div>
 ) 
}
export default ResetPassword;