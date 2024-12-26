import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import dataPartner from '../../assets/fake-data/data-partner';

function Partner(props) {
    const { data } = props;

    const [dataTitle] = useState({
        title: 'Our Partners',
    });

    const subheadings = ['Subheading 1', 'Subheading 2', 'Subheading 3'];

    // Divide the data into separate arrays for each subheading
    const partnersPerSubheading = [
        data.slice(0, 4),  // First 5 partners for Subheading 1
        data.slice(3, 10), // Next 5 partners for Subheading 2
        data.slice(10, 15) // Next 5 partners for Subheading 3
    ];

    return (
        <section className="tf-section tf_partner">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="tf-title" data-aos="fade-up" data-aos-duration="800">
                            <h2 className="title">
                                {dataTitle.title}
                            </h2>
                        </div>
                    </div>
                    {subheadings.map((subheading, index) => (
                        <div className="col-md-12" key={index}>
                            <div className="tf-subtitle" data-aos="fade-up" data-aos-duration="800">
                                <h3 className="subtitle">
                                    {subheading}
                                </h3>
                            </div>
                            <div className="partner-wrapper" data-aos="fade-up" data-aos-duration="800">
                                {partnersPerSubheading[index].map(partner => (
                                    <Link key={partner.id} to="/home_v2" className="image">
                                        <img src={partner.img} alt="" />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Partner;