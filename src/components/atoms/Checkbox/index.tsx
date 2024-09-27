
interface Props {
    label: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    checked: boolean;
    id : string;
}
const Checkbox = (props: Props) => {
    return(
        <div className="form-check">
            <input className="form-check-input" type="checkbox" id={props.id} onChange={props.onChange} checked={props.checked}/>
            <label className="form-check-label" htmlFor="remember-me">
                {props.label}
            </label>
        </div>
    )
}

export default Checkbox;