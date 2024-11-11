import React, {useEffect} from 'react';

import PageTitle from '../components/pagetitle';
import CTA from '../components/cta/cta_v2';

function Contact(props) {

    useEffect(() => {
        // Scroll to a specific yOffset (10px) when the component is mounted
        window.scrollTo(0, 10);
      }, []);
      
    
    return (
        <div className='inner-page'>
            {<PageTitle title='Contact' />}

            <section className="tf-section tf-contact pt60">
                <div className="container">
                    <div className="row"> 
                        <div className="col-md-12">
                            <div className="tf-title mb40" data-aos="fade-up" data-aos-duration="800">
                                <h2 className="title">
                                    Get in touch
                                </h2>
                            </div>
                        </div> 
                        <div className="col-md-12">
                            <ul className="contact-info">
                                <li>
                                    <div className="icon">
                                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18.75 13.125C18.75 14.1196 18.3549 15.0734 17.6517 15.7767C16.9484 16.4799 15.9946 16.875 15 16.875C14.0054 16.875 13.0516 16.4799 12.3483 15.7767C11.6451 15.0734 11.25 14.1196 11.25 13.125C11.25 12.1304 11.6451 11.1766 12.3483 10.4733C13.0516 9.77009 14.0054 9.375 15 9.375C15.9946 9.375 16.9484 9.77009 17.6517 10.4733C18.3549 11.1766 18.75 12.1304 18.75 13.125V13.125Z" stroke="#798DA3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M24.375 13.125C24.375 22.0525 15 27.1875 15 27.1875C15 27.1875 5.625 22.0525 5.625 13.125C5.625 10.6386 6.61272 8.25403 8.37087 6.49587C10.129 4.73772 12.5136 3.75 15 3.75C17.4864 3.75 19.871 4.73772 21.6291 6.49587C23.3873 8.25403 24.375 10.6386 24.375 13.125V13.125Z" stroke="#798DA3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                                                            
                                    </div>
                                    <div className="content">
                                        <p>Address</p>
                                        <p className="white">Ramrao Adik Institute of Technology, Nerul</p>
                                    </div>
                                </li>
                                
                                <li>
                                    <div className="icon">
                                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M27.1875 8.4375V21.5625C27.1875 22.3084 26.8912 23.0238 26.3637 23.5512C25.8363 24.0787 25.1209 24.375 24.375 24.375H5.625C4.87908 24.375 4.16371 24.0787 3.63626 23.5512C3.10882 23.0238 2.8125 22.3084 2.8125 21.5625V8.4375M27.1875 8.4375C27.1875 7.69158 26.8912 6.97621 26.3637 6.44876C25.8363 5.92132 25.1209 5.625 24.375 5.625H5.625C4.87908 5.625 4.16371 5.92132 3.63626 6.44876C3.10882 6.97621 2.8125 7.69158 2.8125 8.4375M27.1875 8.4375V8.74125C27.1876 9.22143 27.0647 9.69363 26.8305 10.1129C26.5964 10.5321 26.2588 10.8844 25.85 11.1363L16.475 16.905C16.0315 17.1782 15.5209 17.3228 15 17.3228C14.4791 17.3228 13.9685 17.1782 13.525 16.905L4.15 11.1375C3.74115 10.8857 3.40359 10.5334 3.16946 10.1141C2.93534 9.69488 2.81245 9.22268 2.8125 8.7425V8.4375" stroke="#798DA3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                                    
                                    </div>
                                    <div className="content">
                                        <p>Email</p>
                                        <p className="color-hover">reachraitacmw@gmail.com</p>
                                    </div>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </section>   

           {/*} <section className="tf-section project-info">
                <div className="container"> 
                    <div className="row">
                        <div className="col-md-12">
                            <form action="contact/contact-process.php" className="form-contact">
                                <div className="project-info-form">
                                    <h6 className="title">Leave a message</h6>
                                    <div className="form-inner">
                                        <fieldset>
                                            <label >
                                                Full name
                                            </label>
                                            <input type="text" id="name" placeholder="Enter the name of your project" required />
                                        </fieldset>
                                        <fieldset>
                                            <label >
                                                Email address
                                            </label>
                                            <input type="email" id="email" placeholder="Your email" required />
                                        </fieldset>
                                        <fieldset>
                                            <label >
                                                Phone
                                            </label>
                                            <input type="number" id="phone" placeholder="Your phone" required />
                                        </fieldset>
                                        <fieldset>
                                            <label htmlFor="message">
                                                Mesage
                                            </label>
                                            <textarea id="message" placeholder="Tell us about the project you wan to launch" rows="5" tabIndex="4" name="message" className="message"  required></textarea>
                                        </fieldset> 
                                    </div>
                                </div> 

                                <div className="wrap-btn">
                                    <button type="submit" className="tf-button style1">
                                        Send mesage
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            {<CTA />*/}
            
        </div>
    );
}

export default Contact;