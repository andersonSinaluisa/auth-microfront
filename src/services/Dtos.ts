

export interface LoginDto {
    email:string;
    password:string;
    
}

export interface ResetPasswordDto{
    new_password:string,
    confirm_password:string,
    token:string
}