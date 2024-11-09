import React from 'react';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';

Partner2.propTypes = {
    data: PropTypes.array
};

function Partner2(props) {
    const {data} = props;
    return (
        <section className="tf-section partner">
                <div className="container full">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="partner-wrapper">
                            <Swiper
                                    className='slider-9'
                         
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

export default Partner2;