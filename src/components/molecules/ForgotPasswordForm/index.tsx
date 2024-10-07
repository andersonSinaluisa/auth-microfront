import { BasicInput, Button, Card, CardBody } from "as-react-frest"
import { t } from "i18next";
import { Link } from "react-router-dom";
import { getRoutes } from "../../../config/routes.path";

interface PropsForgotPasswordForm{
  icon?:React.ReactNode;
  title:string;
  onClick?:()=>void;
  
  description:string;
}

const ForgotPasswordForm = (props:PropsForgotPasswordForm)=>{
  return(
    <Card>
      <CardBody>
        <>
          <div className="app-brand justify-content-center">
            {props.icon}
          </div>
          <h4 className="mb-2">
            {props.title}
          </h4>
          <p className="mb-4">
            {props.description}
          </p>
          <form id="formAuthentication" className="mb-3" action="auth-reset-password-basic.html" method="GET">
            <div className="mb-3">
              <BasicInput
                id="email"
                helpText={""}
                label={t('email')}
                type="email"
                name="email"
                placeholder={t('enter_your_email')}
                autoFocus />
            </div>
            <div className="d-flex justify-content-center">
            <Button
              color="primary">
                {t('reset_password')}
              
            </Button>
            </div>
          </form>
          <div className="text-center">
            <Link to={getRoutes('HOME')} className="d-flex align-items-center justify-content-center">
              <i className="bx bx-chevron-left scaleX-n1-rtl"></i>
              {t('back_to_login')}
            </Link>
          </div>
        </>
      </CardBody>
    </Card>
  )
}

export default ForgotPasswordForm