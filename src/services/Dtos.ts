

export interface LoginDto {
    email: string;
    password: string;

}

export interface ResetPasswordDto {
    newPassword: string,
    confirmPassword: string
    token: string
}


export interface ForgotPasswordDto {
    email: string;
    link_password: string;

}