import './inputs.css'

const Input = ({ label, type="text", value, onChange }) => {
    return (
        <div className="field">
            <label className="label">{label}</label>
            <div className="control">
                <div className="input-container">
                    <input
                      className="input input-field"
                      type={type}
                      value={value}
                      onChange={(e) => onChange(e.target.value)}
                    />
                    <span className="input-highlight"></span>
                </div>
            </div>
        </div>
    );
}

export default Input;
