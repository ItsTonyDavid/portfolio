import './inputs.css'

const Checkbox = ({text}) => {
    return (
        <label className="cyberpunk-checkbox-label">
            <input className="cyberpunk-checkbox" type="checkbox"/>
            {text}
        </label>
    );
}

export default Checkbox;