

import VerifyEmailCard from '../../molecules/VerifyEmailCard'
const VerifyEmail = ()=>{
  return (
        <div className="authentication-wrapper authentication-basic px-4">
          <div className="authentication-inner py-4">
            <VerifyEmailCard
              title="Verica tu correo electronico"
              textSkip="omitir"
              onSkip={()=>{}}
              textResend={"Volver a enviar"}
              description='Revisa tu correo electronico, hemos enviado un enlace para que puedas verificar tu correo'
              onResend={()=>{}}

              />
          </div>
        </div>
  )
}

export default VerifyEmail;