import './inputs.css'
import { useState } from 'react';

const Checkbox = ({ text, services, setServices }) => {

  const handleCheckboxChange = (event) => {
    const isChecked = event.target.checked;
      if (isChecked) {
        setServices([...services, text]);
      } else {
        const updatedServices = services.filter((service) => service !== text);
        setServices(updatedServices);
      }
    };

    return (
        <label className="cyberpunk-checkbox-label">
            <input
              className="cyberpunk-checkbox"
              type="checkbox"
              onChange={handleCheckboxChange}
            />
            {text}
        </label>
    );
}

export default Checkbox;
