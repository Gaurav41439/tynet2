import React from 'react';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { Link } from 'react-router-dom';

Project6.propTypes = {
    data: PropTypes.array
};

function Project6(props) {

    const {data} = props;
    return (
        <section className="tf-section project2">
                    <div className="container w_1280">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="tf-title" data-aos="fade-up" data-aos-duration="800">
                                    <h2 className="title">
                                        Completed Project
                                    </h2>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="container_inner">
                                <Swiper
                                className='slider-8'
                                modules={[Navigation]}
                                    spaceBetween={30}
                         

                                    breakpoints={{
                                        0: {
                   
                                            slidesPerView: 1,
                                          },
                
                                        991: {
                   
                                          slidesPerView: 2,
                                        },
                                     
                                      }}
                               
                                >
                                    {
                                        data.slice(13,17).map(item => (
                                            <SwiperSlide key={item.id}>
                                                <div className="project-box-style5">
                                                    <span className="boder"></span>
                                                    <div className="img-box">
                                                        <div className="image">
                                                            <img className="mask" src={item.img} alt="" />
                                                            <div className="shape">
                                                                <img src={require ('../../../assets/images/common/shape.png')} alt="" />
                                                            </div>
                                                        </div>
                                                        <div className="content">
                                                                <h5 className="heading"><Link to="/project_v1">{item.title}</Link></h5>
                                                                <p className="desc">{item.desc}</p>
                                                        </div>
                                                    </div>
                                                    <div className="content-inner">
                                                        <div className="total">
                                                            <h6>Total raise</h6>
                                                            <p className="price">{item.price}</p>
                                                        </div>
                                                        <ul>
                                                            <li>
                                                                <p className="text">Maximum</p>
                                                                <p className="price">{item.price_1}</p>
                                                            </li>
                                                            <li>
                                                                <p className="text">Access</p>
                                                                <p className="price">{item.price_2}</p>
                                                            </li> 
                                                        </ul>
                                                        <div className="content-progress-box style2">
                                                            <div className="progress-bar" data-percentage="100%">
                                                                <p className="progress-title-holder">
                                                                    <span className="progress-title">
                                                                        <span className="white">Progress</span>
                                                                        <span>Max Participants <span className="white">4472</span></span>
                                                                    </span>
                                                                    
                                                                </p>
                                                                <div className="progress-content-outter">
                                                                    <div className="progress-content"></div>
                                                                </div>
                                                                <span className="progress-number-wrapper">
                                                                    <span className="progress-number-mark">
                                                                        <span className="white percent"></span>
                                                                    </span>
                                                                    <span className="total">6649945.92/6650000 BVC</span>
                                                                </span>
                                                            </div> 
                                                        </div>
                                                    </div>
                                                </div>
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

export default Project6;