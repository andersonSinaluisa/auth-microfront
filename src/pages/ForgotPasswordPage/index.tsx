import { useState } from "react";
import ForgotPassword from "../../components/organims/ForgotPassword"
import { AuthService } from "../../services/AuthService";
import { ForgotPasswordDto } from "../../services/Dtos";
import { useTranslation } from "react-i18next";



const ForgotPasswordPage = () => {
  const authService = new AuthService()

  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");
  const { t } = useTranslation()


  const handleSubmit = (data: ForgotPasswordDto) => {
    authService.forgotPassword(data).then(() => {
      setSuccess(t('send_mail_forgot_password'))
    }).catch(e => {
      setError(e.message)
    })
  }


  const buildError = () => {
    return error != "" ? {
      message: error,
      title: "Error",
      onClosed: () => { }
    } : undefined
  }


  const buildSuccess = () => {
    return success != "" ? {
      message: success,
      title: "Envío exitoso",
      onClosed: () => { }
    } : undefined
  }

  return (
    <ForgotPassword
      handleSubmit={handleSubmit}
      error={buildError()}
      success={buildSuccess()}
    />
  )
}

export default ForgotPasswordPage;