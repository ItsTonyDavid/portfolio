'use client';
import './page.css'
import { useState } from 'react';

import SendEmail from '@/utils/sendEmail';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons"

import Input from '@/components/Inputs/input';
import Checkbox from '@/components/Inputs/checkbox';
import Textarea from '@/components/Inputs/textfield';
import Button from '@/components/Inputs/button';

export default function Contact(){

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [services, setServices] = useState([]);
    const [message, setMessage] = useState('');
    const [sending, setSending] = useState(false);

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

    async function handleSendEmail(){
      const data = {
        fullname: `${firstName} ${lastName}`,
        phone: phone,
        email: email,
        services: services.join(', '),
        message: message
      };

      await SendEmail(data);
    }

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
                                <span className='has-underline-green-gradient'>8186992519</span>
                            </div>
                            <div className='is-contact'>
                                <span className="is-contact-icon">
                                    <FontAwesomeIcon icon={faEnvelope} size="xl"/>
                                </span>
                                <span className='has-underline-green-gradient'>iamAntonioDavid@gmail.com</span>
                            </div>
                            <div className='is-contact'>
                                <span className="is-contact-icon">
                                    <FontAwesomeIcon icon={faLinkedinIn} size="xl"/>
                                </span>
                                <span className='has-underline-green-gradient'>@iamAntonioDavid</span>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
            <div className="tile is-parent">
                <article className="tile is-child notification">
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
                            <Checkbox text="Landing Website" services={services} setServices={setServices}/>
                        </div>
                        <div className='column'>
                            <Checkbox text="Website Development" services={services} setServices={setServices}/>
                        </div>
                        <div className='column'>
                            <Checkbox text="App Development" services={services} setServices={setServices}/>
                        </div>
                    </div>
                    <div className='columns is-columns'>
                        <div className='column'>
                            <Checkbox text="E-Commerce Site" services={services} setServices={setServices}/>
                        </div>
                        <div className='column'>
                            <Checkbox text="Marketing & Social media" services={services} setServices={setServices}/>
                        </div>
                        <div className='column'>
                            <Checkbox text="Other" services={services} setServices={setServices}/>
                        </div>
                    </div>
                    <p className="title is-4">Tell me about your project</p>
                    <Textarea value={message} onChange={handleMessageChange} rows="3" fixed={false}/>
                    <div className='is-right-button'>
                        <Button text="Send" onClick={async() => { await handleButtonClick();} } loading={sending} page={"contact"}/>
                    </div>
                </article>
            </div>
        </div>
    </>)
}
