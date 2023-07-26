import "./sidebar.sass";
import { Link, NavLink } from "react-router-dom";
import logoS from "../../assets/images/logo-s.png"
import logoSubtitle from "../../assets/images/logo_sub.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Sidebar() {
  return (
    <div className="nav-bar">
        <Link className="logo" to="/">
            <img src={logoS} alt="logo" />
            <img className="sub-logo" src={logoSubtitle} alt="logoSub" />
        </Link>
        <nav>
            <NavLink exacft="true" activeclassname="active" to="/" >
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink exacft="true" activeclassname="active" className="about-link" to="/about" >
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink exacft="true" activeclassname="active" className="contact-link" to="/contact" >
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/leo17/"> 
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>
                </a>
            </li>
            <li>
                <a target="_blank" rel="noreferrer" href="https://github.com/popey17"> 
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
                </a>
            </li>
            <li>
                <a target="_blank" rel="noreferrer" href="https://www.facebook.com/aungmyat.kyaw.7/"> 
                    <FontAwesomeIcon icon={faFacebook} color="#4d4d4e"/>
                </a>
            </li>
        </ul>
    </div>
  )
}
