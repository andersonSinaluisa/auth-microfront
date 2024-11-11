import { useTranslation } from "react-i18next"
import { LoginDto } from "../../../services/Dtos"
import { Controller, useForm } from "react-hook-form"
import { getRoutes } from '../../../config/routes.path'
import { Link } from 'react-router-dom'
import { Button, Checkbox, Input } from "@nextui-org/react"
import React from "react"
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs"
import Alert from "../../atoms/Alter"
interface Props {
    onSubmit: (data: LoginDto) => void;
    error: string;
    onClosed: () => void;
}

const LoginForm = (props: Props) => {
    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<LoginDto>();
    const [isVisible, setIsVisible] = React.useState(false);

    const toggleVisibility = () => setIsVisible(!isVisible);
    const { t } = useTranslation()

    const _handleSubmit = (data: LoginDto) => {
        props.onSubmit(data);
    };

    return (
        <form id="formAuthentication" className="mb-3 flex flex-col gap-y-4" onSubmit={handleSubmit(_handleSubmit)}>
            {props.error && <Alert
                color="danger"
                message={props.error}
                title="Error"
                isCloseable={true}
                onClose={props.onClosed}
            />}

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
            <Controller
                name="password"
                control={control}
                render={({ field }) => (
                    <Input
                        {...field}
                        id="password"
                        placeholder={t('enter_your_password')}
                        label={t('password')}
                        errorMessage={errors.password?.message || ''}
                        endContent={
                            <button className="focus:outline-none" type="button" onClick={toggleVisibility} aria-label="toggle password visibility">
                                {isVisible ? (
                                    <BsEyeSlashFill className="text-2xl text-default-400 pointer-events-none" />
                                ) : (
                                    <BsEyeFill className="text-2xl text-default-400 pointer-events-none" />
                                )}
                            </button>
                        }
                        variant="bordered"

                        type={isVisible ? "text" : "password"}
                    />
                )}
                rules={{ required: t('enter_your_password') }}
            />

            <div className="d-flex justify-content-between">
                <Link to={getRoutes('FORGOT_PASSWORD')} className="text-primary">
                    <small>{t('forgot_password')}</small> 
                </Link>
            </div>
            <div className="mb-3">
                <Checkbox key={"remember-me"} color="primary" >{t('rememberme')}</Checkbox>
            </div>
            <Button
                color="primary"
                type="submit"
            >
                {t('login')}
            </Button>
        </form>
    );
};

export default LoginForm;
