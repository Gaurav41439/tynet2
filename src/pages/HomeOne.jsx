import React from 'react';
import '../scss/component/_section.scss'; 
import '../scss/component/_box.scss'; 
import '../scss/component/_tf-section.scss'; 
import '../scss/component/_reponsive.scss'; 
import Banner from '../components/banner/banner_v1'; 
import dataBanner from '../assets/fake-data/data-banner';
import Project from '../components/project/project_v1';  
import dataProject from '../assets/fake-data/data-project';
import Project3 from '../components/project/project_v3';  
import icon from '../assets/images/common/down.svg'
import data from '../assets/fake-data/data-shortlisted'
import Team from '../components/team';
import Partner from '../components/partner';
import dataPartner from '../assets/fake-data/data-partner';
import CTA from '../components/cta';
import dataTeam from '../assets/fake-data/data-team';

function HomeOne(props) {
 
    return (
        <div className='header-fixed main home1 counter-scroll'>

           {<Banner data={dataBanner} />}
           {<Project data={dataProject}/>}
           
           {<Project3 data={dataProject}/>}


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
                                <h6 className="date">December 14-15, 2024</h6>
                                <ul>
                                    <li>Round 1 : Evalution</li>
                                    <li>Announcement of Finalist</li>
                                </ul>
                            </div>
                        </div>

                        {/* New Block */}
                        <div className="roadmap-box-style active">
                            <div className="icon">
                                <img src={icon} alt="" />
                            </div>
                            <div className="content">
                                <h6 className="date">January 11, 2025</h6>
                                <ul>
                                    <li>Final Judging</li>
                                    <li>Valedictory Ceremony</li>
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
                                <h6 className="date">December 13, 2024</h6>
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


    {/* <div className="roadmap-box-style active">
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
                            </div> */}


            { <Partner data={dataPartner} /> }

            {<Team data={dataTeam} />}

            <section className="tf-section project_2">
                <div className="container">
                    <div className="row"> 
                        <div className="col-md-12">
                            <div className="tf-title left mb40" data-aos="fade-up" data-aos-duration="800">
                                <h2 className="title">
                                    Shortlisted Teams
                                </h2>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="project-box-style3_wrapper">

                                {
                                    data.map(item => (
                                        <div key={item.id} className="project-box-style3" data-aos="fade-in" data-aos-duration="800">
                                            <div className="header_project">
                                                <div className="image">
                                                    <img className="mask"  src={require ("../assets/images/teamicon.png")} alt="" />
                                                   
                                                </div>
                                                <h5 className="heading">{item.title}</h5>
                                            </div>
                                            <div className="content">
                                                <div className="td td1">
                                                    <p>Team Leader</p>
                                                    <p >{item.teamLeader}</p>
                                                </div>
                                                <div className="td td2">
                                                    <p>Team Member</p>
                                                    <p >{item.teammember1}</p>
                                                </div>
                                                {item.teammember2 && (
                                                    <div className="td td2">
                                                        <p>Team Member</p>
                                                        <p>{item.teammember2}</p>
                                                    </div>
                                                )}
                                                {item.teammember3 && (
                                                    <div className="td td2">
                                                        <p>Team Member</p>
                                                        <p>{item.teammember3}</p>
                                                    </div>
                                                )}
                                               
                                            </div>
                                        </div>
                                    ))
                                }
                                
                                

                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>

           

            <CTA />






        </div>
    );
}

export default HomeOne;