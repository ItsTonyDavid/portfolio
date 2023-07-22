import './inputs.css'

const Input = ({ label, type="text"}) => {
    return (
        <div className="field">
            <label className="label">{label}</label>
            <div className="control">
                <div className="input-container">
                    <input className="input input-field" type={type}/>
                    <span className="input-highlight"></span>
                </div>
            </div>
        </div>
    );
}

export default Input;