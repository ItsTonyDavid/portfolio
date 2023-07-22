'use client';
import './inputs.css'

const Button = ({text, alter=false, onClick=()=>{} }) => {
    return (
        <div className="field">
            <div className="control">
            <button className="button is-button" onClick={onClick}>
                <span className="text">{text}</span>
            </button>
            </div>
        </div>
    );
}

export default Button;