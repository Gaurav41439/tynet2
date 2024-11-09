import React from 'react';

import PageTitle from '../components/pagetitle';
import CTA from '../components/cta/cta_v2';
import { Link } from 'react-router-dom';

import data from '../assets/fake-data/data-blog'



function BlogList(props) {
    return (
        <div className='inner-page'>
            {<PageTitle title='Blog List' />}

            <section className="tf-section tf-blog pt60">
        <div className="container">
            <div className="row"> 
                <div className="side-bar">
                    {
                        data.slice(9,19).map(item => (
                            <div key={item.id} className="grid-box-style2" data-aos="fade-up" data-aos-duration="800">
                                <div className="image">
                                    <img src={item.img} alt="" />
                                </div>
                                <div className="content">
                                    <Link to="/blog_details" className="tag">{item.cate}</Link>
                                    <h5 className="title"><Link to="/blog_details">{item.heading}</Link></h5>
                                    <p>{item.text}</p>
                                </div>
                                <Link to="/blog_details" className="tf-button style1">
                                Read more
                                </Link>
                            </div>
                        ))
                    }

                    <ul className="panigation justify-content-start" data-aos="fade-up" data-aos-duration="800">
                        <li>
                            <Link to="#" className="ml0">
                                <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.5 1L1.5 6L6.5 11" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </Link>
                        </li>
                        <li>
                            <Link to="#" className="active">
                                1
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                2
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                3
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.5 1L6.5 6L1.5 11" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </Link>
                        </li>
                    </ul>
                </div> 
                <article className="article">
                    <form action="#" className="form-seach mb33">
                        <input type="text" placeholder="Search..." />
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.0008 18.9998L13.8038 13.8028M13.8038 13.8028C15.2104 12.3962 16.0006 10.4885 16.0006 8.49931C16.0006 6.51011 15.2104 4.60238 13.8038 3.19581C12.3972 1.78923 10.4895 0.999023 8.50028 0.999023C6.51108 0.999023 4.60336 1.78923 3.19678 3.19581C1.79021 4.60238 1 6.51011 1 8.49931C1 10.4885 1.79021 12.3962 3.19678 13.8028C4.60336 15.2094 6.51108 15.9996 8.50028 15.9996C10.4895 15.9996 12.3972 15.2094 13.8038 13.8028V13.8028Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>                            
                    </form>
                    <div className="widget">
                        <h6 className="widget-title-st2">
                            Categories
                        </h6>
                        <ul className="widget-category">
                            <li>
                                <Link to="/blog_details">Metaverse <span>(18)</span></Link>
                            </li>
                            <li>
                                <Link to="/blog_details">Web 3.0 <span>(57)</span></Link>
                            </li>
                            <li>
                                <Link to="/blog_details">Farming <span>(5)</span></Link>
                            </li>
                            <li>
                                <Link to="/blog_details">IGOs <span>(9)</span></Link>
                            </li>
                            <li>
                                <Link to="/blog_details">Launchpad <span>(3)</span></Link>
                            </li>
                            <li>
                                <Link to="/blog_details">Staking <span>(81)</span></Link>
                            </li>
                            <li>
                                <Link to="/blog_details">Crypto Trade <span>(42)</span></Link>
                            </li>
                        </ul>
                    </div>

                    <div className="widget mb33">
                        <h6 className="widget-title-st2">
                            Recent Posts
                        </h6>
                        <ul className="widget-recenpost">
                            <li>
                                <div className="recent-posts">
                                    <div className="image">
                                        <img src={require ("../assets/images/post/post_20.png")} alt="" />
                                    </div>
                                    <div className="content">
                                        <Link to="/blog_details" className="date">
                                            <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M2.9375 1.25V2.5625M9.0625 1.25V2.5625M0.75 10.4375V3.875C0.75 3.5269 0.888281 3.19306 1.13442 2.94692C1.38056 2.70078 1.7144 2.5625 2.0625 2.5625H9.9375C10.2856 2.5625 10.6194 2.70078 10.8656 2.94692C11.1117 3.19306 11.25 3.5269 11.25 3.875V10.4375M0.75 10.4375C0.75 10.7856 0.888281 11.1194 1.13442 11.3656C1.38056 11.6117 1.7144 11.75 2.0625 11.75H9.9375C10.2856 11.75 10.6194 11.6117 10.8656 11.3656C11.1117 11.1194 11.25 10.7856 11.25 10.4375M0.75 10.4375V6.0625C0.75 5.7144 0.888281 5.38056 1.13442 5.13442C1.38056 4.88828 1.7144 4.75 2.0625 4.75H9.9375C10.2856 4.75 10.6194 4.88828 10.8656 5.13442C11.1117 5.38056 11.25 5.7144 11.25 6.0625V10.4375" stroke="#798DA3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                </svg>                                                
                                            <span>  February 18, 2022</span>
                                        </Link>
                                        <Link to="/blog_details" className="title">Meta Is Still Betting on a VR Revolution That May Never Come</Link>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="recent-posts">
                                    <div className="image">
                                        <img src={require ("../assets/images/post/post_21.png")} alt="" />
                                    </div>
                                    <div className="content">
                                        <Link to="/blog_details" className="date">
                                            <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M2.9375 1.25V2.5625M9.0625 1.25V2.5625M0.75 10.4375V3.875C0.75 3.5269 0.888281 3.19306 1.13442 2.94692C1.38056 2.70078 1.7144 2.5625 2.0625 2.5625H9.9375C10.2856 2.5625 10.6194 2.70078 10.8656 2.94692C11.1117 3.19306 11.25 3.5269 11.25 3.875V10.4375M0.75 10.4375C0.75 10.7856 0.888281 11.1194 1.13442 11.3656C1.38056 11.6117 1.7144 11.75 2.0625 11.75H9.9375C10.2856 11.75 10.6194 11.6117 10.8656 11.3656C11.1117 11.1194 11.25 10.7856 11.25 10.4375M0.75 10.4375V6.0625C0.75 5.7144 0.888281 5.38056 1.13442 5.13442C1.38056 4.88828 1.7144 4.75 2.0625 4.75H9.9375C10.2856 4.75 10.6194 4.88828 10.8656 5.13442C11.1117 5.38056 11.25 5.7144 11.25 6.0625V10.4375" stroke="#798DA3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                </svg>                                                
                                            <span>  February 18, 2022</span>
                                        </Link>
                                        <Link to="/blog_details" className="title">Meta’s VR Headset Harvests Personal Data Right Off Your...</Link>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="recent-posts">
                                    <div className="image">
                                        <img src={require ("../assets/images/post/post_22.png")} alt="" />
                                    </div>
                                    <div className="content">
                                        <Link to="/blog_details" className="date">
                                            <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M2.9375 1.25V2.5625M9.0625 1.25V2.5625M0.75 10.4375V3.875C0.75 3.5269 0.888281 3.19306 1.13442 2.94692C1.38056 2.70078 1.7144 2.5625 2.0625 2.5625H9.9375C10.2856 2.5625 10.6194 2.70078 10.8656 2.94692C11.1117 3.19306 11.25 3.5269 11.25 3.875V10.4375M0.75 10.4375C0.75 10.7856 0.888281 11.1194 1.13442 11.3656C1.38056 11.6117 1.7144 11.75 2.0625 11.75H9.9375C10.2856 11.75 10.6194 11.6117 10.8656 11.3656C11.1117 11.1194 11.25 10.7856 11.25 10.4375M0.75 10.4375V6.0625C0.75 5.7144 0.888281 5.38056 1.13442 5.13442C1.38056 4.88828 1.7144 4.75 2.0625 4.75H9.9375C10.2856 4.75 10.6194 4.88828 10.8656 5.13442C11.1117 5.38056 11.25 5.7144 11.25 6.0625V10.4375" stroke="#798DA3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                </svg>                                                
                                            <span>  February 18, 2022</span>
                                        </Link>
                                        <Link to="/blog_details" className="title">VR Still Stinks Because It Doesn’t Smell</Link>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="recent-posts">
                                    <div className="image">
                                        <img src={require ("../assets/images/post/post_23.png")} alt="" />
                                    </div>
                                    <div className="content">
                                        <Link to="/blog_details" className="date">
                                            <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M2.9375 1.25V2.5625M9.0625 1.25V2.5625M0.75 10.4375V3.875C0.75 3.5269 0.888281 3.19306 1.13442 2.94692C1.38056 2.70078 1.7144 2.5625 2.0625 2.5625H9.9375C10.2856 2.5625 10.6194 2.70078 10.8656 2.94692C11.1117 3.19306 11.25 3.5269 11.25 3.875V10.4375M0.75 10.4375C0.75 10.7856 0.888281 11.1194 1.13442 11.3656C1.38056 11.6117 1.7144 11.75 2.0625 11.75H9.9375C10.2856 11.75 10.6194 11.6117 10.8656 11.3656C11.1117 11.1194 11.25 10.7856 11.25 10.4375M0.75 10.4375V6.0625C0.75 5.7144 0.888281 5.38056 1.13442 5.13442C1.38056 4.88828 1.7144 4.75 2.0625 4.75H9.9375C10.2856 4.75 10.6194 4.88828 10.8656 5.13442C11.1117 5.38056 11.25 5.7144 11.25 6.0625V10.4375" stroke="#798DA3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                </svg>                                                
                                            <span>  February 18, 2022</span>
                                        </Link>
                                        <Link to="/blog_details" className="title">How China Threatens to Splinter the Metaverse</Link>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="recent-posts">
                                    <div className="image">
                                        <img src={require ("../assets/images/post/post_24.png")} alt="" />
                                    </div>
                                    <div className="content">
                                        <Link to="/blog_details" className="date">
                                            <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M2.9375 1.25V2.5625M9.0625 1.25V2.5625M0.75 10.4375V3.875C0.75 3.5269 0.888281 3.19306 1.13442 2.94692C1.38056 2.70078 1.7144 2.5625 2.0625 2.5625H9.9375C10.2856 2.5625 10.6194 2.70078 10.8656 2.94692C11.1117 3.19306 11.25 3.5269 11.25 3.875V10.4375M0.75 10.4375C0.75 10.7856 0.888281 11.1194 1.13442 11.3656C1.38056 11.6117 1.7144 11.75 2.0625 11.75H9.9375C10.2856 11.75 10.6194 11.6117 10.8656 11.3656C11.1117 11.1194 11.25 10.7856 11.25 10.4375M0.75 10.4375V6.0625C0.75 5.7144 0.888281 5.38056 1.13442 5.13442C1.38056 4.88828 1.7144 4.75 2.0625 4.75H9.9375C10.2856 4.75 10.6194 4.88828 10.8656 5.13442C11.1117 5.38056 11.25 5.7144 11.25 6.0625V10.4375" stroke="#798DA3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                </svg>
                                            <span>  February 18, 2022</span>
                                        </Link>
                                        <Link to="/blog_details" className="title">It's Not Too Late to Save the Metaverse</Link>
                                    </div>
                                </div>
                            </li> 
                        </ul>
                    </div>

                    <div className="widget mb22">
                        <h6 className="widget-title-st2">
                            Popular Tags
                        </h6>
                        <ul className="widget-tag mr-10">
                            <li> 
                                <Link to="/blog_details">NFTs</Link>
                            </li> 
                            <li> 
                                <Link to="/blog_details">Blockchain</Link>
                            </li> 
                            <li> 
                                <Link to="/blog_details">Coin</Link>
                            </li> 
                            <li> 
                                <Link to="/blog_details">ICO</Link>
                            </li> 
                            <li> 
                                <Link to="/blog_details">cryptocurrency</Link>
                            </li> 
                            <li> 
                                <Link to="/blog_details">Ttoken</Link>
                            </li> 
                            <li> 
                                <Link to="/blog_details">Digital</Link>
                            </li> 
                        </ul>
                    </div>

                   <div className="img-box">
                        <div className="overlay"></div>
                        <h3>Launch <br />
                            on Risebot</h3>
                        <p>Full support in project incubation</p>
                        <div className="wrap-btn">
                            <Link to="/submit_igo" className="tf-button style2">
                                Apply now
                            </Link>
                        </div>
                   </div>
                </article>
            </div>
        </div>
    </section>
          

            {<CTA />}
            
        </div>
    );
}

export default BlogList;