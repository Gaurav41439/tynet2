import React from 'react';

import Button from '../../button';


function Banner(props) {
    const {item} = props;

    return (
        <div className="slider-st1">
            <div className="overlay">
                <img src={require ('../../../assets/images//backgroup/bg-slider.png')} alt="Risebot" />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="box-slider">
                            <div className="content-box">
                            
                                <h1 className="title" >{item.heading}</h1>
                                <p className="sub-title">{item.sub_heading}</p>
                                <div className="wrap-btn"> 
                                    <Button title='EXPLORE IGO' path='/' addclass='style2'/>  
                                </div>
                            </div>
                            <div className="image">
                                <img className="img_main" src={item.img1} alt="Risebot" /> 
                                <div className="icon icon1"> 
                                    <img  src={item.img2} alt="Risebot" /> 
                                </div>
                                <div className="icon icon2">
                                    <img  src={item.img3} alt="Risebot" /> 
                                </div>
                                <div className="icon icon3">
                                    <img  src={item.img4} alt="Risebot" /> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;