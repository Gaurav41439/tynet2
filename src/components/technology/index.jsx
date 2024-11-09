import React from 'react';
import PropTypes from 'prop-types';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { useState } from 'react';

Technology.propTypes = {
    data: PropTypes.array
};

function Technology(props) {

    const {data} = props;

    const [dataTitle] = useState(
        {
            title: 'Our technology supports multiple platforms',
            text: ' Cras molestie ullamcorper augue nec pulvinar. Ut suscipit tempor justo, sed aliquet eros ultricies eu. Nam mollis sapien ut sapien gravida sollicitudin. Mauris vel nisl quis dolor accumsan luctus.'
        }
    )

    return (
        <section className="tf-section technology">
                    <div className="container w_1490">
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <div className="tf-title" data-aos="fade-right" data-aos-duration="800">
                                    <div className="img_technology">
                                        <img src={require ("../../assets/images/common/img_technology1.png")} alt="" />
                                        <img className="coin coin_1" src={require ("../../assets/images/common/coin1.png")} alt="" />
                                        <img className="coin coin_2" src={require ("../../assets/images/common/coin2.png")} alt="" />
                                        <img className="coin coin_3" src={require ("../../assets/images/common/coin3.png")} alt="" />
                                        <img className="coin coin_4" src={require ("../../assets/images/common/coin4.png")} alt="" />
                                        <img className="coin coin_5" src={require ("../../assets/images/common/coin5.png")} alt="" />
                                        <img className="coin coin_6" src={require ("../../assets/images/common/coin6.png")} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="content_technology" data-aos="fade-up" data-aos-duration="800">
                                    <div className="tf-title left">
                                        <h2 className="title mb20">
                                            {dataTitle.title}
                                        </h2>
                                    </div>
                                    <p className="sub_technology">{dataTitle.text}
                                    </p>

                                    <Swiper
                                        className='slider-6'
                                        modules={[Navigation]}
                                            spaceBetween={0}
                                            slidesPerView={3}
                                            // navigation 
                                        >
                                        {
                                            data.map(item => (
                                                <SwiperSlide key={item.id}>
                                                    <img src={item.img} alt="" />
                                                </SwiperSlide>
                                            ))
                                        }
                                    </Swiper>
                                    <Swiper
                                        className='slider-6'
                                        modules={[Navigation]}
                                            spaceBetween={0}
                                            slidesPerView={3}
                                            
                                        >
                                        {
                                            data.slice(2,6).map(item => (
                                                <SwiperSlide key={item.id}>
                                                    <img src={item.img} alt="" />
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

export default Technology;