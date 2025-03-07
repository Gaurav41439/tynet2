import React from 'react';

import PageTitle from '../components/pagetitle';
import CTA from '../components/cta/cta_v2';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import data from '../assets/fake-data/data-blog'

function BlogGrid(props) {

    const navigate = useNavigate();

    const handleBlogClick = (item) => {
        navigate('/blog_details', { state: { blogData: item } });
    };

    return (
        <div className='inner-page'>
            {<PageTitle title='Blog Grid' />}
            <div className="col-md-12">
                                <div className="tf-title" data-aos="fade-up" data-aos-duration="800">
                                    <h2 className="title">
                                        Problem Statements
                                    </h2>
                                </div>
                            </div>

            <section className="tf-section tf-blog pt60">
        <div className="container">
            <div className="row"> 

                {
                    data.slice(0,9).map(item => (
                        <div key={item.id} className="col-lg-4 col-md-12">
                            <div className="grid-box">
                            <div className="image" style={{ width: '356px', height: '300px', overflow: 'hidden' }}>
                            <img 
                                src={item.img} 
                                alt="" 
                                style={{ 
                                    width: '100%', 
                                    height: '100%', 
                                    objectFit: 'cover',
                                    filter: 'grayscale(70%)'  // Add grayscale filter
                                }} 
                            />
                        </div>
                        <div className="content">
                                <Link 
                                    to="/problem_statement"
                                    state={{ blogData: item }}
                                    className="tag"
                                >
                                    {item.domain}
                                </Link>
                                <h5 className="title">
                                    <Link 
                                        to="/problem_statement"
                                        state={{ blogData: item }}
                                    >
                                        {item.title}
                                    </Link>
                                </h5>
                                <p>{item.problemStatement}</p>
                            </div>
                            <Link 
                                to="/problem_statement"
                                state={{ blogData: item }}
                                className="tf-button style1"
                            >
                                Read more
                            </Link>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    </section>
            
        </div>
    );
}

export default BlogGrid;