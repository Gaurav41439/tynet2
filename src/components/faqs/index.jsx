import React from 'react';
import PropTypes from 'prop-types';
import { Accordion } from 'react-bootstrap-accordion';
import { Link } from 'react-router-dom';

Faqs.propTypes = {
    data: PropTypes.array
};

function Faqs(props) {
    const {data} = props;
    return (
        <section className="tf-section FAQs">
                <div className="container ">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="tf-title" data-aos="fade-up" data-aos-duration="800">
                                <h2 className="title">
                                    frequently asked questions
                                </h2>
                            </div>
                        </div>
                        <div className="col-md-12">
                            
                            <div className="flat-accordion aos-init aos-animate" data-aos="fade-up" data-aos-duration="800">

                                {
                                    data.map(item => (
                                        <Accordion className='flat-toggle' key={item.id} title={item.title} show={item.show}>
                                     
                                            <p className="toggle-content">{item.content}</p>
                                        </Accordion>
                                    ))
                                }

                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="content_faq text-center">
                                <p>If you don`t find an answer, contact with our experts</p>
                                <div className="wrap-btn">
                                    <Link to="/contact" className="tf-button style1">
                                        get in touch
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    );
}

export default Faqs;