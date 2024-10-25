import { ForgotPasswordDto } from "../../../services/Dtos"
import ForgotPasswordForm from "../../molecules/ForgotPasswordForm"

interface Props {
  handleSubmit: (data: ForgotPasswordDto) => void
  error?: {
    onClosed: () => void
    message: string
    title: string
  },
  success?: {
    onClosed: () => void
    message: string
    title: string
  }

}

const ForgotPassword = (props: Props) => {

  return (
    <div className="authentication-wrapper authentication-basic px-4">
      <div className="authentication-inner py-4">
        <ForgotPasswordForm
          description="Enter your email and we'll send you instructions to reset your password"
          title="Forgot Password? 🔒"
          onSubmit={props.handleSubmit}
          error={props.error}
          success={props.success}
        />
      </div>
    </div>
  )
}

export default ForgotPassword;