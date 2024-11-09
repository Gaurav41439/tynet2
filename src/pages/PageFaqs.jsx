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


            <section className="tf-section tf-faq">
        <div className="container">
            <div className="row"> 
                <div className="col-md-12">
                    <div className="tf-title center mb40" data-aos="fade-up" data-aos-duration="800">
                        <h2 className="title">
                            hi we're here to help you
                        </h2>
                    </div>
                </div>
                <div className="col-md-12">
                    <form action="#" className="form-seach mb20">
                        <input type="text" placeholder="All access" />
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.0008 18.9998L13.8038 13.8028M13.8038 13.8028C15.2104 12.3962 16.0006 10.4885 16.0006 8.49931C16.0006 6.51011 15.2104 4.60238 13.8038 3.19581C12.3972 1.78923 10.4895 0.999023 8.50028 0.999023C6.51108 0.999023 4.60336 1.78923 3.19678 3.19581C1.79021 4.60238 1 6.51011 1 8.49931C1 10.4885 1.79021 12.3962 3.19678 13.8028C4.60336 15.2094 6.51108 15.9996 8.50028 15.9996C10.4895 15.9996 12.3972 15.2094 13.8038 13.8028V13.8028Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>                            
                    </form>
                    <p className="text-center">Find answers to frequently asked questions.</p>
                </div> 
            </div>
        </div>
    </section>

        {<Faq2 />}
        
        {<Faqs data={dataFaq} />} 

    {/* <section className="tf-section FAQs">
        <div className="container ">
            <div className="row"> 
                <div className="col-md-12">
                    <div className="flat-accordion aos-init aos-animate" data-aos="fade-up" data-aos-duration="800">
                        <div className="flat-toggle">
                            <div className="h7 toggle-title">
                                <span className="icon-Icon">
                                </span>
                                <span>What is the metaverse?</span>
                            </div>
                            <p className="toggle-content" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus eleifend egestas. Duis eget dictum purus. Fusce est mi, imperdiet porta neque malesuada, blandit scelerisque lectus. Maecenas vel lobortis risus. Donec ornare urna quis libero euismod, ac fermentum diam blandit. Nunc dapibus tempor lacus, vel lacinia enim efficitur eu</p>
                        </div>
                        <div className="flat-toggle active">
                            <div className="h7 toggle-title active">
                                <span className="icon-Icon">
                                </span>
                                <span>How to access the metaverse?</span>
                            </div>
                            <p className="toggle-content" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus eleifend egestas. Duis eget dictum purus. Fusce est mi, imperdiet porta neque malesuada, blandit scelerisque lectus. Maecenas vel lobortis risus. Donec ornare urna quis libero euismod, ac fermentum diam blandit. Nunc dapibus tempor lacus, vel lacinia enim efficitur eu</p>
                        </div>
                        <div className="flat-toggle">
                            <div className="h7 toggle-title">
                                <span className="icon-Icon">
                                </span>
                                <span>How do you make purchases in the metaverse?</span>
                            </div>
                            <p className="toggle-content" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus eleifend egestas. Duis eget dictum purus. Fusce est mi, imperdiet porta neque malesuada, blandit scelerisque lectus. Maecenas vel lobortis risus. Donec ornare urna quis libero euismod, ac fermentum diam blandit. Nunc dapibus tempor lacus, vel lacinia enim efficitur eu</p>
                        </div>
                        <div className="flat-toggle">
                            <div className="h7 toggle-title">
                                <span className="icon-Icon">
                                </span>
                                <span>Is the metaverse fun?</span>
                            </div>
                            <p className="toggle-content" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus eleifend egestas. Duis eget dictum purus. Fusce est mi, imperdiet porta neque malesuada, blandit scelerisque lectus. Maecenas vel lobortis risus. Donec ornare urna quis libero euismod, ac fermentum diam blandit. Nunc dapibus tempor lacus, vel lacinia enim efficitur eu</p>
                        </div>
                        <div className="flat-toggle">
                            <div className="h7 toggle-title">
                                <span className="icon-Icon">
                                </span>
                                <span>How do I find things to actually do in the metaverse?</span>
                            </div>
                            <p className="toggle-content" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus eleifend egestas. Duis eget dictum purus. Fusce est mi, imperdiet porta neque malesuada, blandit scelerisque lectus. Maecenas vel lobortis risus. Donec ornare urna quis libero euismod, ac fermentum diam blandit. Nunc dapibus tempor lacus, vel lacinia enim efficitur eu</p>
                        </div>
                        <div className="flat-toggle">
                            <div className="h7 toggle-title">
                                <span className="icon-Icon">
                                </span>
                                <span>What is ownership in the metaverse?</span>
                            </div>
                            <p className="toggle-content" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus eleifend egestas. Duis eget dictum purus. Fusce est mi, imperdiet porta neque malesuada, blandit scelerisque lectus. Maecenas vel lobortis risus. Donec ornare urna quis libero euismod, ac fermentum diam blandit. Nunc dapibus tempor lacus, vel lacinia enim efficitur eu</p>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    </section>  */}

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

            {<CTA />}
            
        </div>
    );
}

export default PageFaqs;