import { useTranslation } from "react-i18next"
import { LoginDto } from "../../../services/Dtos"
import { useForm } from "react-hook-form"
import { Alert, BasicInput, Checkbox, Button, PasswordInput } from "as-react-frest";
import {CREATE_PASSWORD} from '../../../config/routes.path'
import {Link} from 'react-router-dom'
interface Props {
    onSubmit: (data: LoginDto) => void;
    error: string;
    onClosed: () => void;
    visible: boolean;
}

const LoginForm = (props: Props) => {
    const {
        register,
        watch,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginDto>();
    const {  t } = useTranslation()

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
            
            <BasicInput
                label={t('email')}
                type="text"
                id="email"
                placeholder={t('enter_your_email')}
                autoFocus
                helpText=""
                {...register("email", { required: t('enter_your_email') })}
                error={errors.email?.message}

            />

            <PasswordInput
                id="password"
                placeholder={t('enter_your_password')}
                label={t('password')}
                {...register("password", { required: t('enter_your_password') })}
                error={errors.password?.message||''}
            />

            <div className="d-flex justify-content-between">
                <Link to={CREATE_PASSWORD}>
                    <small>{t('forgot_password')}</small>
                </Link>
            </div>
            <div className="mb-3">
                <Checkbox
                    label={t('rememberme')}
                    key={"remember-me"}
                    color="primary"
                    checked
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
