'use client';
import './page.css'
import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';

import SendEmail from '@/utils/sendEmail';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons"

import Input from '@/components/Inputs/input';
import Checkbox from '@/components/Inputs/checkbox';
import Textarea from '@/components/Inputs/textfield';
import Button from '@/components/Inputs/button';
import Send from '@/components/Send/Send'

export default function Contact(){

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [services, setServices] = useState([]);
    const [message, setMessage] = useState('');
    const [sending, setSending] = useState(false);
    const [sent, setSent] = useState(false);
    const formRef = useRef(null); // Referencia al formulario
    const messageRef = useRef(null); // Referencia al mensaje

    const [check1, setCheck1] = useState(false)
    const [check2, setCheck2] = useState(false)
    const [check3, setCheck3] = useState(false)
    const [check4, setCheck4] = useState(false)
    const [check5, setCheck5] = useState(false)
    const [check6, setCheck6] = useState(false)

    const handleFirstName = (newName) => {
      setFirstName(newName);
    }

    const handleLastName = (newName) => {
      setLastName(newName);
    }

    const handlePhone = (newPhone) => {
      setPhone(newPhone);
    }

    const handleEmail = (newEmail) => {
      setEmail(newEmail);
    }

    const handleMessageChange = (newMessage) => {
      setMessage(newMessage);
    }

    const handleButtonClick = async() => {
      setSending(true);
      await handleSendEmail();
      setSending(false);
    }

    const handleSendAnother = () => {
      setFirstName('');
      setLastName('');
      setPhone('');
      setEmail('');
      setMessage('');
      setServices([]);
      setCheck1(false);
      setCheck2(false);
      setCheck3(false);
      setCheck4(false);
      setCheck5(false);
      setCheck6(false);
      setSent(false);
    }

    async function handleSendEmail(){
      const data = {
        fullname: `${firstName} ${lastName}`,
        phone: phone,
        email: email,
        services: services.join(', '),
        message: message
      };

      const success = await SendEmail(data);
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
            <div className="tile is-parent is-3">
                <article className="tile is-child notification">
                    <div className="left-side">
                        <div className='titles'>
                            <p className="title">
                                Get in touch
                            </p>
                            <p className="title is-1 has-green-gradient">
                                Let&apos;s talk about your project
                            </p>
                        </div>
                        <div className='paragraphs'>
                            <p className="is-description subtitle is-5">
                                Thinking about a new project, a problem to solve, or just want to connect? Let&apos;s do it!
                            </p>
                            <p className="is-description subtitle is-5">
                                Use the form on this page or get in touch by other means.
                            </p>
                        </div>
                        <div className='contact-points'>
                            <div className='is-contact'>
                                <span className="is-contact-icon">
                                    <FontAwesomeIcon icon={faPhone} size="xl"/>
                                </span>
                                <a href="tel:+528186992519" className='has-underline-green-gradient'>8186992519</a>
                            </div>
                            <div className='is-contact'>
                                <span className="is-contact-icon">
                                    <FontAwesomeIcon icon={faEnvelope} size="xl"/>
                                </span>
                                <a href="mailto:iamAntonioDavid@gmail.com" className='has-underline-green-gradient'>iamAntonioDavid@gmail.com</a>
                            </div>
                            <div className='is-contact'>
                                <span className="is-contact-icon">
                                    <FontAwesomeIcon icon={faLinkedinIn} size="xl"/>
                                </span>
                                <a href="https://www.linkedin.com/in/iamantoniodavid/" target="_blank" className='has-underline-green-gradient'>@iamAntonioDavid</a>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
            <div className="tile is-parent">
                <article className="tile is-child notification">
                  <div className="contact-content">
                    <div ref={messageRef} className='message-sent' style={{display: 'none'}}>
                      <Send
                        buttonFunction={handleSendAnother}
                        buttonText="Ask for another quote"
                      >
                        <h1 className="subtitle is-4 has-text-centered">
                          Thank you for reaching me!
                          <br/>
                          We will be in contact soon.
                        </h1>
                      </Send>
                    </div>
                    <div ref={formRef} className='form'>
                      <p className="title">Contact Form</p>
                      <p className="title is-4">Your Contact Information</p>
                      <div className='columns is-columns'>
                          <div className='column'>
                              <Input label="First name" value={firstName} onChange={handleFirstName}/>
                          </div>
                          <div className='column'>
                              <Input label="Last name" value={lastName} onChange={handleLastName}/>
                          </div>
                      </div>
                      <div className='columns is-columns'>
                          <div className='column'>
                              <Input label="Phone number" value={phone} onChange={handlePhone} type="tel"/>
                          </div>
                          <div className='column'>
                              <Input label="Email address" value={email} onChange={handleEmail}/>
                          </div>
                      </div>
                      <p className="title is-4">What services do you need for your project?</p>
                      <div className='columns is-columns'>
                          <div className='column'>
                              <Checkbox text="Landing Website" services={services} setServices={setServices} value={check1} setValue={setCheck1}/>
                          </div>
                          <div className='column'>
                              <Checkbox text="Website Development" services={services} setServices={setServices} value={check2} setValue={setCheck2}/>
                          </div>
                          <div className='column'>
                              <Checkbox text="App Development" services={services} setServices={setServices} value={check3} setValue={setCheck3}/>
                          </div>
                      </div>
                      <div className='columns is-columns'>
                          <div className='column'>
                              <Checkbox text="E-Commerce Site" services={services} setServices={setServices} value={check4} setValue={setCheck4}/>
                          </div>
                          <div className='column'>
                              <Checkbox text="Marketing & Social media" services={services} setServices={setServices} value={check5} setValue={setCheck5}/>
                          </div>
                          <div className='column'>
                              <Checkbox text="Other" services={services} setServices={setServices} value={check6} setValue={setCheck6}/>
                          </div>
                      </div>
                      <p className="title is-4">Tell me about your project</p>
                      <Textarea value={message} onChange={handleMessageChange} rows="3" fixed={false}/>
                      <div className='is-right-button'>
                          <Button text="Send" onClick={async() => { await handleButtonClick();} } loading={sending} page={"contact"}/>
                      </div>
                    </div>
                  </div>
                </article>
            </div>
        </div>
    </>)
}
