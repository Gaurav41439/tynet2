import React from 'react';

import PageTitle from '../components/pagetitle';
import CTA from '../components/cta/cta_v2';
import { Link } from 'react-router-dom';


function SubmitProject(props) {
    return (
        <div className='inner-page'>
            {<PageTitle title='Submit Project' />}

            <section className="tf-section project-info pt60">
        <div className="container"> 
            <div className="row">
                <div className="col-md-12">
                    <form action="#">
                        <div className="project-info-form check-radio">
                            <h4 className="title">Step 1: Identity confirmation</h4>
                            <div className="form-inner">
                                <fieldset>
                                    <label>
                                        Choose network
                                    </label> 
                                    <dl id="sample" className="dropdown">
                                        <dt>
                                            <Link to="#" className="nolink"><span><img className="flag" src={require ("../assets/images/common/vietnam.png")} alt="" />Vietnamese</span></Link>
                                            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8.75 1.125L5 4.875L1.25 1.125" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg> 
                                        </dt>
                                        
                                        <dd>
                                            <ul className="option">
                                                <li><Link to="#" className="nolink"><img className="flag" src={require ("../assets/images/common/vietnam.png")} alt="" />Vietnamese</Link></li>
                                                <li><Link to="#" className="nolink"><img className="flag" src="http://www.jankoatwarpspeed.com/wp-content/uploads/examples/reinventing-drop-down/fr.png" alt="" />France </Link></li>
                                            </ul>
                                        </dd>
                                    </dl>
                                  
                                </fieldset>
                                <fieldset>
                                    <label className="mb9">
                                        Select indentity type
                                    </label> 
                                    <p>Should be your government issued photo identity</p>

                                    <ul className="list">
                                        <li className="list__item">
                                            <input type="radio" className="radio-btn" name="choice" id="a-opt" />
                                            <label htmlFor="a-opt" className="label">National ID</label>
                                        </li>
                                        
                                        <li className="list__item">
                                            <input type="radio" className="radio-btn" name="choice" id="b-opt" />
                                            <label htmlFor="b-opt" className="label">Passport</label>
                                        </li>
                                        
                                        <li className="list__item">
                                            <input type="radio" className="radio-btn" name="choice" id="c-opt" />
                                            <label htmlFor="c-opt" className="label">Driver’s licnse</label>
                                        </li>
                                    </ul>  
                                </fieldset>
                            </div>
                        </div>
        
                        <div className="project-info-form style">
                            <h6 className="title mb30">Step 2: Upload document</h6>
                            <div className="form-inner">
                                <div className="upload-img mb22">
                                    <div className="col img_1"> 
                                        <div className="box"> 
                                            <input type="file" name="file-1[]" id="file-1" className="inputfile inputfile-1" data-multiple-caption="{count} files selected" multiple="" />
                                            <label htmlFor="file-1">
                                                <img src={require ("../assets/images/common/upload.png")} alt="" />
                                                <span>Drag and drop <br /> images</span>
                                                <span className="file"></span>
                                            </label>
                                        </div>
                                        <p>National ID Front</p>
                                    </div>
                                    <div className="col img_2">
                                        <div className="box"> 
                                            <input type="file" name="file-2[]" id="file-2" className="inputfile inputfile-1" data-multiple-caption="{count} files selected" multiple="" />
                                            <label htmlFor="file-2">
                                                <img src={require ("../assets/images/common/upload.png")} alt="" />
                                                <span>Drag and drop <br /> images</span>
                                                <span className="file"></span>
                                            </label>
                                        </div>
                                        <p>National ID Back</p>
                                    </div>
                                    <div className="col img_3">
                                        <div className="box"> 
                                            <input type="file" name="file-3[]" id="file-3" className="inputfile inputfile-1" data-multiple-caption="{count} files selected" multiple="" />
                                            <label htmlFor="file-3">
                                                <img src={require ("../assets/images/common/upload.png")} alt="" />
                                                <span>Drag and drop <br /> images</span>
                                                <span className="file"></span>
                                            </label>
                                        </div>
                                        <p>Selfie with National ID</p>
                                    </div>
                                </div>
                                <fieldset className="mb21">
                                    <label className="fz16 mb8" htmlFor="file-4">
                                        Or upload from a URL
                                    </label>
                                    <fieldset className="block">
                                        <div className="box"> 
                                            <div className="upload-img style2">
                                                <div className="col mobile-mb0"> 
                                                    <div className="box"> 
                                                        <input type="file" name="file-4[]" id="file-4" className="inputfile inputfile-1" data-multiple-caption="{count} files selected" multiple="" />
                                                        <label htmlFor="file-4"> 
                                                            <span>Add the file URL</span>
                                                            <svg width="28" height="22" viewBox="0 0 28 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path fillRule="evenodd" clipRule="evenodd" d="M13.3055 2.4375C9.81376 2.4375 6.94481 5.1088 6.63243 8.51863C6.5875 9.00913 6.17579 9.3825 5.68546 9.382C3.92025 9.3805 2.4375 10.8496 2.4375 12.6111C2.4375 14.3945 3.88325 15.8403 5.66666 15.8403H6.5C7.01776 15.8403 7.4375 16.26 7.4375 16.7778C7.4375 17.2955 7.01776 17.7153 6.5 17.7153H5.66666C2.84771 17.7153 0.5625 15.4301 0.5625 12.6111C0.5625 10.0805 2.45709 7.9655 4.87203 7.5725C5.60853 3.58349 9.10378 0.5625 13.3055 0.5625C16.4338 0.5625 19.1693 2.23737 20.6668 4.73581C24.253 4.59444 27.4375 7.52788 27.4375 11.2223C27.4375 14.5896 24.8748 17.3574 21.5926 17.6833C21.0774 17.7344 20.6183 17.3583 20.5671 16.843C20.5159 16.3278 20.8921 15.8686 21.4074 15.8174C23.74 15.5859 25.5625 13.6163 25.5625 11.2223C25.5625 8.45625 23.004 6.2614 20.2826 6.65113C19.8821 6.7085 19.4839 6.5055 19.2988 6.13691C18.1965 3.94114 15.9258 2.4375 13.3055 2.4375Z" fill="#798DA3"/>
                                                                <path fillRule="evenodd" clipRule="evenodd" d="M14 12.8258L16.462 15.2878C16.8281 15.6539 17.4217 15.6539 17.7879 15.2878C18.154 14.9216 18.154 14.3281 17.7879 13.962L15.1049 11.2789C14.4946 10.6688 13.5054 10.6688 12.8951 11.2789L10.2121 13.962C9.84597 14.3281 9.84597 14.9216 10.2121 15.2878C10.5782 15.6539 11.1718 15.6539 11.5379 15.2878L14 12.8258Z" fill="#798DA3"/>
                                                                <path fillRule="evenodd" clipRule="evenodd" d="M14 21.1875C14.5178 21.1875 14.9375 20.7677 14.9375 20.25V12.75C14.9375 12.2322 14.5178 11.8125 14 11.8125C13.4822 11.8125 13.0625 12.2322 13.0625 12.75V20.25C13.0625 20.7677 13.4822 21.1875 14 21.1875Z" fill="#798DA3"/>
                                                            </svg>
                                                        </label>
                                                    </div> 
                                                </div> 
                                            </div>
                                        </div>
                                    </fieldset>
                                </fieldset>

                                <fieldset className="mb18">
                                    <label className="fz16 mb8" htmlFor="national">
                                        National ID number
                                    </label>
                                    <fieldset>
                                        <input className="pl14" type="text" id="national" placeholder="e.g. 0123456789" required="" /> 
                                    </fieldset>
                                </fieldset>
                                <p className="note">Note: We only support JPG and PNG images under 25 MB.</p>
                            </div>
                        </div>  
        
                        <div className="project-info-form style">
                            <h6 className="title mb32">Step 3: Personal infomation</h6>
                            <div className="form-inner">
                                <fieldset className="mb22">
                                    <label className="fz16 mb8" htmlFor="name">
                                        Your name
                                    </label>
                                    <fieldset>
                                        <input className="pl14" id="name" type="text" placeholder="Enter your name" required /> 
                                    </fieldset>
                                </fieldset>
                                <fieldset className="mb22">
                                    <label className="fz16 mb8" htmlFor="state">
                                        State / Provience
                                    </label>
                                    <fieldset>
                                        <input className="pl14" type="text" id="state" placeholder="e.g. Vietnamese" required />                
                                    </fieldset>
                                </fieldset> 
                                <fieldset className="mb22">
                                    <label className="fz16 mb8">
                                        Address
                                    </label>
                                    <fieldset>
                                        <input type="text" id="address" className="pl14" placeholder="Enter your address" required />                
                                    </fieldset>
                                </fieldset> 
                                <div className="flex mb22">
                                    <div className="col50">
                                        <label className="fz16 mb8">
                                            City
                                        </label>
                                        <fieldset>
                                            <input className="pl14" id="city" type="text" placeholder="Enter your city" required />                
                                        </fieldset>
                                    </div>
                                    <div className="col50">
                                        <label className="fz16 mb8" htmlFor="code">
                                            Post code
                                        </label>
                                        <fieldset>
                                            <input id="code" className="pl14" type="text" placeholder="e.g. 1995" required />                
                                        </fieldset>
                                    </div>
                                </div>
                                <fieldset className="checkbox"> 
                                    <input type="checkbox" id="checkbox" name="checkbox" />
                                    <label htmlFor="checkbox" className="icon"></label>
                                    <label htmlFor="checkbox">
                                        I accept the Term of Conditions and Privacy Policy
                                    </label>
                                </fieldset>
                            </div>
                        </div>

                        <div className="wrap-btn">
                            <button type="submit" className="tf-button style2">
                                Submit project
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>


            {<CTA />}
            
        </div>
    );
}

export default SubmitProject;