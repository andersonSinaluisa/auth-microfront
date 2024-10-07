import ForgotPasswordForm from "../../molecules/ForgotPasswordForm"



const ForgotPassword = () => {

  return (
    <div className="authentication-wrapper authentication-basic px-4">
      <div className="authentication-inner py-4">
        <ForgotPasswordForm
          description="Enter your email and we'll send you instructions to reset your password"
          title="Forgot Password? 🔒"
        />
      </div>
    </div>
  )
}

export default ForgotPassword;