const FooterLink_atag = ({ href, text }) => {

    return (
        <a href={ href } target="_blank" rel="noopener noreferrer"><span className="footer_link">{ text }</span></a>
    );
};

export default FooterLink_atag;