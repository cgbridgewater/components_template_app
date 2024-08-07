import { Link } from "react-router-dom";
import { useEffect } from 'react';
import DarkMode from "./Darkmode";
import NavLink from "./NavLink";
import NavLink_atag from "./NavLink_atag";
import BeeDevLogo from "./Logo_2_No_BG.png"

const NavBar_HB_Right = () => {

    useEffect(() => {
        const drawerLinks = document.querySelectorAll('.drawer_link');
        drawerLinks.forEach(link => { 
            link.addEventListener('click', () => { 
                document.getElementById('drawer_toggle').checked = false;
            });
        });

        const drawerLinkDark = document.querySelectorAll('.drawer_link_dark');
        drawerLinkDark.forEach(link => { 
            link.addEventListener('click', () => { 
                setTimeout(() => {
                document.getElementById('drawer_toggle').checked = false;
                }, 500);
            });
        });
    }, []);

    return (
        <>
        <input type="checkbox" id="drawer_toggle" name="drawer_toggle"/>
        <label htmlFor="drawer_toggle" id="drawer_toggle_label"><span className="visually-hidden">Empty Link</span></label>
        <header>
            <Link to="/">
                <img src={BeeDevLogo} alt="BeeDev Servies" />
            </Link>
            <button>Get Started</button>
        </header>
        <nav id="drawer">
            <ul>
                <li className="drawer_link">
                    <NavLink href="/" text="Home Page" />
                </li>
                <li className="drawer_link">
                    <NavLink href="/split" text="Split Page Example" />
                </li>
                <li className="drawer_link">
                    <NavLink href="/centered" text="Centered Page Example" />
                </li>
                <li className="drawer_link">
                    <NavLink href="/inserts" text="Insert Examples" />
                </li>
                <li className="drawer_link">
                    <NavLink href="/bee" text="Kyle's Bee" />
                </li>
                <li className="drawer_link">
                    <NavLink_atag href="https://www.google.com" text="Google.com" />
                </li>
                <li className="drawer_link_dark">
                    <DarkMode />
                </li>
            </ul>
        </nav>
        </>
    );
};

export default NavBar_HB_Right;
