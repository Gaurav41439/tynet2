import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useState } from 'react';

Partner.propTypes = {
    data: PropTypes.array
};

function Partner(props) {

    const {data} = props;

    const [dataTitle] = useState(
        {
            title: 'Our Partners',
        }
    )
    return (
        <section className="tf-section tf_partner">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="tf-title" data-aos="fade-up" data-aos-duration="800">
                                <h2 className="title">
                                    {
                                        dataTitle.title
                                    }
                                </h2>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="partner-wrapper" data-aos="fade-up" data-aos-duration="800">
                                {
                                    data.map(idx => (
                                        <Link key={idx.id} to="/home_v2" className="image">
                                            <img src={idx.img} alt="" />
                                        </Link>
                                    ))
                                }
                            </div>
                        
                        </div>
                    </div>
                </div>
            </section>
    );
}

export default Partner;