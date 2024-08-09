import { Link } from "react-router-dom";

const LinkBar = () => {

    return (

        <div className="LinkBar">
            <ul>
                <li><Link className="LinkBar_Link">Home</Link></li>
                <li><Link className="LinkBar_Link">About</Link></li>
                <li><Link className="LinkBar_Link">Services</Link></li>
                <li><Link className="LinkBar_Link">Projects</Link></li>
                <li><Link className="LinkBar_Link">Contact</Link></li>
            </ul>
        </div>

    );
};

export default LinkBar;