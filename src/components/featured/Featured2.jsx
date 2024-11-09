import React from 'react';
import PropTypes from 'prop-types';

Featured2.propTypes = {
    data: PropTypes.array
};

function Featured2(props) {
    const {data} = props;
    return (
        <section className="tf-section features">
        <div className="overlay">
        </div>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="tf-title" data-aos="fade-up" data-aos-duration="800">
                        <h2 className="title">
                            We have outstanding technology <br className="show-destop" /> and features
                        </h2>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="wrapper-box">
                        {
                            data.slice(4,9).map(item => (
                                <div key={item.id} className="icon-box-style2">
                                    <div className="icon">
                                        <img src={item.img} alt="" />
                                    </div>
                                    <div className="content">
                                        <h5 className="title">{item.title}</h5>
                                        <p>{item.text}</p>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}

export default Featured2;