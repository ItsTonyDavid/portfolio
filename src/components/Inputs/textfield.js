import './inputs.css'

const Textarea = ({ label, type="text", rows=2, fixed=true}) => {
    return (
        <div className="field">
            <label className="label">{label}</label>
            <div className="control">
                <div className="input-container">
                    <textarea className={ fixed ? 'textarea input-field has-fixed-size' : 'textarea input-field' }  type={type} rows={rows}/>
                    <span className="input-highlight"></span>
                </div>
            </div>
        </div>
    );
}

export default Textarea;
