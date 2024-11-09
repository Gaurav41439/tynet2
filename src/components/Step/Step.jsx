import React from 'react';
import PropTypes from 'prop-types';

Step.propTypes = {
    data: PropTypes.array
};

function Step(props) {
    const {data} = props;
    return (
        <section className="tf-section three_step">
        <div className="overlay"></div>
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="tf-title mb46 left" data-aos="fade-up" data-aos-duration="800">
                        <h2 className="title">
                            Easy to join IGO <br className="show-destop" />
                            with 3 steps
                        </h2>
                    </div>
                    <div className="wrap-box">
                        {
                            data.map(item => (
                                <div key={item.id} className="icon-box-style3">
                                    <div className="icon">
                                        <img src={item.img} alt="" />
                                    </div>
                                    <div className="content">
                                        <h5 className="title">{item.title}</h5>
                                        <p>{item.text}</p>
                                    </div>
                                    <img className="icon_bottom" src={require ("../../assets/images/common/Line.png")} alt="" />
                                </div>
                            ))
                        }

                    </div>
                </div>
                <div className="col-md-6">
                    <div className="image pt30">
                        <img src={require ("../../assets/images/common/img_step.png")} className="move5" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}

export default Step;