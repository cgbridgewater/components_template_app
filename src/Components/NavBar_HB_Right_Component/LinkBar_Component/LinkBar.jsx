import { Link } from "react-router-dom";
import { FaInstagramSquare, FaFacebookSquare, FaLinkedin } from "react-icons/fa";


const LinkBar = () => {

    return (
        <div className="LinkBar">
            <div className="Links_LinkBar">
                <ul>
                    <li><Link className="LinkBar_Link">Home</Link></li>
                    <li><Link className="LinkBar_Link">About</Link></li>
                    <li><Link className="LinkBar_Link">Services</Link></li>
                    <li><Link className="LinkBar_Link">Projects</Link></li>
                    <li><Link className="LinkBar_Link">Contact</Link></li>
                </ul>
            </div>
            <div className="Socials_LinkBar">
                <ul>
                    <li><a href="#add_a_link" target="_blank" className="Socials_Link"><FaInstagramSquare /></a></li>
                    <li><a href="#add_a_link" target="_blank" className="Socials_Link"><FaLinkedin /></a></li>
                    <li><a href="#add_a_link" target="_blank" className="Socials_Link"><FaFacebookSquare /></a></li>
                </ul>
            </div>
        </div>
    );
};

export default LinkBar;