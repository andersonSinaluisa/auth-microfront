import { useTranslation } from "react-i18next"
import { LoginDto } from "../../../services/Dtos"
import { Controller, useForm } from "react-hook-form"
import { Alert, BasicInput, Checkbox, Button, PasswordInput } from "as-react-frest";
import {getRoutes} from '../../../config/routes.path'
import {Link} from 'react-router-dom'
interface Props {
    onSubmit: (data: LoginDto) => void;
    error: string;
    onClosed: () => void;
    visible: boolean;
}

const LoginForm = (props: Props) => {
    const {
        watch,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<LoginDto>();
    
    const {  t } = useTranslation()

    console.log(watch());
    const _handleSubmit = (data: LoginDto) => {
        props.onSubmit(data);
    };

    return (
        <form id="formAuthentication" className="mb-3" onSubmit={handleSubmit(_handleSubmit)}>
            {props.error && <Alert
                    color="danger"
                    message={props.error}
                    title="Error"
                    isCloseable={true}
                    icon={<i className="bx bx-xs bx-error me-2"></i>}
                    onClose={props.onClosed}
                    isSolid={false}
                />}
            
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
            <Controller
                name="password"
                control={control}
                render={({ field }) => (
                    <PasswordInput
                        {...field}
                        id="password"
                        placeholder={t('enter_your_password')}
                        text={t('password')}
                        error={errors.password?.message||''}
                    />
                )}
                rules={{ required: t('enter_your_password') }}
            />
            
            <div className="d-flex justify-content-between">
                <Link to={getRoutes('FORGOT_PASSWORD')}>
                    <small>{t('forgot_password')}</small>
                </Link>
            </div>
            <div className="mb-3">
                <Checkbox
                    label={t('rememberme')}
                    key={"remember-me"}
                    color="primary"
                />
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
