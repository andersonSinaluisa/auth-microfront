

import VerifyEmailCard from '../../molecules/VerifyEmailCard'
const VerifyEmail = ()=>{
  return (
    <div className="h-screen bg-primary-50">
      <div className="flex flex-col h-full justify-center">

        <div className="max-w-2xl mx-auto">
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

    </div>
  )
}

export default VerifyEmail;