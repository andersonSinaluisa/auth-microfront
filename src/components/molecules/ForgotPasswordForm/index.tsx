import { t } from "i18next";
import { Link } from "react-router-dom";
import { getRoutes } from "../../../config/routes.path";
import { ForgotPasswordDto } from "../../../services/Dtos";
import { Controller, useForm } from "react-hook-form";
import { Button, Card, CardBody, Input } from "@nextui-org/react";
import Alert from "../../atoms/Alter";

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
    console.log(data

    )
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
            onClose={props.error.onClosed}
          />}
          {
            props.success && <Alert
              color="success"
              message={props.success.message}
              title={props.success.title}
              isCloseable={true}
              onClose={props.success.onClosed}
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
                  <Input
                    {...field}
                    label={t('email')}
                    type="text"
                    placeholder={t('enter_your_email')}
                    id="email"
                    errorMessage={errors.email?.message}
                    variant="bordered"
                  />
                )}
                rules={{ required: t('enter_your_email') }}
              />
            </div>
            <div className="flex justify-center">
              <Button
                type="submit"
                color="primary">
                {t('reset_password')}

              </Button>
            </div>
          </form>
          <div className="text-center">
            <Link to={getRoutes('HOME')} className="d-flex align-items-center justify-content-center text-primary">
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