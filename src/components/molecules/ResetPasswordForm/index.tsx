
import { ResetPasswordDto } from "../../../services/Dtos";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import Alert from "../../atoms/Alter";
import { Button, Input } from "@nextui-org/react";
import React from "react";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";

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

    const [isVisible, setIsVisible] = React.useState(false);

    const toggleVisibility = () => setIsVisible(!isVisible);
    const _handleSubmit = (data: ResetPasswordDto) => {
        props.onSubmit(data);
    };
    return (
        <form id="formAuthentication"
         className="mb-3 flex flex-col gap-y-4" onSubmit={handleSubmit(_handleSubmit)}>
            {props.error && <Alert
                color="danger"
                message={props.error}
                title="Error"
                isCloseable={true}
                onClose={props.onClosed}
            />}

            <Input
                label={t('new_password')}
                id="newPassword"
                autoFocus
                {...register("newPassword", { required: t('enter_new_password') })}
                errorMessage={errors.newPassword?.message}
                placeholder=""
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

            />

            <Input
                id="confirm_password"
                placeholder={t('enter_your_password')}
                label={t('password')}
                {...register("confirmPassword", { required: t('enter_your_password') })}
                errorMessage={errors.confirmPassword?.message}
                variant="bordered"

            />

           
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