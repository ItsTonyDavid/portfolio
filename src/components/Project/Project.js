import './project.css'
import React from 'react';
import Tag from '../Tag/Tag'


const Project = ({title, description, technologies, duration, role}) => {
    return (
        <div className='columns is-main-project'>
            <div className='column'>
               <div className='is-image-project'>
                <p className="title is-2">
                        MINIREWARDS
                    </p>
               </div>
            </div>
            <div className='column is-project-details'>
                <p className="title is-4">
                    Imagen
                </p>
                <p className="title is-3 title-with-gradient">
                    {title}
                </p>
                <p className="is-description subtitle is-6">
                    {description}
                </p>
                <div className='is-project-technology'>
                    <p className="title is-5 is-technology-title">
                        Technologies
                    </p>
                    <div className='is-tags'>
                        { technologies.map(i => <Tag name={i}/>) }
                    </div>
                </div>
                <div className='columns is-columns-info'>
                    <div className='column'>
                        <p className="title is-5">
                            Duration
                        </p>
                        <p className='subtitle is-6'>{duration}</p>
                    </div>
                    <div className='column'>
                        <p className="title is-5">
                            Role
                        </p>
                        <p className='subtitle is-6'>{role}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;