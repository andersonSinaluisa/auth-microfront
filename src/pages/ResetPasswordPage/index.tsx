import ResetPassword from "../../components/organims/ResetPassword"

import { AuthService } from "../../services/AuthService";


const ResetPasswordPage = ()=>{
    const authService = new AuthService()

    return(


    <ResetPassword
      error=""
      handleSubmit={()=>{}}
      onClosed={()=>{}}
      visible={true}
   />
  )
}

export default ResetPasswordPage;