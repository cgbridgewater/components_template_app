import { Link } from "react-router-dom"
import { FaInstagramSquare, FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import FooterLink from "./FooterLink";
import BeeDevLogo from "./Logo_1_No_BG.png"
import Accordion from "./Accordion";

const Footer2 = () => {
    return (
        <>
        <footer>
            <Accordion />
            <div className="footer_badges">
                {/* Footer BeeDev Badges */}
                <Link to="/"><img src={BeeDevLogo} alt="BeeDev Services Logo" /></Link>
                {/* Footer Socials */}
                <div className="footer_socials">
                    {/* Instagram */}
                    <a href="#add_a_link" target="_blank">
                        <FaInstagramSquare />
                    </a>
                    {/* LinkedIn */}
                    <a href="#add_a_link" target="_blank">
                        <FaLinkedin />
                    </a>
                    {/* Facebook */}
                    <a href="#add_a_link" target="_blank">
                        <FaFacebookSquare />
                    </a>
                </div>
            </div>
        </footer>
        <div className="footer_break">
            <hr />
        </div>
        <div className="footer_rights">
            <p>© BeeDev Services - All Rights Reserved</p>
            <FooterLink href="#add_a_link" text="Privacy Policy" />
        </div>
        </>
    )
};

export default Footer2;
