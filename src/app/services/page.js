'use client';
import './page.css';
import Link from 'next/link'
import ServiceCard from '@/components/ServiceCard/ServiceCard';
import Button from '@/components/Inputs/button';

import { faDesktop, faMobileScreen, faBullseye, faBolt } from "@fortawesome/free-solid-svg-icons";

export default function Services() {

  const handleButtonClick = () => {
    console.log("abc");
    redirect('/contact')
  }

  return (<>
    <div className="tile">
      <div className="tile is-3">
        <div className='tile is-parent'>
          <article className="tile is-child notification">
              <div className='is-info-services'>
                <div>
                  <p className='title is-4'>Services</p>
                  <p className='title is-3 has-green-gradient'>My Expertise</p>
                </div>
                <div>
                  <p className='title is-5'>Solving Problems</p>
                  <p className='subtitle is-6'>
                    I design products that are more than pretty. I make them shippable and usable,
                    but most importanly, they return results.
                  </p>
                </div>
                <div>
                  <p className='title is-5'>What can you expect?</p>
                  <li>
                    <p className='subtitle is-6'>Design Stategy</p>
                  </li>
                  <li>
                    <p className='subtitle is-6'>Responsive websites</p>
                  </li>
                  <li>
                    <p className='subtitle is-6'>Easy to use sites and apps</p>
                  </li>
                </div>
                {/* <div>
                  <p className='title is-5'>What can you expect?</p>
                  <li>
                    <p className='subtitle is-6'>Design Stategy</p>
                  </li>
                  <li>
                    <p className='subtitle is-6'>Responsive websites</p>
                  </li>
                  <li>
                    <p className='subtitle is-6'>Easy to use sites and apps</p>
                  </li>
                </div> */}
                <Link href="/contact">
                  <Button text="Get Free Price Quote"/>
                </Link>
              </div>
          </article>
        </div>
      </div>
      <div className='tile is-vertical'>
        <div className='tile'>
          <div className='tile is-parent'>
            <article className="tile is-child notification">
                <ServiceCard
                    name="Web Development"
                    icon={faDesktop}
                    description="My web development process ensures remarkable results and responsiveness in desktop, tablet and mobile."
                    jobs={['E-commerce Site', 'Landing pages', 'Web apps', 'APIs']}
                />
            </article>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child notification">
                <ServiceCard
                    name="Mobile Development"
                    icon={faMobileScreen}
                    description="Cutting-edge iOS and Android apps for a captivating mobile experience. Elevate your business with easy accesible apps."
                    jobs={['IOS', 'Android']}
                />
            </article>
          </div>
        </div>
        <div className='tile'>
          <div className='tile is-parent'>
            <article className="tile is-child notification">
                <ServiceCard
                  name="Marketing"
                  icon={faBullseye}
                  description="Compelling campaigns that resonate to your audience, driving meaningful engagement and impactful results."
                  jobs={['SEO', 'Google Analytics', 'Social Media']}
              />
            </article>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child notification">
                <ServiceCard
                    name="Connect"
                    icon={faBolt}
                    description="Let's embark on this exciting journey together. Reach out, and let's bring your vision to life!"
                    jobs={[]}
                    button={true}
                />
            </article>
          </div>
        </div>
      </div>
    </div>
  </>)
}
