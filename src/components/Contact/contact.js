import Loader from 'react-loaders';
import './contact.sass';
import AnimatedLetters from '../AnimatedText/animatedtext';
import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);

        return () => {
            clearTimeout(timeoutId);
        };
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm('service_887dlab', 'template_52g9rmk', refForm.current, '2zuYvwhW98UnKC4t0')

            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArr={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        I am interested in freelance opportunities - especially on ambitious
                        or large projects. However, if you have any other requests or
                        questions, don't hesitate to contact me using below form either.
                    </p>
                    <div className="contact-form">
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type="text" name='name' placeholder='Name' required />
                                </li>
                                <li className='half'>
                                    <input type="email" name='email' placeholder='Email' required />
                                </li>
                                <li>
                                    <input type="text" placeholder='Subject' name="subject" required />
                                </li>
                                <li>
                                    <textarea placeholder='Message' name='message' required>

                                    </textarea>
                                </li>
                                <li>
                                    <input type="submit" className="flat-button" value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                {/* <div className="info-map" id="map">
                    hello
                    <br/>
                    It's me
                    <div className="map-wrap">
                        <MapContainer center={[44.96366, 19.61045]} zoom={13}>
                            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                            <Marker position={[44.96366, 19.61045]}>
                                <Popup>Sloba lives here, come over for a cup of coffee :)</Popup>
                            </Marker>
                        </MapContainer>
                    </div>
                </div> */}
            </div>
            <Loader type="line-scale-pulse-out" />
        </>

    )
}

export default Contact;