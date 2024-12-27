import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import img from '../../assets/images/backgroup/bg_team_section.png'
import shape from '../../assets/images/common/shape_3.png'
import shape1 from '../../assets/images/common/shape_4.svg'
import { useState } from 'react';



Team.propTypes = {
    data : PropTypes.array,
};

function Team(props) {
    const {data} = props;

    const [dataTitle] = useState(
        {
            title: 'Meet the Judges',
        }
    )
    return (
        <section className="tf-section tf_team">
                {/*<div className="overlay">
                    <img src={img} alt="" />
                </div>*/}
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="tf-title mb40" data-aos="fade-up" data-aos-duration="800">
                                <h2 className="title">
                                    {dataTitle.title}
                                </h2>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="team-box-wrapper">

                                {
                                    data.map(item => (
                                        <div key={item.id} className="team-box" data-aos="fade-up" data-aos-delay="100" data-aos-duration="800">
                                            <img className="shape" src={shape} alt="" />
                                            <img className="shape_ecfect" src={shape1} alt="" />
                                            <div className="image">
                                                <img src={item.img} alt="" />
                                            </div>
                                            <div className="content">
                                                <h5 className="name">{item.name}</h5>
                                                <p className="position" style={{ marginTop: '20px' }}>{item.unit}</p>
                                                <ul className="social">
                                                    {item.social.map((socialItem) => (
                                                        <li key={socialItem.id}>
                                                            <a href={socialItem.link} target="_blank" rel="noopener noreferrer">
                                                                <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M17.9955 0H1.71453C1.01991 0 0.5 0.519906 0.5 1.21453V16.9955C0.5 17.6801 1.01991 18.2 1.71453 18.2H17.9955C18.6901 18.2 19.21 17.6801 19.21 16.9955V1.21453C19.21 0.519906 18.6901 0 17.9955 0ZM6.25274 15.4834H3.39642V7.08094H6.25274V15.4834ZM4.82458 5.90078C3.91557 5.90078 3.17923 5.16444 3.17923 4.25543C3.17923 3.34642 3.91557 2.61008 4.82458 2.61008C5.73359 2.61008 6.46993 3.34642 6.46993 4.25543C6.46993 5.16444 5.73359 5.90078 4.82458 5.90078ZM16.5336 15.4834H13.6773V11.3773C13.6773 10.3473 13.6773 9.01906 12.2491 9.01906C10.821 9.01906 10.6038 10.1302 10.6038 11.2413V15.4834H7.74745V7.08094H10.4947V8.26109H10.5347C10.9082 7.5847 11.8172 6.87097 13.1863 6.87097C16.0727 6.87097 16.5336 8.71195 16.5336 11.0637V15.4834Z" fill="#798DA3"/>
                                                                </svg>
                                                            </a>
                                                        </li>
                                                    ))}
                                                </ul>
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

export default Team;