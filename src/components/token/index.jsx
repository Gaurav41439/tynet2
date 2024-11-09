import React from 'react';

import img from '../../assets/images/backgroup/bg_project2.png'
import img1 from '../../assets/images/common/counter_1.png'
import img2 from '../../assets/images/common/counter_2.png'
import img3 from '../../assets/images/common/counter_3.png'
import img4 from '../../assets/images/common/counter_4.png'
import icon1 from '../../assets/images/chart/color_1.png'
import icon2 from '../../assets/images/chart/color_2.png'
import icon3 from '../../assets/images/chart/color_3.png'
import icon4 from '../../assets/images/chart/color_4.png'
import icon5 from '../../assets/images/chart/color_5.png'
import icon6 from '../../assets/images/chart/color_6.png'
import icon7 from '../../assets/images/chart/color_7.png'
import bg from '../../assets/images/chart/subtract.png'
import { useState } from 'react';

import { Chart } from './Chart';



function Token(props) {

    const [data] = useState(
        [
            {
                id: 1,
                img: img1,
                title: 'Funded Projects',
                number: '359'
            },
            {
                id: 2,
                img: img2,
                title: 'Unique Participants',
                number: '742'
            },
            {
                id: 3,
                img: img3,
                title: 'Raised Capital',
                number: '17M'
            },
            {
                id: 4,
                img: img4,
                title: 'Initial Market Cap',
                number: '32M'
            }
        ]
    )

    const [list] = useState(
        [
            {
                id: 1,
                icon: icon1,
                title: 'Team',
                unit: '7.5%'
            },
            {
                id: 2,
                icon: icon2,
                title: 'Staking',
                unit: '9.5%'
            },
            {
                id: 3,
                icon: icon3,
                title: 'Advisors',
                unit: '10.0%'
            },
            {
                id: 4,
                icon: icon4,
                title: 'Liquidity',
                unit: '12.0%'
            },
            {
                id: 5,
                icon: icon5,
                title: 'Ecosystem',
                unit: '16.33%'
            },
            {
                id: 6,
                icon: icon6,
                title: 'Marketing',
                unit: '16.33%'
            },
            {
                id: 7,
                icon: icon7,
                title: 'Private Sale',
                unit: '30.0%'
            },

        ]
    )

    const [dataTitle] = useState(
        {
            title: 'Statistics token',
  
        }
    )
    return (
        <section className="tf-section tf-token">
                <div className="overlay">
                    <img src={img} alt="" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="tf-title" data-aos="fade-up" data-aos-duration="800">
                                <h2 className="title">
                                    {dataTitle.title}
                                </h2>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="row">
                                <div className="counter_wrapper">

                                    {
                                        data.map(idx => (
                                            <div key={idx.id} className="box">
                                                <div className="image">
                                                    <img src={idx.img} alt="" />
                                                </div>
                                                <div className="content">
                                                    <p className="desc">{idx.title}</p>
                                                    <div className="box-couter counter">
                                                        <div className="number-content">
                                                            <span className="count-number" data-to="359" data-speed="2000" data-inviewport="yes">{idx.number}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                        ))
                                    }
                                    
                                </div>
                                <div className="char_wrapper">
                                    <ul className="describe_chart">
                                        {
                                            list.map(idx => (
                                                <li key={idx.id}>
                                                    <img src={idx.icon} alt="" />
                                                    <div className="desc">
                                                        <p className="name">{idx.title}</p>
                                                        <p className="number">{idx.unit}</p>
                                                    </div>
                                                </li>
                                            ))
                                        }
                                        
                                    </ul>
                                    <div className="chart_inner" data-aos="fade-up" data-aos-duration="800">
                                        <div className="content_inner">
                                            <img src={bg} alt="" />
                                            <p>Statistics token</p>
                                        </div>
                                        <Chart />
                                    </div>
                                </div>
                            </div>
                        
                        </div>
                    </div>
                </div>
            </section>
    );
}

export default Token;