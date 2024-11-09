import React from 'react';
import PropTypes from 'prop-types';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';

Partner3.propTypes = {
    data: PropTypes.array
};

function Partner3(props) {
    const {data} = props;
    return (
        
    <section className="tf-section supported"> 
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <div className="tf-title" data-aos="fade-up" data-aos-duration="800">
                    <h2 className="title">
                        We are supported
                    </h2>
                </div>
            </div> 
        </div>
    </div>
    <div className="container w_1710 brand_wrapper">
        <div className="row"> 
            <div className="col-md-12">
                <div className="brand">
                <Swiper
                                    className='slider-12'
                         
                                    spaceBetween={0}
                                    slidesPerView={10}
                          
                                >
                                {
                                    data.map(item => (
                                        <SwiperSlide key={item.id}>
                                            <Link to="/home_v3" className="image ">
                                                <img src={item.img} alt="" />
                                            </Link>
                                        </SwiperSlide>
                                    ))
                                }
                            </Swiper>
                </div>
            </div> 
        </div>
    </div>
</section>
    );
}

export default Partner3;