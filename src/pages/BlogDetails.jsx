import React from 'react';

import PageTitle from '../components/pagetitle';
import CTA from '../components/cta/cta_v2';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function BlogDetails() {

    const location = useLocation();
    const blogData = location.state?.blogData;
  
    console.log('Blog Data:', blogData); // Debug log
  
    if (!blogData) {
        return <div>Loading...</div>;
      }

    return (
        <div className='inner-page'>
            {<PageTitle title='Blog Details' />}


            <section className="tf-section tf-blog pt60">
        <div className="container">
            <div className="row"> 
                <div className="side-bar">
                    <div className="post-details">
                        <h4 className="title">{blogData.title}</h4> {/* title */}
                        
                        <div className="spacing"></div>
                        <div className="content-inner">
                            
                            <div className="content-post">
                                <p className="sub-title"> {/*Domain*/}
                                  {blogData.domain}</p>

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

export default BlogDetails;