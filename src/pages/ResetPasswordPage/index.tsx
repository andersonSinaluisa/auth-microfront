import { useParams } from "react-router-dom";
import ResetPassword from "../../components/organims/ResetPassword"

import { AuthService } from "../../services/AuthService";
import { useEffect, useState } from "react";
import { ResetPasswordDto } from "../../services/Dtos";


const ResetPasswordPage = () => {
  const authService = new AuthService()
  const { token } = useParams<{ token: string }>()
  const [tokenIsValid, setTokenIsValid] = useState(false)


  useEffect(() => {
    if (token) {
      authService.verifyToken(token).then(() => {
        setTokenIsValid(true)
      }).catch(() => {
        setTokenIsValid(false)
      })
    }
  }, [token])

  const handleSubmit = (data: ResetPasswordDto) => {
    authService.resetPassword(data).then(() => {
      console.log("Password reseted")
    }).catch(() => {
      console.log("Error")
    })
  }




  return (
    tokenIsValid ?
      <ResetPassword
        error=""
        handleSubmit={handleSubmit}
        onClosed={() => { }}
        visible={true}
      /> : <h1>Invalid token</h1>
  )
}

export default ResetPasswordPage;