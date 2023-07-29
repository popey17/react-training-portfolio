import './about.sass';
import Animatedtext from '../AnimatedText/animatedtext'
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faCss3, faGithub, faHtml5, faJs, faReact } from '@fortawesome/free-brands-svg-icons';
import Loader from "react-loaders"

const About = () => {
    const [letterClass, setLetterClass] = useState ('text-animate');

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
    
        return () => {
            clearTimeout(timeoutId);
        };
    }, []);

    return (
        <>
            <div className="container about-page">
                <div className="text-zone">
                    <h1>
                        <Animatedtext 
                            letterClass={letterClass}
                            strArr = {['A','b','o','u','t',' ','m','e']}
                            idx={15}

                        />
                    </h1>
                        <p>
                            A passionate and creative web developer with a love for crafting exceptional digital experiences. With a strong foundation in both front-end and back-end technologies, I take great pride in building websites that not only look visually stunning but also deliver seamless functionality and optimal user experiences.
                        </p>
                        <p>
                            journey as a web developer has allowed me to work on a diverse range of projects, from personal portfolios to complex e-commerce platforms. I thrive on challenges and am constantly exploring new techniques and emerging trends to stay at the forefront of the industry. Through my work, I strive to leave a positive impact by creating websites that engage, inform, and inspire.
                        </p>
                        <p>
                            Collaboration is at the heart of my approach, and I take the time to truly understand my clients' unique visions and goals. By combining their ideas with my technical expertise, I turn concepts into reality, ensuring that every project I undertake is a true reflection of their brand and identity. I'm excited to share my journey and showcase the projects that I'm truly passionate about. Feel free to explore my portfolio and get in touch if you'd like to collaborate on your next digital venture!
                        </p>
                    
                </div>
                <div className="stage-cube-cont">
                    <div className="cubespinner">
                        <div className="face1">
                            <FontAwesomeIcon icon={faAngular} color='#DD0031'/>
                        </div>
                        <div className="face2">
                            <FontAwesomeIcon icon={faGithub} color='#F06529'/>
                        </div>
                        <div className="face3">
                            <FontAwesomeIcon icon={faHtml5} color='#2*A4D9'/>
                        </div>
                        <div className="face4">
                            <FontAwesomeIcon icon={faCss3} color='#5ED4F4'/>
                        </div>
                        <div className="face5">
                            <FontAwesomeIcon icon={faReact} color='#EFD81D'/>
                        </div>
                        <div className="face6">
                            <FontAwesomeIcon icon={faJs} color='#EC4D28'/>
                        </div>
                    </div>
                </div>

            </div>
            <Loader type="line-scale-pulse-out" />
        </>
    )

        
}

export default About