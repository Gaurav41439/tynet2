import React from 'react';

import {Link} from 'react-router-dom';


function Banner(props) {
    const {item} = props;

    return (
        <div className="project-box-style2" data-aos="fade-up" data-aos-delay="100" data-aos-duration="800">
            <div className="image">
                <img src={item.img} alt="" />
            </div>
            <div className="content">
                <h5>{item.title}</h5>
                <p className="desc">{item.desc}</p>
                <p className="number">{item.number}</p>
            </div>
            <Link to="#" className="btn_project">
                <span><i className="far fa-angle-right"></i></span>
            </Link>
        </div>
    );
}

export default Banner;