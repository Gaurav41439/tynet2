import React from 'react';
import { Link } from 'react-router-dom';


function CTA2(props) {
    return (
        <section className="tf-section partner_CTA">
                <div className="overlay">
                    <img src={require ("../../assets/images/backgroup/bg_partner.jpg")} alt="" />
         
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
                                <img className="img_main" src={require ("../../assets/images/common/img_partner.png")} alt="" />
                                <img className="icon icon_1" src={require ("../../assets/images/common/icon_partner_1.png")} alt="" />
                                <img className="icon icon_2" src={require ("../../assets/images/common/icon_partner_2.png")} alt="" />
                                <img className="icon icon_3" src={require ("../../assets/images/common/icon_partner_3.png")} alt="" />
                            </div>
                        </div> 
                    </div>
                </div>
            </section>
    );
}

export default CTA2;