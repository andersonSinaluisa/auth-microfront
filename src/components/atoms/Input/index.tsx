import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    id: string;
    classNameContainer?: string;
    register: UseFormRegisterReturn; // Type for register
}

const Input = ({ label, classNameContainer = '', className = '', id, register, ...rest }: InputProps) => {
    return (
        <div className={classNameContainer}>
            <label htmlFor={id} className="form-label">
                {label}
            </label>
            <input
                {...register} // Register applied here
                id={id}
                className={`form-control ${className}`}
                {...rest} // Spreading other props if needed
            />
        </div>
    );
};

export default Input;