import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useState } from 'react';

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
                                        {dataTitle.title}
                                    </h2>
                                </div>
                            </div>

                            {
                                data.map(item => (
                                    <div key={item.id} className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-duration="800">
                                        <div className="image-box">
                                            <div className="number">
                                                <img src={require ("../../assets/images/backgroup/bg_box.png")} alt="" />
                                                <h6>Tiers #{item.id}</h6>
                                            </div>
                                            <div className="image">
                                                <img src={item.img} alt="" />
                                            </div>
                                            <div className="content">
                                                <h6 className="name"><Link to="/submit_igo">{item.title}</Link></h6>
                                                <ul>
                                                    <li className="box bg_style">
                                                        <p>Staking Requirements</p>
                                                        <p className="price">{item.unit1}</p>
                                                    </li>
                                                    <li className="box">
                                                        <p>Allocation</p>
                                                        <p className="price">{item.unit2}</p>
                                                    </li>
                                                    <li className="box bg_style">
                                                        <p>Requirements</p>
                                                        <p className="price">{item.unit3}</p>
                                                    </li>
                                                    <li className="box">
                                                        <p>Pool weight</p>
                                                        <p className="price">{item.unit4}</p>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="wrapper_button">
                                                <Link to="/submit_igo" className="tf-button style1">
                                                    <span>get started</span>
                                                </Link>
                                            </div>
                                        
                                        </div>
                                    </div>
                                ))
                            }

                        </div>
                    </div>
                </section>
    );
}

export default Tier;