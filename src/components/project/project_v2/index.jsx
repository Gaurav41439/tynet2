import React , { useState } from 'react';
import PropTypes from 'prop-types';
import img_bg from '../../../assets/images/backgroup/bg_project.png';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../styles.scss'; 
import ProjectItem from '../project_item_v1';

Project.propTypes = {
    data: PropTypes.array,
};
 
function Project(props) {
        const {data} = props; 

    const [dataTitle] = useState(
        {
            title: 'Projects that promise a lot  ',
            title_2: ' of potential'
        }
    )

    return (
        <section className="tf-section project_2">
        <div className="overlay">
            <img src={img_bg} alt="Risebot" />
        </div>
        <div className="container w_1690">
            <div className="row">
                <div className="col-md-12">
                    <div className="tf-title" data-aos="fade-up" data-aos-duration="800">
                        <h2 className="title"> 
                            {dataTitle.title} <br className="show-destop" />
                            {dataTitle.title_2}
                        </h2>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="container_inner">
                    <div className="slider-2 navigation_project">
                            <Swiper 
                                     modules={[Navigation]}
                                     spaceBetween={30}
                                     slidesPerView={1}
                                     navigation 
                                     breakpoints={{ 

                                        0: {
                                            slidesPerView: 1,
                                        },
                                        750: {
                                            slidesPerView: 2,
                                        },
                                        991: {
                                            slidesPerView: 3,
                                        },
                                        1280: {
                                            slidesPerView: 4,
                                        },
                                      }}
                                 >
                                {
                                    data.slice(5,10).map(item => (
                                        <SwiperSlide key={item.id}>
                                            <ProjectItem item={item} />
                                        </SwiperSlide>
                                    ))
                                }
                            </Swiper>
                            </div> 
                    </div>
                   
                </div>
            </div>
        </div>
    </section>
    );
}

export default Project;