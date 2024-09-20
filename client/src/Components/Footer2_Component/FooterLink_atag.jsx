const FooterLink_atag = ({ href, onClick, text }) => {

    return (
        <a href={ href } target="_blank" rel="noopener noreferrer" onClick={onClick}><span className="footer_link">{ text }</span></a>
    );
};

export default FooterLink_atag;