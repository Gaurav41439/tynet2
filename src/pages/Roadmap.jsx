import React from 'react';

import PageTitle from '../components/pagetitle';
import CTA from '../components/cta/cta_v2';

import icon from '../assets/images/common/down.svg'




function Roadmap(props) {
    return (
        <div className='inner-page'>
            {<PageTitle title='RoadMap' />}

            <section className="tf-section roadmap">
        <div className="container">
            <div className="row"> 
                <div className="col-md-12"> 
                    <div className="roadmap-wrapper-style2" data-aos="fade-up" data-aos-duration="1200">
                        <div className="left">
                            <div className="roadmap-box-style active">
                                <div className="icon">
                                    <img src={icon} alt="" />
                                </div>
                                <div className="content">
                                    <h6 className="date">April 16, 2022</h6>
                                    <ul>
                                        <li>Cras molestie ullamcorper augue nec pulvinar</li>
                                        <li>Nam mollis sapien ut sapien gravida sollicitudin</li>
                                        <li>Mauris vel nisl quis dolor accumsan luctus</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="roadmap-box-style active">
                                <div className="icon">
                                    <img src={icon} alt="" />
                                </div>
                                <div className="content">
                                    <h6 className="date">April 16, 2022</h6>
                                    <ul>
                                        <li>Cras molestie ullamcorper augue nec pulvinar</li>
                                        <li>Nam mollis sapien ut sapien gravida sollicitudin</li>
                                        <li>Mauris vel nisl quis dolor accumsan luctus</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="roadmap-box-style">
                                <div className="icon">
                                    <img src={icon} alt="" />
                                </div>
                                <div className="content">
                                    <h6 className="date">April 16, 2022</h6>
                                    <ul>
                                        <li>Cras molestie ullamcorper augue nec pulvinar</li>
                                        <li>Nam mollis sapien ut sapien gravida sollicitudin</li>
                                        <li>Mauris vel nisl quis dolor accumsan luctus</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="roadmap-box-style">
                                <div className="icon">
                                    <img src={icon} alt="" />
                                </div>
                                <div className="content">
                                    <h6 className="date">April 16, 2022</h6>
                                    <ul>
                                        <li>Cras molestie ullamcorper augue nec pulvinar</li>
                                        <li>Nam mollis sapien ut sapien gravida sollicitudin</li>
                                        <li>Mauris vel nisl quis dolor accumsan luctus</li>
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
                                    <h6 className="date">April 16, 2022</h6>
                                    <ul>
                                        <li>Cras molestie ullamcorper augue nec pulvinar</li>
                                        <li>Nam mollis sapien ut sapien gravida sollicitudin</li>
                                        <li>Mauris vel nisl quis dolor accumsan luctus</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="roadmap-box-style active">
                                <div className="icon">
                                    <img src={icon} alt="" />
                                </div>
                                <div className="content">
                                    <h6 className="date">April 16, 2022</h6>
                                    <ul>
                                        <li>Cras molestie ullamcorper augue nec pulvinar</li>
                                        <li>Nam mollis sapien ut sapien gravida sollicitudin</li>
                                        <li>Mauris vel nisl quis dolor accumsan luctus</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="roadmap-box-style">
                                <div className="icon">
                                    <img src={icon} alt="" />
                                </div>
                                <div className="content">
                                    <h6 className="date">April 16, 2022</h6>
                                    <ul>
                                        <li>Cras molestie ullamcorper augue nec pulvinar</li>
                                        <li>Nam mollis sapien ut sapien gravida sollicitudin</li>
                                        <li>Mauris vel nisl quis dolor accumsan luctus</li>
                                    </ul>
                                </div>
                            </div> 
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

export default Roadmap;