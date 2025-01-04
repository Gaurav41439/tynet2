import React from 'react';

import PageTitle from '../components/pagetitle';
import CTA from '../components/cta/cta_v2';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


function ProjectDetails(props) {

   
       const location = useLocation();
       const blogData = location.state?.blogData;

    return (
        <div className='inner-page project-grid-5'>
            {<PageTitle title='Project Details' />}

            <section className="tf-section details">
        <div className="container">
            <div className="row"> 
               
                <div className="sidebar" data-aos="fade-left" data-aos-duration="1200" data-aos-delay="200"> 
                    <div className="prodect-content">
                       
                         <h4 className="title">{blogData.title}</h4> {/* title */}
                        
                        <div className="spacing"></div>
                        <div className="content-inner">
                            
                            <div className="content-post">
                            <p style={{ 
                                color: '#ffffff',
                                fontWeight: 'bold',
                                marginBottom: '28px',
                                fontSize: '17px',
                                lineHeight: 1.4 
                            }}>
                                {blogData.domain}
                            </p>

                                <h5 className="title-st">Supporting Mission</h5> 
                                
                                <p>{blogData.supportingMission}{/*Supporting Mission*/}
                                For fully immersive vxpressions, creating a sense that avatars are making eye contact.</p> 
                                <h5 className="title-st">Problem Statement</h5> 
                                <p>{blogData.problemStatement}</p> 
                                <h5 className="title-st">Objective</h5> 
                                {blogData.objective.map((obj, index) => (
                                <p key={index} className="mb14">
                                    -{obj}
                                </p>
                            ))}
                                 
                                <h5 className="title-st">Expected Impact</h5> 
                                {blogData.expectedImpact.map((obj, index) => (
                                <p key={index} className="mb14">
                                    -{obj}
                                </p>
                            ))}
                                <div className="spacing mg28"></div>
                               
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

export default ProjectDetails;