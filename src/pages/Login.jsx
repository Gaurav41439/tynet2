import React from 'react';

import CTA from '../components/cta';
import { Link } from 'react-router-dom';


function Login(props) {
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
                                <div className="project-info-form form-login">
                                    <h6 className="title">Login</h6>
                                    <h6 className="title show-mobie"><Link to="/register">Register</Link></h6>
                                    <h6 className="title link"><Link to="/register">Register</Link></h6>
                                    <p>Enter your credentials to access your account</p>
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
                                    </div>
                                    <Link to="/forgetPass" className="fogot-pass">Fogot password?</Link>
                                </div> 

                                <div className="wrap-btn">
                                    <button type="submit" className="tf-button style2">
                                        Login
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

export default Login;