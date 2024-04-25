const FooterLink_atag = ({ href, text }) => {

    return (
        <a href={ href } target="_no"><span className="footer_link">{ text }</span></a>
    );
};

export default FooterLink_atag;