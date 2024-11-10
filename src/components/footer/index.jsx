import React, { useEffect, useState } from 'react';

import './styles.scss'

import { Link } from 'react-router-dom';



function Footer(props) {

    const [isVisible, setIsVisible] = useState(false);

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
                            <img src={require ("../../assets/images/latest/ACM-WLOGOWHITE.png")}  style={{ width: '240px', height: '250px' }}  alt="" />
                        </div>
                        <p>An International Woman Hackathon.</p>
                    </div>
                    <div className="widget">
                        <h5 className="widget-title">
                            Contact us
                        </h5>
                        <ul className="widget-link contact">
                            <li>
                                <p>Address</p>
                                <Link to="#">Ramrao Adik Institute Of Technology</Link>
                            </li>
                            <li>
                                <p>Phone</p>
                                <Link to="#">+91 9423119067</Link>
                            </li>
                            <li className="email">
                                <p>Email</p>
                                <Link to="#">reachraitacmw@gmail.com</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="widget support">
                        <h5 className="widget-title">
                           Our Domains
                        </h5>
                        <ul className="widget-link">
                            <li>
                                <Link to="/connect">Technical</Link>
                            </li>
                            <li>
                                <Link to="/forgetPass">Management</Link>
                            </li>
                            <li>
                                <Link to="/faqs">Media Graphics</Link>
                            </li>
                            <li>
                                <Link to="/contact">Publicity</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="widget link">
                        <h5 className="widget-title">
                           Useful link
                        </h5>
                        <ul className="widget-link">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/project_list">Project</Link>
                            </li>
                            <li>
                                <Link to="/blog_grid">Blog</Link>
                            </li>
                            <li>
                                <Link to="/team_details">Our Team</Link>
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
                        Copyright © 2023. Designed by Rait Technical Team
                    </div>
                    <ul className="social">
                    <li>
    <Link to="#">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.46 6.003c-.793.353-1.644.59-2.54.698.914-.546 1.616-1.411 1.948-2.442-.857.509-1.804.878-2.81 1.078-.807-.86-1.956-1.397-3.227-1.397-2.44 0-4.42 1.977-4.42 4.42 0 .345.04.683.114 1.006C7.69 9.464 5.067 7.953 3.393 5.737c-.377.644-.594 1.391-.594 2.188 0 1.51.77 2.846 1.937 3.628-.715-.022-1.387-.219-1.974-.546v.056c0 2.107 1.498 3.865 3.485 4.263-.365.1-.75.15-1.145.15-.28 0-.554-.027-.82-.077.555 1.732 2.165 2.992 4.072 3.027-1.493 1.17-3.375 1.87-5.426 1.87-.353 0-.704-.021-1.047-.062 1.937 1.242 4.238 1.964 6.715 1.964 8.053 0 12.462-6.677 12.462-12.463 0-.191-.003-.384-.012-.574.858-.619 1.6-1.387 2.185-2.27z" fill="#798DA3"/>
        </svg>
    </Link>
</li>

    {/* Facebook */}
    <li>
        <Link to="#">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 0C4.02944 0 0 4.02944 0 9C0 13.6027 3.22141 17.2861 7.44629 17.944V11.625H5.35938V9H7.44629V7.14062C7.44629 5.04051 8.65338 3.9375 10.5469 3.9375C11.4753 3.9375 12.4244 4.10938 12.4244 4.10938V6.14062H11.368C10.3188 6.14062 10.0781 6.72607 10.0781 7.44751V9H12.3281L11.9375 11.625H10.0781V17.944C14.2786 17.2861 17.5 13.6027 17.5 9C17.5 4.02944 13.4706 0 9 0Z" fill="#798DA3"/>
            </svg>
        </Link>
    </li>

    {/* Instagram */}
    <li>
        <Link to="#">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.75 1.5H5.25C3.59315 1.5 2.25 2.84315 2.25 4.5V13.5C2.25 15.1569 3.59315 16.5 5.25 16.5H12.75C14.4069 16.5 15.75 15.1569 15.75 13.5V4.5C15.75 2.84315 14.4069 1.5 12.75 1.5ZM9 12.75C7.20507 12.75 5.75 11.2949 5.75 9.5C5.75 7.70507 7.20507 6.25 9 6.25C10.7949 6.25 12.25 7.70507 12.25 9.5C12.25 11.2949 10.7949 12.75 9 12.75ZM13.5 5.25C13.9142 5.25 14.25 4.91421 14.25 4.5C14.25 4.08579 13.9142 3.75 13.5 3.75C13.0858 3.75 12.75 4.08579 12.75 4.5C12.75 4.91421 13.0858 5.25 13.5 5.25Z" fill="#798DA3"/>
            </svg>
        </Link>
    </li>

    {/* LinkedIn */}
    <li>
        <Link to="#">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.5 0H1.5C0.671573 0 0 0.671573 0 1.5V16.5C0 17.3284 0.671573 18 1.5 18H16.5C17.3284 18 18 17.3284 18 16.5V1.5C18 0.671573 17.3284 0 16.5 0ZM5.25 15.375H2.625V6.75H5.25V15.375ZM3.9375 5.4375C3.13575 5.4375 2.53125 4.833 2.53125 4.03125C2.53125 3.2295 3.13575 2.625 3.9375 2.625C4.73925 2.625 5.34375 3.2295 5.34375 4.03125C5.34375 4.833 4.73925 5.4375 3.9375 5.4375ZM15.375 15.375H12.75V11.625C12.75 10.6251 12.1249 9.75 11.125 9.75C10.1251 9.75 9.5 10.6251 9.5 11.625V15.375H6.875V6.75H9.5V8.10037C10.121 7.38138 11.0208 6.9375 12 6.9375C14.1421 6.9375 15.375 8.58813 15.375 11.1531V15.375Z" fill="#798DA3"/>
            </svg>
        </Link>
    </li>
</ul>

                </div>
            </div>
            
        </div>

        {
                isVisible && 
                <Link onClick={scrollToTop}  to='#' id="scroll-top"></Link>
            }
    </footer>
    );
}

export default Footer;