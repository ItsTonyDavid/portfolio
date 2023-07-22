'use client';
import './tech.css'
import { useEffect, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Tech = ({ name, icon, percentage }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(percentage);
  }, [percentage]);

    return (
        <div className='is-tech'>
            <div className='is-icon'>
                <FontAwesomeIcon icon={icon} size="xl"/>
            </div>
            <div className='is-framework'>{name}</div>
            <div className="progress-loader">
              <div className="progress" style={{ width: `${width}%` }}></div>
            </div>
        </div>
    );
}

export default Tech;
