import React, { useEffect } from 'react';
import NavLink from "./NavLink"

const NavBar2 = () => {

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                document.querySelector('.main_h').classList.add('sticky');
            } else {
                document.querySelector('.main_h').classList.remove('sticky');
            }
        };

        const handleMobileToggle = () => {
            const main_h = document.querySelector('.main_h');
            if (main_h.classList.contains('open-nav')) {
                main_h.classList.remove('open-nav');
            } else {
                main_h.classList.add('open-nav');
            }
        };

        const handleCloseNav = () => {
            const main_h = document.querySelector('.main_h');
            const navigation = document.querySelector('.navigation');
            if (main_h.classList.contains('open-nav')) {
                navigation.classList.remove('open-nav');
                main_h.classList.remove('open-nav');
            }
        };

        const handleNavigationScroll = (event) => {
            const id = event.target.getAttribute("href");
            const offset = 70;
            const target = document.querySelector(id).offsetTop - offset;
            window.scrollTo({
                top: target,
                behavior: 'smooth'
            });
            event.preventDefault();
        };

        window.addEventListener('scroll', handleScroll);
        document.querySelector('.mobile-toggle').addEventListener('click', handleMobileToggle);
        document.querySelectorAll('.main_h li a').forEach(anchor => {
            anchor.addEventListener('click', handleCloseNav);
        });
        document.querySelectorAll('nav a').forEach(anchor => {
            anchor.addEventListener('click', handleNavigationScroll);
        });

        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.querySelector('.mobile-toggle').removeEventListener('click', handleMobileToggle);
            document.querySelectorAll('.main_h li a').forEach(anchor => {
                anchor.removeEventListener('click', handleCloseNav);
            });
            document.querySelectorAll('nav a').forEach(anchor => {
                anchor.removeEventListener('click', handleNavigationScroll);
            });
        };
    }, []);

    return(
        <>
            <header className="main_h">

                <div className="row">
                    <a className="logo" href="/">SteakAndPlate</a>

                    <div className="mobile-toggle">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    <nav>
                        <ul>
                            <li><a href=".sec05">Section 02</a></li>
                            <li><NavLink to={"/"} text={ "Section 01 "}  /></li>
                            <li><a href=".sec03">Section 03</a></li>
                            <li><a href=".sec04">Section 04</a></li>
                        </ul>
                    </nav>

                </div>

            </header>

            <div className="hero">

                <h1><span>steakandplate</span><br/>steak house</h1>

                <div className="mouse">
                    <a href=".wrapper"><i class="fa-solid fa-chevron-down fa-beat-fade fa-2xl"></i></a> 
                    
                </div>

            </div>
        </>
    );
};

export default NavBar2;
