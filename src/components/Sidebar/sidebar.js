import "./sidebar.sass";
import { Link, NavLink } from "react-router-dom";
import logoS from "../../assets/images/logo-s.png"
import logoSubtitle from "../../assets/images/logo_sub.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons";

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
    </div>
  )
}
