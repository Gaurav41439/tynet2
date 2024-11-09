import React from 'react';

import CTA from '../components/cta';
import { Link } from 'react-router-dom';

function Register(props) {
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
                        <div className="project-info-form form-login style2">
                            <h6 className="title">Register</h6>
                            <h6 className="title show-mobie"><Link to="/login">Login</Link></h6>
                            <h6 className="title link"><Link to="/login">Login</Link></h6>
                            <p>Welcome to Risebot, please enter your details</p>
                            <div className="form-inner"> 
                                <fieldset>
                                    <label>
                                        Email address *
                                    </label>
                                    <input type="email" placeholder="Your email" required />
                                </fieldset>
                                <fieldset>
                                    <label>
                                        Password *
                                    </label>
                                    <input type="password" placeholder="Your password" required />
                                </fieldset> 
                                <fieldset className="mb19">
                                    <label>
                                        Confirm password *
                                    </label>
                                    <input type="password" placeholder="Confirm password" required />
                                </fieldset> 
                                <fieldset className="checkbox"> 
                                    <input type="checkbox" id="checkbox" name="checkbox"  />
                                    <label htmlFor="checkbox" className="icon"></label>
                                    <label htmlFor="checkbox">
                                        I accept the Term of Conditions and Privacy Policy
                                    </label>
                                </fieldset>
                            </div>
                        </div> 

                        <div className="wrap-btn">
                            <button type="submit" className="tf-button style2">
                                Register
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

export default Register;