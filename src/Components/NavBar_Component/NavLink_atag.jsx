const NavLink_atag = ({ href, text }) => {

    return (
        <a href={ href } target="_no"><span className="nav_link">{ text }</span></a>
    );
};

export default NavLink_atag;