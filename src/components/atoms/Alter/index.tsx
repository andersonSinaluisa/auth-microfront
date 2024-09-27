

interface AlertProps {
    message: string;
    title?: string;
    color:'primary'|'secondary'|'success'|'danger'|'warning'|'info'|'dark';
    children?: React.ReactNode;
    isCloseable?: boolean;
    onClose?: () => void;
    visible?: boolean;
    icon?: string;
}
const Alert =(props: AlertProps) => {
    if (!props.visible) return null;
    return (
        <div className={`alert alert-${props.color}  alert-dismissible`} role="alert">
            {
                props.title && (
                    <h6 className="alert-heading mb-1">
                        <i className={props.icon}></i>
                        {props.title}
                    </h6>
                )
            }
            <span> {props.message}</span>

            {
                props.isCloseable && (
                    <button type="button" className="btn-close" aria-label="Close"></button>
                )
            }
        </div>

    )
}
export default Alert;