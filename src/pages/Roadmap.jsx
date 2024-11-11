import React from 'react';

import PageTitle from '../components/pagetitle';
import CTA from '../components/cta/cta_v2';

import icon from '../assets/images/common/down.svg'




function Roadmap(props) {
    return (
        <div className='inner-page'>
            {<PageTitle title='RoadMap' />}

            <section id='roadmap' className="tf-section roadmap">
        <div className="container">
            <div className="row"> 

            <div className="col-md-12">
                            <div className="tf-title mb40" data-aos="fade-up" data-aos-duration="800">
                                <h2 className="title">
                                    Roadmap
                                </h2>
                            </div>
                        </div>
                <div className="col-md-12"> 
                    <div className="roadmap-wrapper-style2" data-aos="fade-up" data-aos-duration="1200">
                        <div className="left">
                            <div className="roadmap-box-style active">
                                <div className="icon">
                                    <img src={icon} alt="" />
                                </div>
                                <div className="content">
                                    <h6 className="date">November 21, 2024</h6>
                                    <ul>
                                        <li>Round 1: Online </li>
                                        <li>PPt Submission</li>
                                        <li>Registration Start Date</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="roadmap-box-style active">
                                <div className="icon">
                                    <img src={icon} alt="" />
                                </div>
                                <div className="content">
                                    <h6 className="date">December 11-15, 2024</h6>
                                    <ul>
                                        <li>Round 1 : Evalution</li>
                                        <li>Announcement of Finalist</li>
                                        
                                    </ul>
                                </div>
                            </div>

                    
                        </div>
                        <div className="right">
                            <div className="roadmap-box-style active">
                                <div className="icon">
                                    <img src={icon} alt="" />
                                </div>
                                <div className="content">
                                    <h6 className="date"> December 10, 2024</h6>
                                    <ul>
                                        <li>Round 1: Online</li>
                                        <li>PPT Submission Deadline</li>

                                    </ul>
                                </div>
                            </div>
                            <div className="roadmap-box-style active">
                                <div className="icon">
                                    <img src={icon} alt="" />
                                </div>
                                <div className="content">
                                    <h6 className="date">January 10, 2025</h6>
                                    <ul>
                                        <li>Round 2: Offline</li>
                                        <li>24 hr Hackathon Kickoff</li>
                                    </ul>
                                </div>
                            </div>
                         
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    </section>
            
        </div>
    );
}

export default Roadmap;