import React from 'react';
import PropTypes from 'prop-types';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { Link } from 'react-router-dom';

Featured.propTypes = {
    data: PropTypes.array
};

function Featured(props) {
    const {data} = props;

    return (
        <section className="tf-section fueture">
                <div className="container w_1320">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="container_inner">
                                 <Swiper
                                    modules={[Navigation]}
                                    spaceBetween={30}
                                    slidesPerView={3}

                                    breakpoints={{
                                        0: {
                
                                            slidesPerView: 1,
                                        },

                                        867: {
                
                                        slidesPerView: 2,
                                        },
                                    
                                        1200: {
                        
                                        slidesPerView: 3,
                                        },
                                    }}
                                
                                >
                                {
                                    data.slice(0,4).map(item => (
                                        <SwiperSlide className='pb-30' key={item.id}>
                                            <div className="icon-box">
                                                <div className="top">
                                                    <div className="icon">
                                                        <img src={item.img} alt="" />
                                                    </div>
                                                    <div className="content">
                                                        <h5><Link to="/project_list">{item.title}</Link></h5>
                                                        <p>{item.text}.</p>
                                                    </div>
                                                </div>
                                                <div className="bottom">
                                                    <img src={require ("../../assets/images/backgroup/bg_bt_box_1.png")} alt="" />
                        
                                                </div>
                                                <div className="number">
                                                    {item.id}
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))
                                }
                            </Swiper>


                                <div className="col-md-12 mt30">
                                    <p className="desc text-center mb20">
                                        At Risebot, we bring projects with great potential that bring huge profits <br className="show-destop" />
                                        auctor euismod magna etiam diam velit, ultrices vel feugiat a, varius quis felis. Integer tempor efficitur mollis
                                    </p>
                                    <div className="wrap-btn justify-content-center">
                                        <Link to="/submit_igo" className="tf-button style1">
                                            JOIN US
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                    </div>
                </div>
            </section>
    );
}

export default Featured;