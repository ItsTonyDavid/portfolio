import './experiencecard.css'
import Link from 'next/link'

const ExperienceCard = ({company, time, role, url, last=false}) => {
    return (<>
        <div className='columns is-columns'>
            <div className='column'>
                <p className='title is-4 mb-0 is-name-card'>
                    <Link className="" href={url}>
                        {company}
                    </Link>
                </p>
            </div>
            <div className='column'>
                <p className='subtitle is-6 mt-0 is-gray'>
                    {time}
                </p>
            </div>
        </div>
        <div>
            <p className='subtitle is-6 has-text-weight-semibold'>
                {role}
            </p>
        </div>
        <div className={`divider-gray ${last ? 'is-last' : ''}`}></div>
    </>);
}

export default ExperienceCard;



{/* <div>
            <div className='card-titles'>
                
                
            </div>
            
        </div> */}