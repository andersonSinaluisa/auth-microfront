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
    <div className="h-screen bg-primary-50">
      <div className="flex flex-col h-full justify-center">

        <div className="max-w-2xl mx-auto">

          <ForgotPasswordForm
            description="Enter your email and we'll send you instructions to reset your password"
            title="Forgot Password? 🔒"
            onSubmit={props.handleSubmit}
            error={props.error}
            success={props.success}
            icon={<div className="flex flex-row  justify-center mb-10">
              <img src="/assets/images/logo.svg" className="w-1/5" />

            </div>}
          />
        </div>
      </div>

    </div>
  )
}

export default ForgotPassword;