import { Alert, BasicInput, Button, Card, CardBody } from "as-react-frest"
import { t } from "i18next";
import { Link } from "react-router-dom";
import { getRoutes } from "../../../config/routes.path";
import { ForgotPasswordDto } from "../../../services/Dtos";
import { Controller, useForm } from "react-hook-form";

interface PropsForgotPasswordForm {
  icon?: React.ReactNode;
  title: string;
  onSubmit: (data: ForgotPasswordDto) => void;
  description: string;
  success?: {
    onClosed: () => void;
    message: string;
    title: string;
  },
  error?: {
    onClosed: () => void;
    message: string;
    title: string;
  }

}

const ForgotPasswordForm = (props: PropsForgotPasswordForm) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ForgotPasswordDto>();

  const _handleSubmit = (data: ForgotPasswordDto) => {
    data.link_password = window.location.origin + getRoutes('CREATE_PASSWORD') + "/"
    props.onSubmit(data);
  };
  return (
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
          {props.error?.message && <Alert
            color="danger"
            message={props.error.message}
            title={props.error.title}
            isCloseable={true}
            icon={<i className="bx bx-xs bx-error me-2"></i>}
            onClose={props.error.onClosed}
            isSolid={false}
          />}
          {
            props.success && <Alert
              color="success"
              message={props.success.message}
              title={props.success.title}
              isCloseable={true}
              icon={<i className="bx bx-xs bx-check me-2"></i>}
              onClose={props.success.onClosed}
              isSolid={false}
            />

          }
          <form id="formAuthentication" className="mb-3"
            onSubmit={handleSubmit(_handleSubmit)}
          >
            <div className="mb-3">
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <BasicInput
                    {...field}
                    label={t('email')}
                    type="text"
                    placeholder={t('enter_your_email')}
                    id="email"
                    helpText=""
                    error={errors.email?.message}
                  />
                )}
                rules={{ required: t('enter_your_email') }}
              />
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