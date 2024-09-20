import React, { useState, useRef, useEffect } from 'react';
import { IoIosArrowForward } from "react-icons/io";
import FooterLink from './FooterLink';
import FooterLink_atag from './FooterLink_atag';

const Accordion = () => {
    const [openedSection, setOpenedSection] = useState(null);

    const toggleSection = (section) => {
        setOpenedSection(prev => (prev === section ? null : section));
    };

    const handleClickOutside = (event) => {
        // Close all sections if clicked outside
        if (accordionRef.current && !accordionRef.current.contains(event.target)) {
            setOpenedSection(null);
        }
    };

    const accordionRef = useRef(null);

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="accordion-container" ref={accordionRef}>
            <div className="section">
                <div className="header" onClick={() => toggleSection('about')}>
                    <span className={`arrow ${openedSection === 'about' ? 'open' : ''}`}><IoIosArrowForward /></span>
                    About Us
                </div>
                <div className={`content ${openedSection === 'about' ? 'open' : ''}`}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet accumsan arcu.</p>
                </div>
            </div>
            <div className="section">
                <div className="header" onClick={() => toggleSection('quickLinks')}>
                    <span className={`arrow ${openedSection === 'quickLinks' ? 'open' : ''}`}><IoIosArrowForward /></span>
                    Quick Links
                </div>
                <div className={`content ${openedSection === 'quickLinks' ? 'open' : ''}`}>
                    <ul>
                        <FooterLink href="/" text="Home Page" onClick={() => setOpenedSection(null)}/>
                        <FooterLink href="/split" text="Split Page Example" onClick={() => setOpenedSection(null)}/>
                        <FooterLink href="/centered" text="Centered Page Example" onClick={() => setOpenedSection(null)}/>
                        <FooterLink href="/inserts" text="Insert Examples" onClick={() => setOpenedSection(null)}/>
                        <FooterLink href="/bee" text="Kyle's Bee" onClick={() => setOpenedSection(null)}/>
                        <FooterLink_atag href="https://google.com" text="Google.com" onClick={() => setOpenedSection(null)}/>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Accordion;
