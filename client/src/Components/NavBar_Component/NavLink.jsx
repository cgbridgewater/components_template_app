import { Link } from "react-router-dom"

const NavLink = ({ href, text }) => {

    return (
        <Link to={ href }><span className="nav_link">{ text }</span></Link>
    );
};

export default NavLink;