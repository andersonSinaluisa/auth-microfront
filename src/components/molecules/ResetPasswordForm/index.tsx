
import { Alert, PasswordInput, Button } from "as-react-frest";
import { ResetPasswordDto } from "../../../services/Dtos";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";

interface ResetPasswordFormProps {
    onSubmit: (data: ResetPasswordDto) => void;
    error: string;
    onClosed: () => void;
    visible: boolean;
}


const ResetPasswordForm = (props: ResetPasswordFormProps) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ResetPasswordDto>();
    const { t } = useTranslation()

    const _handleSubmit = (data: ResetPasswordDto) => {
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

            <PasswordInput
                text={t('new_password')}
                id="newPassword"
                autoFocus
                {...register("newPassword", { required: t('enter_new_password') })}
                error={errors.newPassword?.message}
                placeholder=""


            />

            <PasswordInput
                id="confirm_password"
                placeholder={t('enter_your_password')}
                text={t('password')}
                {...register("confirmPassword", { required: t('enter_your_password') })}
                error={errors.confirmPassword?.message}
            />

            <div className="d-flex justify-content-between mb-3">
                <a href="auth-forgot-password-cover.html">
                    <small>{t('forgot_password')}</small>
                </a>
            </div>
            <Button
                color="primary"
                type="submit"
            >
                {t('create_new_password')}
            </Button>
        </form>
    )
}
export default ResetPasswordForm