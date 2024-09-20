import { Link } from "react-router-dom"
import { FaInstagramSquare, FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import FooterLink_atag from "./FooterLink_atag";
import FooterLink from "./FooterLink";
import BeeDevLogo from "./Logo_1_No_BG.png"

const Footer = () => {
    return (
        <>
        <footer>
            {/* LEFT SIDE OF FOOTER */}
            {/* Links In Footer */}
            <div className="footer_links">
                {/* <div className="footer_link_column bee_dev">
                    <p>
                    Website Built By:
                    <br />
                    <FooterLink_atag href="https://beedev-services.com/" text="BEEDEV-SERVICES" />
                    </p>
                    </div>
                    <div className="footer_link_column bee_dev">
                    <p>
                    Powered By:
                    <br />
                    <FooterLink_atag href="https://techbyte-learning.com/" text="TechByte Learning" />
                    </p>
                    </div> */}
                {/* <div className="footer_link_column">
                    <h3>About us</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, velit accusamus. Saepe consequatur unde exercitationem vero ea deserunt maxime recusandae qui? Atque perferendis provident incidunt laudantium accusamus itaque. Ut, perspiciatis?</p>
                </div> */}
                <div className="footer_link_column">
                    <h3>Quick Links</h3>
                    <FooterLink href="/" text="Home" />
                    <FooterLink href="/split" text="Split Demo" />
                    <FooterLink href="/centered" text="Centered Demo" />
                    <FooterLink href="/inserts" text="Inserts Demo" />
                </div>
            </div>
            {/* RIGHT SIDE OF FOOTER */}
            <div className="footer_badges">
                {/* Footer Owner Badges */}
                <div className="footer_images">
                    <Link to="/"><img className="footer_image_one" src={BeeDevLogo} alt="BeeDev Services Logo" /></Link>
                </div>
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

export default Footer;
