import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid  } from 'swiper';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

Project5.propTypes = {
    data : PropTypes.array
};

function Project5(props) {

    const {data} = props;

    const [dataTab] = useState([
        {
            id: 1,
            title: 'oncoming',
        },
        {
            id: 2,
            title: 'Upcoming',
        },
        {
            id: 3,
            title: 'ended',
        },

    ]);

    const [dataTitle] = useState(
        {
            title: 'projects we recommend',
        }
    )
    return (
        <section className="tf-section project_2">
                    <div className="container w_1280">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="tf-title mb20" data-aos="fade-up" data-aos-duration="800">
                                    <h2 className="title">
                                        {dataTitle.title}
                                    </h2>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="flat-tabs" data-aos="fade-up" data-aos-duration="1000">

                                <Tabs>
                                    <TabList className='menu-tab'>
                                        {
                                            dataTab.map(idx => (
                                                <Tab className='fs-14 h6' key={idx.id}>{idx.title}</Tab>
                                            ))
                                        }
                                        
                                    </TabList>

                                        {
                                                dataTab.map(idx => (
                                                    <TabPanel key={idx.id} className='content-tab'>
                                                        <div className="content-inner">
                                                        <Swiper className='slider-3'
                                                    modules={[Grid ]}
                                                    spaceBetween={30}
                                                    slidesPerView={2}

                                                    breakpoints={{
                                                        0: {
                                   
                                                            slidesPerView: 1,
                                                          },
                                
                                                        867: {
                                   
                                                          slidesPerView: 2,
                                                        },
                                                     
                                                      }}
                                  
                                                    grid={{
                                                        rows: 1,
                                                      }}
                                                >
                                                {
                                                    data.slice(6,10).map(item => (
                                                        <SwiperSlide key={item.id}>
                                                            <div className="project-box-style4">
                                                                <div className="image">
                                                                    <div className="img_inner">
                                                                        <img src={item.img} alt="" />
                                                                        <img className='shape' src={require ('../../../assets/images/common/shape.png')} alt="Risebot" />
                                                                    </div>
                                                                    <div className="label">
                                                                        1ST Phase
                                                                    </div>
                                                                </div>
                                                                <div className="content">
                                                                    <h5 className="heading"><Link to="/project_v1">{item.title}</Link></h5>
                                                                    <p className="desc">{item.desc}</p>
                                                                    <ul>
                                                                        <li>
                                                                            <p className="text">Min allocation</p>
                                                                            <p className="price">{item.price_1}</p>
                                                                        </li>
                                                                        <li>
                                                                            <p className="text">Maximum</p>
                                                                            <p className="price">{item.price_2}</p>
                                                                        </li>
                                                                        <li>
                                                                            <p className="text">Access</p>
                                                                            <p className="price">{item.price_3}</p>
                                                                        </li>
                                                                    </ul>
                                                                
                                                                </div>
                                                            </div>
                                                        </SwiperSlide>
                                                    ))
                                                }
                                            </Swiper>
                                                        </div>
                                                    </TabPanel>
                                                ))
                                            }


                                        
                                    </Tabs> 
 
                                </div>
                            
                            </div>
                        </div>
                    </div>
                </section>
    );
}

export default Project5;