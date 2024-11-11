
import { ResetPasswordDto } from "../../../services/Dtos";
import ResetPasswordForm from "../../molecules/ResetPasswordForm";
interface Props{
    handleSubmit:(data:ResetPasswordDto)=>void
    error:string,
    onClosed:()=>void
    visible:boolean
}
const ResetPassword = (props:Props)=>{
 return(
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
                 <p className="text-gray-600 mb-6">Please sign-in to your account and start the adventure</p>

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
 ) 
}
export default ResetPassword;