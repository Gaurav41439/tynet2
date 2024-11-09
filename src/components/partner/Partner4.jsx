import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

Partner4.propTypes = {
    data: PropTypes.array
};

function Partner4(props) {
    const {data} = props;
    return (
        <section className="tf-section tf_partner">
        <div className="overlay">
        </div>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="tf-title" data-aos="fade-up" data-aos-duration="800">
                        <h2 className="title">
                            Our Partners
                        </h2>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="partner-wrapper style3" data-aos="fade-up" data-aos-duration="800">
                        {
                            data.slice(0,16).map(item => (
                                <Link key={item.id} to="/" className="image">
                                    <img src={item.img} alt="" />
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

export default Partner4;