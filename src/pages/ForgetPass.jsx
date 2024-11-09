import React from 'react';

import CTA from '../components/cta';
import { Link } from 'react-router-dom';


function ForgetPass(props) {
    return (
        <div className='inner-page'>
            <section className="page-title">
            <div className="overlay"></div> 
        </section>

        <section className="tf-section project-info">
        <div className="container"> 
            <div className="row">
                <div className="col-md-12">
                    <form action="#">
                        <div className="project-info-form forget-form">
                            <h4 className="title">Forget Password</h4> 
                            <p>enter your email address in the form below and we will send you further instructions on how to reset your password</p>
                            <div className="form-inner"> 
                                <fieldset>
                                    <label >
                                        Email address
                                    </label>
                                    <input type="email" placeholder="Your email" required />
                                </fieldset> 
                            </div>
                            <div className="bottom">
                                Nevermind. 
                                <Link to="/login">Sign in</Link>
                            </div>
                        </div> 

                        <div className="wrap-btn">
                            <button type="submit" className="tf-button style1">
                                Reset password
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>


            

            {<CTA  />}
            
        </div>
    );
}

export default ForgetPass;