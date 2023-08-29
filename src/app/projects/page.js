'use client';
import './page.css'
import Project from '@/components/Project/Project'

import mr from '../../../public/Minirewards.svg'
import cemex from '../../../public/Cemex.svg'
import indexzero from '../../../public/IndexZero.svg'
import area from '../../../public/AREA.svg'

export default function Projects() {
  return (
    <div className="tile is-parent is-vertical">
      <article className="tile is-child notification">
          <Project
              name="MiniRewards"
              title="Loyalty web app for busineses and clients."
              description="Responsive web app for customers to accumulate purchases and redeem
                            them for free products or promotions, while business owners can create
                            promotions, analyze statistics and improve their strategy."
              technologies={['ReactJS', 'Firebase']}
              role="FullStack Developer"
              duration="1 Year"
              image={mr}
          />
      </article>
      <article className="tile is-child notification">
          <Project
              name="AREA"
              title="Web app for prospect administration."
              description="Responsive web app for a business to publish services and manage message of prospects and clients."
              technologies={['Vue', 'NodeJS', 'Docker', 'AWS', 'TypeScript']}
              role="FullStack Developer"
              duration="2 months"
              image={area}
          />
      </article>
      <article className="tile is-child notification">
        <Project
            name="Cemex Ventures"
            title="Geospatial viewer."
            description="This project involved gathering information though Google Earth Engine API to extract and utilize geospatial data.
                         The geospatial information retrieved played a pivotal role in supporting Cemex's commitment to ecological sustainability
                         and informed their strategic decision-making processes. The application served as a powerful tool for foresight and sustainable development within the company."
            technologies={['Python', 'NodeJS', 'Jupyter', 'ML']}
            role="FullStack Developer"
            duration="6 months"
            image={cemex}
        />
      </article>
      <article className="tile is-child notification">
        <Project
            name="IndexZero"
            title="Landing Page."
            description="This is one of the projects I did in my time as a FullStack Engineer at IndexZero.
                         The proyect was about developing the landing page. The company give me free creativity for the design.
                         As a result, the pase has a minimalist style with a touch of software engineering features such as elements as if they were Macbook tabs."
            technologies={['HTML', 'CSS', 'Bulma', 'JavaScript']}
            role="FullStack Developer"
            duration="1 week"
            image={indexzero}
        />
      </article>
    </div>
  )
}
