import LogoTitle from '../../assets/images/logo-s.png'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Logo from './Logo/logo'
import './home.sass'
import AnimatedLetters from '../AnimatedText/animatedtext'

const Home = () => {
    const[letterClass, setLetterClass] = useState('text-animate')
    const nameArr = ['l','o','b','o','d','a','n']
    const jobArr = ['w','e','b',' ','d','e','v','e','l','o','p','e','r','.']

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);
    
        return () => {
            clearTimeout(timeoutId);
        };
    }, []);
    

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>    
                <span className={`${letterClass} _12`}>i,</span>    
                <br/>
                <span className={`${letterClass} _13`}>I</span> 
                <span className={`${letterClass} _14`}>'m</span> 
                <img src={LogoTitle} alt=""/>
                <AnimatedLetters letterClass={letterClass}
                strArr={nameArr}
                idx={15} />
                <br />
                <AnimatedLetters letterClass={letterClass}
                strArr={jobArr}
                idx={22} />
                </h1>
                <h2>Full Stack Developer </h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
            < Logo />
        </div>
    )
}


export default Home