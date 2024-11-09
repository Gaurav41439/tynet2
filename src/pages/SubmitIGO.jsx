import React from 'react';

import PageTitle from '../components/pagetitle';
import CTA from '../components/cta';
import Faqs from '../components/faqs';
import dataFaq from '../assets/fake-data/data-faqs';
import Partner2 from '../components/partner/index2';
import dataPartner from '../assets/fake-data/data-partner';
import { Link } from 'react-router-dom';


function SubmitIGO(props) {
    return (
        <div className='inner-page home2'>
            {<PageTitle title='Submit IGO on chain' />}

            <section className="tf-section project-info pt60 pb60">
                <div className="container"> 
                    <div className="row">
                        <div className="col-md-12">
                            <form action="#">
                                <div className="project-info-form">
                                    <h6 className="title">Project infomation</h6>
                                    <div className="form-inner">
                                        <fieldset>
                                            <label >
                                                Project name
                                            </label>
                                            <input type="text" placeholder="Enter the name of your project" required />
                                        </fieldset>
                                        <fieldset>
                                            <label >
                                                Email address
                                            </label>
                                            <input type="email" placeholder="Your email" required />
                                        </fieldset>
                                        <fieldset>
                                            <label htmlFor="message">
                                                Project brief
                                            </label>
                                            <textarea placeholder="Tell us about the project you wan to launch" rows="5" tabIndex="4" name="message" className="message" id="message" required />
                                        </fieldset>
                                        <fieldset>
                                            <label >
                                                Target raise
                                            </label>
                                            <input type="text" placeholder="How much are you planning on raising on the IGO?" required />
                                        </fieldset>
                                        <fieldset>
                                            <label >
                                                Project website / Link to whipaper
                                            </label>
                                            <input type="text" placeholder="Enter the link" required />
                                        </fieldset>
                                    </div>
                                </div>
                
                                <div className="project-info-form check-radio">
                                    <h6 className="title mb30">Blockchain/Platform</h6>
                                    <div className="form-inner">
                                        <ul className="list">
                                            <li className="list__item">
                                                <input type="radio" className="radio-btn" name="choice" id="a-opt" />
                                                <label htmlFor="a-opt" className="label">Binance Smart Chain</label>
                                            </li>
                                            
                                            <li className="list__item">
                                                <input type="radio" className="radio-btn" name="choice" id="b-opt" />
                                                <label htmlFor="b-opt" className="label">Solana</label>
                                            </li>
                                            
                                            <li className="list__item">
                                                <input type="radio" className="radio-btn" name="choice" id="c-opt" />
                                                <label htmlFor="c-opt" className="label">Ethereum</label>
                                            </li>
                                            
                                            <li className="list__item">
                                                <input type="radio" className="radio-btn" name="choice" id="d-opt" />
                                                <label htmlFor="d-opt" className="label">Polkadot</label>
                                            </li>
                
                                            <li className="list__item">
                                                <input type="radio" className="radio-btn" name="choice" id="e-opt" />
                                                <label htmlFor="e-opt" className="label">Polygon (Matic)</label>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                
                                <div className="project-info-form check-radio">
                                    <h6 className="title mb30">Project status</h6>
                                    <div className="form-inner">
                                        <ul className="list w50">
                                            <li className="list__item">
                                                <input type="radio" className="radio-btn" name="choice" id="1-opt" />
                                                <label htmlFor="1-opt" className="label">Just an initial idea</label>
                                            </li>
                                            
                                            <li className="list__item">
                                                <input type="radio" className="radio-btn" name="choice" id="2-opt" />
                                                <label htmlFor="2-opt" className="label">Idea with White Paper</label>
                                            </li>
                                            
                                            <li className="list__item">
                                                <input type="radio" className="radio-btn" name="choice" id="3-opt" />
                                                <label htmlFor="3-opt" className="label">In early development</label>
                                            </li>
                                            
                                            <li className="list__item">
                                                <input type="radio" className="radio-btn" name="choice" id="4-opt" />
                                                <label htmlFor="4-opt" className="label">Ready to launch</label>
                                            </li> 
                                        </ul>
                                    </div>
                                </div>
                
                                <div className="project-info-form check-radio">
                                    <h6 className="title mb30">Have you already raised funds?</h6>
                                    <div className="form-inner">
                                        <ul className="list w50">
                                            <li className="list__item">
                                                <input type="radio" className="radio-btn" name="choice" id="5-opt" />
                                                <label htmlFor="5-opt" className="label">Yes</label>
                                            </li>
                                            
                                            <li className="list__item">
                                                <input type="radio" className="radio-btn" name="choice" id="6-opt" />
                                                <label htmlFor="6-opt" className="label">No</label>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                
                                <div className="project-info-form check-radio">
                                    <h6 className="title mb30">Is your team Anon or public</h6>
                                    <div className="form-inner">
                                        <ul className="list">
                                            <li className="list__item">
                                                <input type="radio" className="radio-btn" name="choice" id="7-opt" />
                                                <label htmlFor="7-opt" className="label">Anon</label>
                                            </li>
                                            
                                            <li className="list__item">
                                                <input type="radio" className="radio-btn" name="choice" id="8-opt" />
                                                <label htmlFor="8-opt" className="label">Fully Public</label>
                                            </li>
                                            
                                            <li className="list__item">
                                                <input type="radio" className="radio-btn" name="choice" id="9-opt" />
                                                <label htmlFor="9-opt" className="label">mixed</label>
                                            </li> 
                                        </ul>
                                    </div>
                                </div>
                
                                <div className="project-info-form style">
                                    <h6 className="title mb30">Socials media</h6>
                                    <div className="form-inner">
                                        <fieldset>
                                            <label >
                                                Telegram group
                                            </label>
                                            <fieldset>
                                                <input type="text" placeholder="Enter Telegram group link" required />
                                                <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M6.27812 9.12061L6.01345 12.8433C6.39212 12.8433 6.55612 12.6806 6.75279 12.4853L8.52812 10.7886L12.2068 13.4826C12.8815 13.8586 13.3568 13.6606 13.5388 12.8619L15.9535 1.54728L15.9541 1.54661C16.1681 0.549278 15.5935 0.159278 14.9361 0.403945L0.742785 5.83794C-0.225881 6.21394 -0.211215 6.75394 0.578119 6.99861L4.20679 8.12728L12.6355 2.85328C13.0321 2.59061 13.3928 2.73594 13.0961 2.99861L6.27812 9.12061Z" fill="#798DA3"/>
                                                </svg>
                                            </fieldset>
                                        </fieldset>
                                        <fieldset>
                                            <label >
                                                Project twitter
                                            </label>
                                            <fieldset>
                                                <input type="text" placeholder="How much are you planning on raising on the IGO?" required />
                                                <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M16 2.039C15.405 2.3 14.771 2.473 14.11 2.557C14.79 2.151 15.309 1.513 15.553 0.744C14.919 1.122 14.219 1.389 13.473 1.538C12.871 0.897 12.013 0.5 11.077 0.5C9.261 0.5 7.799 1.974 7.799 3.781C7.799 4.041 7.821 4.291 7.875 4.529C5.148 4.396 2.735 3.089 1.114 1.098C0.831 1.589 0.665 2.151 0.665 2.756C0.665 3.892 1.25 4.899 2.122 5.482C1.595 5.472 1.078 5.319 0.64 5.078C0.64 5.088 0.64 5.101 0.64 5.114C0.64 6.708 1.777 8.032 3.268 8.337C3.001 8.41 2.71 8.445 2.408 8.445C2.198 8.445 1.986 8.433 1.787 8.389C2.212 9.688 3.418 10.643 4.852 10.674C3.736 11.547 2.319 12.073 0.785 12.073C0.516 12.073 0.258 12.061 0 12.028C1.453 12.965 3.175 13.5 5.032 13.5C11.068 13.5 14.368 8.5 14.368 4.166C14.368 4.021 14.363 3.881 14.356 3.742C15.007 3.28 15.554 2.703 16 2.039Z" fill="#798DA3"/>
                                                </svg>                                    
                                            </fieldset>
                                        </fieldset> 
                                    </div>
                                </div>

                                <div className="wrap-btn">
                                    <button type="submit" className="tf-button style2">
                                        Submit igo project
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {<Partner2 data={dataPartner} />}

            

            <section className="tf-section partner_CTA">
                <div className="overlay">
                    <img src={require ("../assets/images/backgroup/bg_partner.jpg")} alt="" />
         
                </div>
                <div className="container ">
                    <div className="row align-items-center">
                        <div className="col-lg-8 col-md-12">
                            <div className="tf-title mb0 left" data-aos="fade-up" data-aos-duration="800">
                                <h2 className="title mb8">
                                    The Easiest way of Investing in Blockchain Games, NFTs and Metaverses
                                </h2>
                                <p className="sub">
                                    Lorem ipsum dolor sit amet consectetur
                                </p>
                                <div className="wrap-btn">
                                    <Link to="/submit_igo" className="tf-button style2">
                                        Apply Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <div className="image">
                                <img className="img_main" src={require ("../assets/images/common/img_partner.png")} alt="" />
                                <img className="icon icon_1" src={require ("../assets/images/common/icon_partner_1.png")} alt="" />
                                <img className="icon icon_2" src={require ("../assets/images/common/icon_partner_2.png")} alt="" />
                                <img className="icon icon_3" src={require ("../assets/images/common/icon_partner_3.png")} alt="" />
                            </div>
                        </div> 
                    </div>
                </div>
            </section>

            {<Faqs data={dataFaq} />} 

            {<CTA />}
            
        </div>
    );
}

export default SubmitIGO;