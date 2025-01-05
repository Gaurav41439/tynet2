import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import data2 from '../../assets/fake-data/data-tier2'

Tier.propTypes = {
    data: PropTypes.array
};

function Tier(props) {
    const {data} = props;

    const [dataTitle] = useState(
        {
            title: 'Tier System',
        }
    )
    return (
        <section className="tf-section tier_system">
                    <div className="container ">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="tf-title" data-aos="fade-up" data-aos-duration="800">
                                    <h2 className="title mb20">
                                        Organizing Team
                                    </h2>
                                </div>
                            </div>
                            <div style={{ 
    display: 'flex', 
    justifyContent: 'center', 
    flexWrap: 'wrap', 
    gap: '20px' 
}}>
    {data2.map(item => (
        <div key={item.id} className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-duration="800">
            <div className="image-box">
                <div className="image" style={{ marginTop: '-20px' }}>
                    <img 
                        style={{
                            borderRadius: '12px',
                            filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.1))'
                        }}
                        src={item.img} 
                        alt="" 
                    />
                </div>
                <div className="content">
                    <h6 className="name" style={{ color: '#ffffff' }}>{item.title}</h6>
                    <ul>
                        <li className="box bg_style">
                            <p className="price" style={{ color: '#ffffff' }}>{item.unit1}</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    ))}
</div>

<div style={{ margin: '50px 0' }}></div>

{data.map(item => (
    <div key={item.id} className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-duration="800">
        <div className="image-box">
            <div className="image" style={{ marginTop: '-20px' }}>
                <img 
                    style={{
                        borderRadius: '12px',
                        filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.1))'
                    }}
                    src={item.img} 
                    alt="" 
                />
            </div>
            <div className="content">
                <h6 className="name" style={{ color: '#ffffff' }}>{item.title}</h6>
                <ul>
                    <li className="box bg_style">
                        <p className="price" style={{ color: '#ffffff' }}>{item.unit1}</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
))}

                        </div>
                    </div>
                </section>
    );
}

export default Tier;