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