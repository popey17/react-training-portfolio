import Logo from '../../assets/images/logo-s.png'
import { Link } from 'react-router-dom'
import './home.sass'

const Home = () => {
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, <br/> I'm
                <img src={Logo} alt=""/>
                lobodan
                <br />
                web developer
                </h1>
                <h2>Full Stack Developer </h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
        </div>
    )
}


export default Home