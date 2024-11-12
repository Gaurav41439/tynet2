import React from 'react';

import PageTitle from '../components/pagetitle';
import CTA from '../components/cta';
import { Link } from 'react-router-dom';
import Faq2 from '../components/faqs/Faq2';
import Faqs from '../components/faqs';
import dataFaq from '../assets/fake-data/data-faqs';



function PageFaqs(props) {
    return (
        <div className='inner-page'>
            {<PageTitle title='Faqs' />}
        
        {<Faqs data={dataFaq} />} 

    {<section className="tf-section FAQs">
        <div className="container ">
            <div className="row"> 
                <div className="col-md-12">
                    <div className="flat-accordion aos-init aos-animate" data-aos="fade-up" data-aos-duration="800">
                        <div className="flat-toggle">
                            <div className="h7 toggle-title">
                                <span className="icon-Icon">
                                </span>
                                <span>Who can participate in TYNET 2.0?</span>
                            </div>
                            <p className="toggle-content" >TYNET 2.0 is an international, women-centric hackathon. We welcome women passionate about technology from all skill levels and backgrounds to participate. Male allies can join as mentors or volunteers to support the event.</p>
                        </div>
                        <div className="flat-toggle active">
                            <div className="h7 toggle-title active">
                                <span className="icon-Icon">
                                </span>
                                <span>What is the format of TYNET 2.0?</span>
                            </div>
                            <p className="toggle-content" >TYNET 2.0 consists of two rounds. The first round is an online submission round where participants submit their project ideas. Selected teams will then advance to the final, 24-hour offline hackathon held at RAIT.</p>
                        </div>
                        <div className="flat-toggle">
                            <div className="h7 toggle-title">
                                <span className="icon-Icon">
                                </span>
                                <span>How can I register for TYNET 2.0?</span>
                            </div>
                            <p className="toggle-content" >You can register on platforms like Unstop and DevPost. Follow the registration guidelines and submit the required details. Registration is open from 21st November 2024 to 10th December 2024.</p>
                        </div>
                        <div className="flat-toggle">
                            <div className="h7 toggle-title">
                                <span className="icon-Icon">
                                </span>
                                <span>What resources are provided during the hackathon?</span>
                            </div>
                            <p className="toggle-content" >RAIT ACM-W will provide participants with essential event materials, access to mentors, high-speed internet, a comfortable workspace, and refreshments throughout the event.</p>
                        </div>
                        <div className="flat-toggle">
                            <div className="h7 toggle-title">
                                <span className="icon-Icon">
                                </span>
                                <span>Is there a participation fee?</span>
                            </div>
                            <p className="toggle-content" >Round 1 of TYNET 2.0 is completely free. However, if your team is selected for Round 2, a small participation fee will be required to cover event amenities, including meals and refreshments, which will be provided at no additional cost during the 24-hour hackathon.</p>
                        </div>
                        <div className="flat-toggle">
                            <div className="h7 toggle-title">
                                <span className="icon-Icon">
                                </span>
                                <span>Do I need to have a team to register, or can I participate individually?</span>
                            </div>
                            <p className="toggle-content" >To participate in TYNET 2.0, you must register with a team of 2 to 4 members. Individual registrations are not allowed, so please ensure your team is complete before signing up.</p>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    </section>}

    <section className="tf-section questions"> 
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="tf-title" data-aos="fade-up" data-aos-duration="800">
                        <h2 className="title mb20">
                            still have a questions
                        </h2> 
                    </div>
                </div>
                <div className="col-md-12"> 
                    <div className="question-content">
                        <div className="image-wrapper">
                            <div className="image">
                                <img src={require ("../assets/images/common/team_6.png")} alt="" />
                            </div>
                            <div className="image">
                                <img src={require ("../assets/images/common/team_5.png")} alt="" />
                            </div>
                            <div className="image">
                                <img src={require ("../assets/images/common/team_4.png")} alt="" />
                            </div>
                        </div>
                        <p>If you cannot find answer to your question in our faq, you can always contact us. <br className="show-destop" />
                            We will answer to you shortly</p>
                        <div className="wrap-btn justify-content-center">
                            <Link to="/contact" className="tf-button style1">
                                Contact us
                            </Link>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    </section>

           {//<CTA />
           }
            
        </div>
    );
}

export default PageFaqs;