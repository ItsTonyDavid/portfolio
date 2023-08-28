'use client';
import './page.css'
import Link from 'next/link'

import {  faJs, faPython, faCuttlefish, faNodeJs, faHtml5,
        faCss3, faReact, faVuejs, faDocker, faAws, faFigma } from "@fortawesome/free-brands-svg-icons"
import { faDatabase, faMobile, faTornado } from "@fortawesome/free-solid-svg-icons";

import Button from '@/components/Inputs/button';
import Tech from '@/components/Tech/tech';
import ExperienceCard from '@/components/ExperienceCard/ExperienceCard';

export default function About(){
    return (<>
        <div className="tile">
            <div className="tile is-parent is-4">
                <article className="tile is-child notification is-white">
                    <div className="left-side-about">
                        <div className='titles'>
                            <p className="title is-3 is-image-title">
                                Antonio Alcántara
                            </p>
                        </div>
                        <div className='titles-about'>
                            <p className="title is-1 is-white-text">
                                Let&apos;s talk about your project
                            </p>
                            <p className='subtitle is-6 is-subtitle is-white-text'>
                                Let&apos;s super-charge your business today!
                            </p>
                            <Link href="/contact">
                                <Button text="Get Free Price Quote"/>
                            </Link>
                        </div>
                    </div>
                </article>
            </div>
            <div className="tile is-parent">
                <article className="tile is-child notification">
                    <div className="is-title">
                        <p className="title is-3">
                            I&apos;m Specialized in
                        </p>
                        <p className="title is-1 has-green-gradient is-title-green">
                            Web Development
                        </p>
                    </div>
                    <div className=''>
                        <div className='is-techend'>
                            <p className="title is-4">
                                Back-End Development
                            </p>
                            <div className='columns is-columns'>
                                <div className='column'>
                                    <Tech name="Javascript" icon={faJs} percentage="90"/>
                                </div>
                                <div className='column'>
                                    <Tech name="Python" icon={faPython} percentage="70"/>
                                </div>
                                <div className='column'>
                                    <Tech name="C++" icon={faCuttlefish} percentage="60"/>
                                </div>
                                <div className='column'>
                                    <Tech name="SQL" icon={faDatabase} percentage="40"/>
                                </div>
                            </div>
                            <div className='columns is-columns'>
                                <div className='column'>
                                    <Tech name="NodeJS" icon={faNodeJs} percentage="85"/>
                                </div>
                                <div className='column'>
                                    <Tech name="Flask" icon={faTornado} percentage="60"/>
                                </div>
                                <div className='column'>
                                    <Tech name="Docker" icon={faDocker} percentage="40"/>
                                </div>
                                <div className='column'>
                                    <Tech name="AWS" icon={faAws} percentage="50"/>
                                </div>
                            </div>
                        </div>
                        <div className='is-techend'>
                            <p className="title is-4">
                                Front-End Development
                            </p>
                            <div className='columns is-columns'>
                                <div className='column'>
                                    <Tech name="Javascript" icon={faJs} percentage="90"/>
                                </div>
                                <div className='column'>
                                    <Tech name="HTML" icon={faHtml5} percentage="70"/>
                                </div>
                                <div className='column'>
                                    <Tech name="CSS" icon={faCss3} percentage="70"/>
                                </div>
                                <div className='column'>
                                    <Tech name="Figma" icon={faFigma} percentage="40"/>
                                </div>
                            </div>
                            <div className='columns is-columns'>
                                <div className='column'>
                                    <Tech name="React" icon={faReact} percentage="85"/>
                                </div>
                                <div className='column'>
                                    <Tech name="Vue" icon={faVuejs} percentage="70"/>
                                </div>
                                <div className='column'>
                                    <Tech name="React Native" icon={faMobile} percentage="60"/>
                                </div>
                                <div className='column'>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='is-about-me'>
                        <p className="title is-4">
                            About me
                        </p>
                        <div>
                            <p className='subtitle is-6'>
                                I am a dedicated and skilled software engineer with a diverse
                                range of expertise, based in Monterrey, Nuevo León, Mexico. At 25 years old,
                                I bring a youthful and innovative perspective to my work, combined with a strong
                                foundation in cutting-edge technologies.
                            </p>
                            <p className='subtitle is-6'>
                                My passion for continuous learning extends far beyond technolgy, as I constantly seek
                                opportunities to expand my knowledge in various fields. As a professional,
                                I thrive on solving complex problems and creating impactful solutions. When not
                                immersed in code, I enjoy exploring new destinations to gain fresh perspectives
                                and cultural insights, which fuels my creativity and adaptability.
                            </p>
                            <p className='subtitle is-6'>
                                Furthermore, I take pleasure in experiencing new culinary delights,
                                seeking inspiration even in the world of food, craft beers, and coffee. My unique
                                blend of technical expertise and diverse interests allows me to approach challenges
                                with creativity and resourcefulness, making me a well-rounded and valuable asset to any team.
                            </p>
                        </div>
                    </div>
                </article>
            </div>
        </div>
        <div className="tile is-vertical">
            <div className="tile is-parent">
                <article className="tile is-child notification">
                    <div className='columns is-columns pt-4 pb-0'>
                        <div className='column has-padding-x-column-left'>
                            <div className="">
                                <p className="title is-3">
                                    Employment
                                </p>
                                <div className='is-linebreak'></div>
                                <ExperienceCard
                                    company="Sofex"
                                    time="January 2023 - Actual"
                                    role="Full-Stack Developer"
                                    url="https://sofex.com.mx"
                                />
                                <ExperienceCard
                                    company="IndexZero"
                                    time="March 2022 - January 2023"
                                    role="Full-Stack Developer"
                                    url="https://www.indexzero.io"
                                />
                                <ExperienceCard
                                    company="Alestra Nave"
                                    time="August 2021 - December 2021"
                                    role="Open Innovation Intern"
                                    url="https://www.alestra.mx"
                                />
                                <ExperienceCard
                                    company="Cemex Ventures"
                                    time="August 2019 - August 2020"
                                    role="Software Engineer Intern"
                                    url="https://www.cemexventures.com"
                                    last={true}
                                />
                            </div>
                        </div>
                        <div className='column has-padding-x-column-right is-hidden-mobile'>
                            <div className="">
                                <p className="title is-3">
                                    Education
                                </p>
                                <div className='is-linebreak'></div>
                                <ExperienceCard
                                    company="Tec de Monterrey (Graduate Program)"
                                    time="School of Government and Public Transformation"
                                    role="MSc Applied Economics"
                                    url="https://maestriasydiplomados.tec.mx/posgrados/maestria-en-economia-aplicada?locale=en"
                                />
                                <ExperienceCard
                                    company="Tec de Monterrey"
                                    time="Campus MTY"
                                    role="Innovation and Development Engineer"
                                    url="https://tec.mx/en/innovation-and-transformation/bs-in-innovation-and-development-engineering"
                                    last={true}
                                />
                            </div>
                        </div>
                    </div>
                </article>
            </div>
            <div className="tile is-parent is-hidden-desktop">
                <article className="tile is-child notification">
                    <div className='columns is-columns pt-4 pb-0'>
                        <div className='column has-padding-x-column-right'>
                            <div className="">
                                <p className="title is-3">
                                    Education
                                </p>
                                <div className='is-linebreak'></div>
                                <ExperienceCard
                                    company="Tec de Monterrey (Graduate Program)"
                                    time="School of Government and Public Transformation"
                                    role="MSc Applied Economics"
                                    url="https://maestriasydiplomados.tec.mx/posgrados/maestria-en-economia-aplicada?locale=en"
                                />
                                <ExperienceCard
                                    company="Tec de Monterrey"
                                    time="Campus MTY"
                                    role="Innovation and Development Engineer"
                                    url="https://tec.mx/en/innovation-and-transformation/bs-in-innovation-and-development-engineering"
                                    last={true}
                                />
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    </>)
}
