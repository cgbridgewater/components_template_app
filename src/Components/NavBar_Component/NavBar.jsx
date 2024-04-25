import { Link } from "react-router-dom";
import { useEffect } from 'react';
import DarkMode from "./Darkmode";
import NavLink from "./NavLink";

const NavBar = () => {

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
            <img src="https://mattcarterauthor.weebly.com/uploads/1/9/5/2/19525625/819762509.jpeg?399" alt="REPLACE WITH LOGO IMAGE" />
            <Link to="/">Company Name</Link>
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
                <li className="drawer_link_dark">
                    <DarkMode />
                </li>
            </ul>
        </nav>
        </>
    );
};

export default NavBar;
