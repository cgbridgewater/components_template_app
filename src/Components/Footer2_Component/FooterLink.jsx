import { Link } from "react-router-dom"

const FooterLink = ({ href,onClick, text }) => {

    return (
        <Link to={ href } onClick={onClick}><span className="footer_link">{ text }</span></Link>
    );
};

export default FooterLink;