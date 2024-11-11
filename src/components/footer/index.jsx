import React, { useEffect, useState } from 'react';
import './styles.scss';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function Footer(props) {
    const [isVisible, setIsVisible] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    
    const scrollToComponent = (val) => {
        window.scrollTo({
            top: val, 
            behavior: 'smooth' 
        });
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    const handleHomeClick = (e) => {
        if (location.pathname === "/") {
            e.preventDefault();
            scrollToTop();
        }
    };

    const handleContactClick = (e) => {
        if (location.pathname === "/contact") {
            e.preventDefault();
            scrollToTop();
        }
    };

    const handleDomainsClick = () => {
        if (location.pathname !== "/") {
            navigate('/'); // Navigate to the home page first
            setTimeout(() => {
                scrollToComponent(1400); // Scroll after navigating to home
            }, 300); // Timeout to ensure navigation is complete before scrolling
        } else {
            scrollToComponent(1400); // If already on home page, just scroll
        }
    };

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        const handleDomainsClick = () => {
            if (location.pathname !== "/") {
                navigate('/'); // Navigate to the home page first
                setTimeout(() => {
                    scrollToComponent(1400); // Scroll after navigating to home
                }, 300); // Timeout to ensure navigation is complete before scrolling
            } else {
                scrollToComponent(1400); // If already on home page, just scroll
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <footer id="footer">
            <div className="footer-main">
                <div className="container">
                    <div className="row">
                        <div className="footer-logo">
                            <div className="logo_footer">
                                <img
                                    src={require("../../assets/images/latest/ACM-WLOGOWHITE.png")}
                                    style={{ width: '240px', height: '250px' }}
                                    alt=""
                                />
                            </div>
                            <p>An International Women Hackathon.</p>
                        </div>
                        <div className="widget">
                            {/* Empty */}
                        </div>
                        <div className="widget link">
                            <h5 className="widget-title">Useful links</h5>
                            <ul className="widget-link">
                                <li>
                                    <Link to="/" onClick={handleHomeClick}>Home</Link>
                                </li>
                                <li>
                                <button
                                        onClick={handleDomainsClick} 
                                        style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}
                                    >
                                        Domains
                                    </button>
                                </li>
                                <li>
                                    <Link to="/contact" onClick={handleContactClick}>Contact</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="widget support">
                            <h5 className="widget-title">Contact us</h5>
                            <ul className="widget-link contact">
                                <li>
                                    <p>Address</p>
                                    <Link to="#">Ramrao Adik Institute Of Technology, Nerul</Link>
                                </li>
                                <li className="email">
                                    <p>Email</p>
                                    <Link to="#">reachraitacmw@gmail.com</Link>
                                    <p>Secondary email</p>
                                    <Link to="#">tynet.raitacmw@gmail.com</Link>
                                    
                                </li>
                                <li className="email">
                                    <p>Website</p>
                                    <a href="https://rait-w.acm.org/" target="_blank" rel="noopener noreferrer">
                                        RAIT-W ACM
                                    </a>
                                </li>
                            </ul> 
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div className="wrap-fx">
                        <div className="Copyright">
                            Copyright © 2024. RAIT ACM W Student Chapter
                        </div>
                        <ul className="social">
                            <li>
                                <a href="https://x.com/rait_acm_w" target="_blank" rel="noopener noreferrer">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2 2L12 12L2 22H7L12 17L17 22H22L12 12L22 2H17L12 7L7 2H2Z" fill="#798DA3"/>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/people/Rait-Acm-W/pfbid02AWy7gqgRfUFxrUDGdNbtv5YuWsNnc3F1WpcywcfjZjyDayN3wUiVRaDt1uEKUyWzl/" target="_blank" rel="noopener noreferrer">
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9 0C4.02944 0 0 4.02944 0 9C0 13.6027 3.22141 17.2861 7.44629 17.944V11.625H5.35938V9H7.44629V7.14062C7.44629 5.04051 8.65338 3.9375 10.5469 3.9375C11.4753 3.9375 12.4244 4.10938 12.4244 4.10938V6.14062H11.368C10.3188 6.14062 10.0781 6.72607 10.0781 7.44751V9H12.3281L11.9375 11.625H10.0781V17.944C14.2786 17.2861 17.5 13.6027 17.5 9C17.5 4.02944 13.4706 0 9 0Z" fill="#798DA3"/>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/raitacm_w/?utm_source=ig_web_button_share_sheet" target="_blank" rel="noopener noreferrer">
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.75 1.5H5.25C3.59315 1.5 2.25 2.84315 2.25 4.5V13.5C2.25 15.1569 3.59315 16.5 5.25 16.5H12.75C14.4069 16.5 15.75 15.1569 15.75 13.5V4.5C15.75 2.84315 14.4069 1.5 12.75 1.5ZM9 12.75C7.20507 12.75 5.75 11.2949 5.75 9.5C5.75 7.70507 7.20507 6.25 9 6.25C10.7949 6.25 12.25 7.70507 12.25 9.5C12.25 11.2949 10.7949 12.75 9 12.75ZM13.5 5.25C13.9142 5.25 14.25 4.91421 14.25 4.5C14.25 4.08579 13.9142 3.75 13.5 3.75C13.0858 3.75 12.75 4.08579 12.75 4.5C12.75 4.91421 13.0858 5.25 13.5 5.25Z" fill="#798DA3"/>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/company/raitacm-w-student-chapter/" target="_blank" rel="noopener noreferrer">
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.5 0H1.5C0.671573 0 0 0.671573 0 1.5V16.5C0 17.3284 0.671573 18 1.5 18H16.5C17.3284 18 18 17.3284 18 16.5V1.5C18 0.671573 17.3284 0 16.5 0ZM5.25 14.25H2.625V7.5H5.25V14.25ZM3.9375 6.75C3.25 6.75 2.625 6.125 2.625 5.4375C2.625 4.75 3.25 4.125 3.9375 4.125C4.625 4.125 5.25 4.75 5.25 5.4375C5.25 6.125 4.625 6.75 3.9375 6.75ZM15.375 14.25H12.75V10.125C12.75 8.75 11.875 8.25 11.125 8.25C10.125 8.25 9.75 8.875 9.75 9.75V14.25H7.125V7.5H9.75V9.5C9.75 10.25 10.25 10.5 10.5 10.5C10.75 10.5 11.25 10.25 11.25 9.5V7.5H13.875V14.25H15.375Z" fill="#798DA3"/>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
