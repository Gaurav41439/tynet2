import React, { useEffect, useState } from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';

function Footer(props) {
    const [isVisible, setIsVisible] = useState(false);
    
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

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
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
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <button
                                        onClick={() => scrollToComponent(1400)} 
                                        style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}
                                    >
                                        Domains
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => scrollToComponent(2260)} 
                                        style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}
                                    >
                                        Roadmap
                                    </button>
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
                                </li>
                                <li className="email">
                                    <p>Website</p>
                                    <Link to="https://rait-w.acm.org/">RAIT-W ACM</Link>
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
                <path d="M16.5 0H1.5C0.671573 0 0 0.671573 0 1.5V16.5C0 17.3284 0.671573 18 1.5 18H16.5C17.3284 18 18 17.3284 18 16.5V1.5C18 0.671573 17.3284 0 16.5 0ZM5.25 15.375H2.625V6.75H5.25V15.375ZM3.9375 5.4375C3.13575 5.4375 2.53125 4.833 2.53125 4.03125C2.53125 3.2295 3.13575 2.625 3.9375 2.625C4.73925 2.625 5.34375 3.2295 5.34375 4.03125C5.34375 4.833 4.73925 5.4375 3.9375 5.4375ZM15.375 15.375H12.75V9.75C12.75 8.5935 12.75 7.5 11.25 7.5C9.75 7.5 9.75 8.75 9.75 9.75V15.375H7.125V6.75H9.75V7.5H9.75C9.75 7.5 12 7.5 12 6.75V4.5H7.125V15.375H15.375V15.375Z" fill="#798DA3"/>
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
