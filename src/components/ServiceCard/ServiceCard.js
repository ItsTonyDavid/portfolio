import './servicecard.css'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from '../Inputs/button';

const ServiceCard = ({ name, icon, description, jobs, button=false }) => {
    return (
        <div className='is-card-service'>
            <div>
                <div className='is-icon-service'>
                    <FontAwesomeIcon icon={icon} size="2xl"/>
                </div>
                <p className='title is-4 has-green-gradient'>{name}</p>
            </div>
            <div className='divider-gray-service'></div>
            <div>
                <p className='subtitle is-6 is-description-service'>{description}</p>
            </div>
            <div>
                {jobs.map((job, index) => (
                    <li key={index}>
                        <p className='subtitle is-6'>{job}</p>
                    </li>
                ))}
            </div>
            {button && (
                <Link href="/contact">
                    <Button text="Contact me"/>
                </Link>
            )}
        </div>
    );
}

export default ServiceCard;
