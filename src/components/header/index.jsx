import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import menus from '../../pages/menu';
import Button from '../button/index';
import './styles.scss';
import logo from '../../assets/images/latest/latestlogo.png';

const Header = () => {
    const [scroll, setScroll] = useState(false);
    const [menuActive, setMenuActive] = useState(false);
    const [activeIndex, setActiveIndex] = useState(null);
    const navigate = useNavigate();
    const location = useLocation(); // Get the current route location

    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY > 300);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleMenuActive = () => {
        setMenuActive(!menuActive);
    };

    const handleDropdown = (index) => {
        setActiveIndex(index);
    };

    const scrollToSection = (yOffset) => {
        window.scrollTo({
            top: yOffset,
            behavior: 'smooth',
        });
    };

    const handleLinkClick = (links, yOffset) => {
        // Check if we are already on the domains page
        if (location.pathname === links) {
            // If already on the page, just scroll to the offset without navigation
            scrollToSection(yOffset);
        } else {
            // If navigating to a new page, use navigate
            navigate(links);
            // Delay scrolling to allow routing to complete
            setTimeout(() => {
                scrollToSection(yOffset);
            }, 100); // Small delay to ensure routing happens before scroll
        }
    };

    return (
        <header id="header_main" className={`header ${scroll ? 'is-fixed' : ''}`}>
            <div className="container">
                <div id="site-header-inner">
                    <div className="header__logo">
                    <NavLink to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
    <img
        src={logo}
        alt="Risebot"
        className="header-logo-image"
    />
</NavLink>
                    </div>
                    <nav id="main-nav" className={`main-nav ${menuActive ? 'active' : ''}`}>
                        <ul id="menu-primary-menu" className="menu">
                            {menus.map((data, idx) => (
                                <li
                                    key={idx}
                                    onClick={() => handleDropdown(idx)}
                                    className={`menu-item ${data.namesub ? 'menu-item-has-children' : ''} ${activeIndex === idx ? 'active' : ''}`}
                                >
                                    {/* Apply the same logic for FAQ as the other links */}
                                    {data.name === 'Faq' ? (
                                        <button
                                            onClick={() => handleLinkClick('/faqs', 10)} // Navigate to /faqs and scroll to yOffset 0
                                            className="menu-link"
                                        >
                                            {data.name}
                                        </button>
                                    ) : (
                                        <button
                                            onClick={() => handleLinkClick(data.links, data.yOffset)}
                                            className="menu-link"
                                        >
                                            {data.name}
                                        </button>
                                    )}

                                    {data.namesub && (
                                        <ul className="sub-menu">
                                            {data.namesub.map((submenu) => (
                                                <li key={submenu.id} className="menu-item">
                                                    <NavLink to={submenu.links} onClick={handleDropdown}>
                                                        {submenu.sub}
                                                    </NavLink>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <Button title="RAIT ACM-W" path="https://rait-w.acm.org" addclass="style1" />
                    <div
                        className={`mobile-button ${menuActive ? 'active' : ''}`}
                        onClick={handleMenuActive}
                    >
                        <span></span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
