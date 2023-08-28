import './inputs.css'

const Button = ({ text, onClick=()=>{}, loading=false, page }) => {

    return (
        <div className="field">
            <div className="control">
            <button className="button is-button" onClick={onClick}>
            {loading ? (
              <svg viewBox="25 25 50 50" className={`spiner ${page}`}>
                <circle r="20" cy="50" cx="50"></circle>
              </svg>
            ) : (
              <span className="text">{text}</span>
            )}
            </button>
            </div>
        </div>
    );
}

export default Button;
