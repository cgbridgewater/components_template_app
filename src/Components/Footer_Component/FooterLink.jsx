import { Link } from "react-router-dom"

const FooterLink = ({ href, text }) => {

    return (
        <Link to={ href }><span className="footer_link">{ text }</span></Link>
    );
};

export default FooterLink;