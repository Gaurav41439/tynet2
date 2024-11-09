import React from 'react';
import { useState } from 'react';

import PropTypes from 'prop-types';

Token2.propTypes = {
    data: PropTypes.array
};


function Token2(props) {

    const {data} = props;

    const [dataTitle] = useState(
        {
            title: 'Statistics token',
        }
    )
    return (
        <section className="tf-section token">
            <div className="container ">
                <div className="row">
                    <div className="col-md-12">
                        <div className="tf-title" data-aos="fade-up" data-aos-duration="800">
                            <h2 className="title mb20">
                                {dataTitle.title}
                            </h2>
                            <div className="total_token">
                                <h6>Total Supply: <span>15,000,000</span></h6>
                                <h6>Public sale:  <span>$0.24</span></h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="content-progress-box">
                            <div className="content-progress-box">
                                {
                                    data.slice(0,4).map(item => (
                                        <div key={item.id} className="progress-bar" data-percentage="27.3%">
                                            <p className="progress-title-holder">
                                                <span className="progress-title">{item.title}</span>
                                                <span className="progress-number-wrapper">
                                                    <span className="progress-number-mark">
                                                        <span className="percent"></span>
                                                    </span>
                                                </span>
                                            </p>
                                            <div className="progress-content-outter">
                                                <div className="progress-content"></div>
                                            </div>
                                        </div>
                                    ))
                                }

                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="content-progress-box">
                            <div className="content-progress-box">
                            {
                                    data.slice(4,8).map(item => (
                                        <div key={item.id} className="progress-bar" data-percentage="27.3%">
                                            <p className="progress-title-holder">
                                                <span className="progress-title">{item.title}</span>
                                                <span className="progress-number-wrapper">
                                                    <span className="progress-number-mark">
                                                        <span className="percent"></span>
                                                    </span>
                                                </span>
                                            </p>
                                            <div className="progress-content-outter">
                                                <div className="progress-content"></div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Token2;