import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import dataPartner from '../../assets/fake-data/data-partner';

function Partner(props) {
    const { data } = props;

    const [dataTitle] = useState({
        title: 'Our Partners',
    });

    const subheadings = ['Funded by ACM India', 'Powered By', 'Educational Partner','Cybersecurity Partner','Global Connectivity Partner','Media Partner','Community Partner','Grooming Partner','Refreshment Partner'];

    // Divide the data into separate arrays for each subheading
    const partnersPerSubheading = [
        dataPartner.slice(0, 1),  // First 5 partners for Subheading 1
        dataPartner.slice(1,2), // Next 5 partners for Subheading 2
        dataPartner.slice(2, 8), // Next 5 partners for Subheading 3
        dataPartner.slice(8, 12),  // First 5 partners for Subheading 1
        dataPartner.slice(12,13), // Next 5 partners for Subheading 2
        dataPartner.slice(13, 14),
        dataPartner.slice(14, 15),  // First 5 partners for Subheading 1
        dataPartner.slice(15, 16), // Next 5 partners for Subheading 2
        dataPartner.slice(16, 17), // Next 5 partners for Subheading 3
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
    {partnersPerSubheading[index].map((partner, idx) => (
        <div
            key={partner.id} 
            
            className="image"
            style={{
    ...((partner.id === 1 || partner.id === 2 || partner.id === 14) && {
        width: window.innerWidth <= 768 
            ? 'calc((100% - 60px) / 2)' 
            : 'calc((100% - 150px) / 4)'
    })
}}
        >
            <img 
                src={partner.img} 
                alt="" 
                style={
                    partner.id === 1  || partner.id === 14 || partner.id === 4
                    ? { filter: 'brightness(1.5)' } 
                    : {}
                }
            />
        </div>
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