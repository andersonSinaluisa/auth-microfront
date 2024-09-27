interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    color:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'dark'
    | 'facebook'
    | 'google-plus'
    | 'instagram'
    | 'twitter'
    | string;
    isLabel?: boolean;
    isRounded?: boolean;
    isOutline?: boolean;
    isBtnIcon?: boolean;
}

const Button = ({
    color,
    isLabel,
    isRounded,
    isOutline,
    isBtnIcon,
    className,
    children,
    ...rest
}: Props) => {
    const classes = [
        'btn',
        isRounded ? 'rounded-pill' : '',
        isOutline ? `btn-outline-${color}` : `btn-${color}`,
        isLabel ? 'btn-label' : '',
        isBtnIcon ? 'btn-icon' : '',
        className,
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <button className={classes} {...rest}>
            {children}
        </button>
    );
};

export default Button;
