'use client';
import './page.css'
import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image'

import profilePic from '../../public/me.png'
import proj1 from '../../public/mr2.png'
import proj2 from '../../public/cx.png'
import proj3 from '../../public/area.png'
import proj4 from '../../public/io.svg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedinIn, faGithub, faTwitter} from "@fortawesome/free-brands-svg-icons"
import { faMobileScreen, faDesktop, faChartSimple, faArrowRight} from "@fortawesome/free-solid-svg-icons";

import Input from '@/components/Inputs/input';
import Textfield from '@/components/Inputs/textfield';
import Button from '@/components/Inputs/button';
import ProjectImage from '@/components/ProjectImage/ProjectImage';
import Send from '@/components/Send/Send'

import SendEmail from '@/utils/sendEmail';

export default function Home() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const formRef = useRef(null); // Referencia al formulario
  const messageRef = useRef(null); // Referencia al mensaje


  const handleNameChange = (newName) => {
    setName(newName);
  }

  const handleEmailChange = (newEmail) => {
    setEmail(newEmail);
  }

  const handleMessageChange = (newMessage) => {
    setMessage(newMessage);
  }

  const handleButtonClick = async() => {
    setSending(true);
    await handleSendEmail();
  }

  const handleSendAnother = () => {
    setName('');
    setEmail('');
    setMessage('');
    setSent(false);
  }

  async function handleSendEmail(){
    const data = {
      name: name,
      email: email,
      message: message
    };

    let success = await SendEmail(data);
    setSent(success);
    setSending(false);
  }

  useEffect(() => {
    if (sent) {
      // Realiza la animación para ocultar el formulario y mostrar el mensaje
      gsap.to(formRef.current, {
        opacity: 0, display: 'none', duration: 0.5, ease: 'power2.inOut', onComplete: () => {
          gsap.to(messageRef.current, { display: 'block', opacity: 1, duration: 0.5, ease: 'power2.inOut' });
        }
      });
    }
    else{ 
      gsap.to(messageRef.current, {
        opacity: 0, display: 'none', duration: 0.5, ease: 'power2.inOut', onComplete: () => {
          gsap.to(formRef.current, { display: 'block', opacity: 1, duration: 0.5, ease: 'power2.inOut'});
        }
      });
    }
  }, [sent]);

  return (<>
    <div className="tile">
      <div className="tile is-6">
        { /* PROFILE PIC */ }
        <div className="tile is-parent is-6">
          <article className="tile is-child notification green-background profilePic">
            <Image src={profilePic} alt="Tony David" height={500} width={500}/>
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
                <a href="https://linkedin.com/in/iamantoniodavid/" target="_blank">
                  <FontAwesomeIcon icon={faLinkedinIn} size="2xl"/>
                </a>
              </div>
              <div className="is-social-icon github">
                <a href="https://github.com/itsTonyDavid" target="_blank">
                  <FontAwesomeIcon icon={faGithub} size="2xl"/>
                </a>
              </div>
              <div className="is-social-icon twitter">
                <a href="https://twitter.com/ingAntonioDavid" target="_blank">
                  <FontAwesomeIcon icon={faTwitter} size="2xl"/>
                </a>
              </div>
              <div className="is-social-icon instagram">
                <a href="https://www.instagram.com/itstonycode/" target="_blank">
                  <FontAwesomeIcon icon={faInstagram} size="2xl"/>
                </a>
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
              Coding experiences with a spark of creativity that fulfill your needs.
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
          <div className="columns is-projects">
            <div className="column is-project">
              <ProjectImage image={proj1}/>
            </div>
            <div className="column is-project">
              <ProjectImage image={proj2}/>
            </div>
            <div className="column is-project">
              <ProjectImage image={proj3}/>
            </div>
            <div className="column is-project">
              <ProjectImage image={proj4} link={true}/>
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
          <div className="form-content">
            <div ref={messageRef} className='message-sent' style={{display: 'none'}}>
              <Send
                buttonFunction={handleSendAnother}
                buttonText="Send another one"
              >
                <h1 className="subtitle is-4 has-text-centered">
                  Message sent
                </h1>
              </Send>
            </div>
            <div ref={formRef} className='form'>
              <Input label="Full name" value={name} onChange={handleNameChange}/>
              <Input label="Email" value={email} onChange={handleEmailChange}/>
              <Textfield label="Message" value={message} onChange={handleMessageChange}/>
              <div className='is-right-button'>
                <Button text="Contact me 👋🏻" onClick={async() => { await handleButtonClick();} } loading={sending} page={"home"}/>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </>)
}
