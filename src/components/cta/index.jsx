import React from 'react';

import img from '../../assets/images/imgs/tyn.png'
import { Link } from 'react-router-dom';
import { useState } from 'react';



function CTA(props) {

    const [dataTitle] = useState(
        {
            title: 'Empowering Women in Tech',
            // subtitle: 'Full support in project incubation'
        }
    )
    return (
        <section className="tf-section tf_CTA" style={{ marginTop: '50px' }}>

                <div className="container relative">
                    <div className="overlay">
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="tf-title left mt58" data-aos="fade-up" data-aos-duration="800">
                                <h2 className="title">
                                    {dataTitle.title}
                                </h2>
                                <p className="sub">{dataTitle.subtitle}</p>
                                <div className="wrap-btn">
                                <a href="/" className="tf-button style3" target="_blank" rel="noopener noreferrer">
    Register Now
</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                        <div className="image_cta" data-aos="fade-left" data-aos-duration="1200">
                            <img className="move4" src={img} alt="" />
                        </div>
                        </div>
                    </div>
                </div>
            </section>
    );
}

export default CTA;