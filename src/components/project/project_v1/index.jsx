import React , { useState  } from 'react';
import PropTypes from 'prop-types';

import { Pagination , A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../styles.scss'; 
import Countdown from '../../countdown';

Project.propTypes = {
    data: PropTypes.array,
};
 
function Project(props) {
        const {data} = props;

    

    const [dataTitle] = useState(
        {
            title: 'About Us',
            
        }
    )

    return (
        <section className="tf-section project">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="tf-title" data-aos="fade-up" data-aos-duration="800">
                        <h2 className="title">
                        {dataTitle.title}<br className="show-destop"/> {dataTitle.title_2}
                        </h2>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="project-wrapper">
                        <div className="image-wrapper" data-aos="fade-in" data-aos-duration="1000">
                            <div className="slider-1">
                            <Swiper 
                                    modules={[Pagination, A11y]}
                                        spaceBetween={0}
                                        slidesPerView={1}
                                        pagination={{ clickable: true }}
                                    >
                                { 
                                    data.slice(0,5).map(item => (
                                        <SwiperSlide key={item.id} item={item}>
                                            <img src={item.img} alt="Risebot" />
                                        </SwiperSlide>
                                    ))
                                }
                            </Swiper>
                            </div>
                        </div>
                        <div className="content-wrapper">
                            <div className="content_inner" data-aos="fade-left" data-aos-duration="1200">
                                <div className="wrapper">
                                    <h4>TYNET 2.0</h4>
                                <p className="desc">Content will be provided</p>                               
                                 <h6 className="featured_title">Events Starts in</h6> 
                                <div className="featured-countdown">
                                <div className="js-countdown">
                                    {<Countdown />}
                                </div>
                                    <ul className="desc">
                                        <li>day</li>
                                        <li>hou</li>
                                        <li>min</li>
                                        <li>sec</li>
                                    </ul>
                                </div>
                                
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}

export default Project;