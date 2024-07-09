import React, { useEffect, useRef } from 'react';
import NavLink from "./NavLink"
import DarkMode from './Darkmode';
import { Link } from 'react-router-dom';

const NavBar2 = () => {

    const navHeaderRef = useRef(null);

    useEffect(() => {
        // section 1 - Add remove sticky class on scroll based on window position
        const handleScroll = () => {
            // Attaches nav bar once below 16px from top
            const nav_header = document.querySelector('.nav_header');
            if (window.scrollY > 16) {
                nav_header.classList.add('sticky');
            } else {
                nav_header.classList.remove('sticky');
            }
            // closes nav bar mobile if scrolled away from nav
            if (nav_header) {
                if (window.scrollY > 5) {
                    nav_header.classList.remove('open_nav');
                } else {
                    nav_header.classList.remove('open_nav');
                }
            }
        };

        // section 2 - Closes Mobile Hamburger when clicked outside of navbar
        const handleClickOutside = (event) => {
            if (navHeaderRef.current && !navHeaderRef.current.contains(event.target)) {
                const nav_header = document.querySelector('.nav_header');
                nav_header.classList.remove('open_nav');
            }
        };

        // section 3 - Opens Mobile Hamburger
        const handleMobileToggle = () => {
            const nav_header = document.querySelector('.nav_header');
            if (nav_header.classList.contains('open_nav')) {
                nav_header.classList.remove('open_nav');
            } else {
                nav_header.classList.add('open_nav');
            }
        };

        // section 4 - Closes the nav on page change
        const handleCloseNav = () => {
            const nav_header = document.querySelector('.nav_header');
            const navigation = document.querySelector('.navigation');
            if (nav_header.classList.contains('open_nav')) {
                navigation.classList.remove('open_nav');
                nav_header.classList.remove('open_nav');
            }
            if (nav_header.classList.contains('open_nav')) {
                nav_header.classList.remove('open_nav');
            }
        };
        
        // section 5 - Event listeners to trigger functions
        // closes mobile nav when clicked outside of nav area
        document.addEventListener('mousedown', handleClickOutside);
        // closes nav if window is scrolled
        window.addEventListener('scroll', handleScroll);
        // opens/closes mobel window when hamburger is clicked
        document.querySelector('.mobile_toggle').addEventListener('click', handleMobileToggle);
        // closes nav based on link click
        document.querySelectorAll('.nav_header li a').forEach(anchor => {
            anchor.addEventListener('click', handleCloseNav);
        });
        // closes nav based on Logo click
        document.querySelectorAll('.logo').forEach(anchor => {
            anchor.addEventListener('click', handleCloseNav);
        });

        // section 6 - closes the mobile menu on dark mode theme change
        const drawerLinkDark = document.querySelectorAll('.darkmode_input');
        drawerLinkDark.forEach(input => { 
            input.addEventListener('click', () => { 
                setTimeout(() => {
                    handleCloseNav()
                }, 750);
            });
        });

        // section 7 - closes all event listeners
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            window.removeEventListener('scroll', handleScroll);
            document.querySelector('.mobile_toggle').removeEventListener('click', handleMobileToggle);
            document.querySelectorAll('.nav_header li a').forEach(anchor => {
                anchor.removeEventListener('click', handleCloseNav);
            });
            const drawerLinkDark = document.querySelectorAll('.darkmode_input');
            drawerLinkDark.forEach(input => { 
                input.removeEventListener('click', handleCloseNav);
            });
        };
    }, []);


    return(
        <>
            {/* NAV BAR (Appears on Scroll) */}
            <header ref={navHeaderRef} className="nav_header">
                <div className="nav_row">
                    {/* NavBar Title */}
                    <Link className="logo" to="/">SteakAndPlate</Link>
                    {/* END NavBar Title */}
                    {/* Hamburger */}
                    <div className="mobile_toggle">
                        <label><span className="visually-hidden">Empty Link</span></label>
                    </div>
                    {/* END Hamburger */}
                    {/* Nav Links */}
                    <nav className="navigation">
                        <ul>
                            <li><NavLink href={"/"} text={ "Home "} /></li>
                            <li><NavLink href={"/split"} text={ "Split Demo "} /></li>
                            <li><NavLink href={"/centered"} text={ "Centered Demo "} /></li>
                            <li><NavLink href={"/inserts"} text={ "Inserts Demo "} /></li>
                            <li><NavLink href={"/login"} text={ "Login "} /></li>
                            <li className='darkmode_input'><DarkMode /></li>
                        </ul>
                    </nav>
                    {/* END Nav Links */}
                </div>
            </header>
            {/* Initial Title (Leaves on Scroll) */}
            <div className="nav_hero">
                <h1><span>SteakAndPlate</span><br/>Steak House</h1>
            </div>
        </>
    );
};

export default NavBar2;