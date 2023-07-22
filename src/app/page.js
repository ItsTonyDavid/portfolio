'use client';
import Image from 'next/image'
import './page.css'
import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedinIn, faGithub, faTwitter} from "@fortawesome/free-brands-svg-icons"
import { faMobileScreen, faDesktop, faChartSimple } from "@fortawesome/free-solid-svg-icons";

import Input from '@/components/Inputs/input';
import Textfield from '@/components/Inputs/textfield';
import Button from '@/components/Inputs/button';

import SendEmail from '@/utils/sendEmail';

export default function Home() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  
  async function handleSendEmail(){
    const data = {
      name: name,
      email: email,
      message: message
    };

    await SendEmail(data);
  }

  return (<>
    <div className="tile">
      <div className="tile is-6">
        { /* PROFILE PIC */ }
        <div className="tile is-parent is-6">
          <article className="tile is-child notification green-background">
            <figure className="image is-square">
              <img src="./pokeball.png"/>
            </figure>
          </article>
        </div>
        { /* END PROFILE PIC */ }
        <div className="tile is-vertical">
          { /* NAME */ }
          <div className="tile is-parent">
            <article className="tile is-child notification">
              <p className="title has-text-centered-mobile">Antonio Alcántara</p>
              <p className="subtitle is-6 has-text-centered-mobile">iamAntonioDavid@gmail.com</p>
            </article>
          </div>
          { /* END NAME */ }
          { /* RANDOM */ }
          <div className="tile is-parent">
            <article className="tile is-child notification lable-title">
              <p className="title is-title-web has-text-centered-mobile">Software Engineer</p>
              <p className="subtitle has-text-centered-mobile">Full-Stack developer</p>
            </article>
          </div>
          { /* END RANDOM */ }
          { /* Social */ }
          <div className="tile is-parent">
            <article className="tile is-child notification is-centered-div-horizontaly is-social">
              <div className="is-social-icon linkedin">
                <FontAwesomeIcon icon={faLinkedinIn} size="2xl"/>
              </div>
              <div className="is-social-icon github">
                <FontAwesomeIcon icon={faGithub} size="2xl"/>
              </div>
              <div className="is-social-icon twitter">
                <FontAwesomeIcon icon={faTwitter} size="2xl"/>
              </div>
              <div className="is-social-icon instagram">
                <FontAwesomeIcon icon={faInstagram} size="2xl"/>
              </div>
            </article>
          </div>
          { /* END Social */ }
        </div>
      </div>
      <div className="tile is-vertical">
        { /* PHRASE */ }
        <div className="tile is-parent is-vertical">
          <article className="tile is-child notification">
            <p className="title is-1">
              Desarrollando experiencias web que cautivan y transforman.
            </p>
          </article>
        </div>
        { /* END PHRASE */ }
        <div className="tile is-parent">
          { /* EXPERIENCE YEARS */ }

            <article className="tile is-child notification has-text-centered has-margin-right is-centered-div purple-background">
              <p className="title is-2">2+</p>
              <p className="subtitle is-5">years experience</p>
            </article>

          { /* END EXPERIENCE YEARS */ }
          { /* PROJECTS */ }

            <article className="tile is-child notification has-text-centered has-margin-right is-centered-div orange-background">
              <p className="title is-2">10+</p>
              <p className="subtitle is-4">Projects</p>
            </article>

          { /* END PROJECTS */ }
          { /* CLIENTS */ }

            <article className="tile is-child notification has-text-centered is-centered-div blue-background">
              <p className="title is-2">3+</p>
              <p className="subtitle is-4">Clients</p>
            </article>

          { /* END CLIENTS */ }
        </div>
      </div>
    </div>
    <div className="tile">
      <div className="tile is-7 is-vertical">
        { /* PORTFOLIO */ }
        <div className="tile is-parent is-vertical">
          <article className="tile is-child notification">
            <div className="columns">
              <div className="column">

              </div>
            </div>
          </article>
        </div>
        { /* END PORTFOLIO */ }
        <div className="tile is-parent">
          { /* Services */ }

            <article className="tile is-child notification has-text-centered has-margin-right is-centered-div-service has-mobile-space">
              <FontAwesomeIcon icon={faMobileScreen} size="2xl"/>
              <p className="title is-5">Mobile Dev</p>
              <p className="subtitle is-7">IOS and Android</p>
            </article>

          { /* END services */ }
          { /* PROJECTS */ }

          <article className="tile is-child notification has-text-centered has-margin-right is-centered-div-service has-mobile-space">
            <FontAwesomeIcon icon={faDesktop} size="2xl"/>
            <p className="title is-5">Web Dev</p>
            <p className="subtitle is-7">Websites, Web Apps, APIs</p>
          </article>

          { /* END PROJECTS */ }
          { /* CLIENTS */ }

          <article className="tile is-child notification has-text-centered is-centered-div-service has-mobile-space">
            <FontAwesomeIcon icon={faChartSimple} size="2xl"/>
            <p className="title is-5">Marketing</p>
            <p className="subtitle is-7">SEO</p>
          </article>

          { /* END CLIENTS */ }
        </div>
      </div>
      <div className="tile is-parent">
        <article className="tile is-child notification">
          <div className="content">
            <Input label="Full name"/>
            <Input label="Email"/>
            <Textfield label="Message"/>
            <div className='is-right-button'>
              <Button text="Contact me 👋🏻"/>
            </div>
          </div>
        </article>
      </div>
    </div>
  </>)
}
