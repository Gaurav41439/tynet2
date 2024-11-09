import React from 'react';

import CTA from '../components/cta';
import PageTitle from '../components/pagetitle';
import { Link } from 'react-router-dom';


function TeamDetails(props) {
    return (
        <div className='inner-page'>
            {<PageTitle title='Team Details' />}

            <section className="tf-section tf-team-details pt60">
        <div className="container">
            <div className="row"> 
                <div className="col-md-12">
                    <div className="team-details">
                        <div className="image_wrapper">
                            <div className="image">
                                <img src={require ("../assets/images/common/team_5.png")} alt="" />
                            </div>
                            <ul className="social">
                                <li>
                                    <Link to="#">
                                        <svg width="13" height="22" viewBox="0 0 13 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.20381 22V11.9655H11.5706L12.0757 8.05372H8.20381V5.55662C8.20381 4.42442 8.51692 3.65284 10.1423 3.65284L12.212 3.65199V0.153153C11.8541 0.10664 10.6255 0 9.19548 0C6.20942 0 4.16511 1.82266 4.16511 5.1692V8.05372H0.788086V11.9655H4.16511V22H8.20381Z" fill="#798DA3"></path>
                                            </svg>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        <svg width="23" height="18" viewBox="0 0 23 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M22.5 2.17863C21.6819 2.5375 20.8101 2.77537 19.9012 2.89087C20.8363 2.33262 21.5499 1.45537 21.8854 0.398C21.0136 0.91775 20.0511 1.28488 19.0254 1.48975C18.1976 0.608375 17.0179 0.0625 15.7309 0.0625C13.2339 0.0625 11.2236 2.08925 11.2236 4.57388C11.2236 4.93138 11.2539 5.27512 11.3281 5.60237C7.5785 5.4195 4.26063 3.62238 2.03175 0.88475C1.64262 1.55988 1.41438 2.33262 1.41438 3.1645C1.41438 4.7265 2.21875 6.11112 3.41775 6.91275C2.69313 6.899 1.98225 6.68862 1.38 6.35725C1.38 6.371 1.38 6.38888 1.38 6.40675C1.38 8.5985 2.94337 10.419 4.9935 10.8384C4.62637 10.9388 4.22625 10.9869 3.811 10.9869C3.52225 10.9869 3.23075 10.9704 2.95712 10.9099C3.5415 12.696 5.19975 14.0091 7.1715 14.0518C5.637 15.2521 3.68863 15.9754 1.57938 15.9754C1.2095 15.9754 0.85475 15.9589 0.5 15.9135C2.49787 17.2019 4.86562 17.9375 7.419 17.9375C15.7185 17.9375 20.256 11.0625 20.256 5.10325C20.256 4.90387 20.2491 4.71138 20.2395 4.52025C21.1346 3.885 21.8867 3.09162 22.5 2.17863Z" fill="#798DA3"></path>
                                            </svg>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18.3003 17.8V11.354C18.3003 8.18599 17.6183 5.76599 13.9223 5.76599C12.1403 5.76599 10.9523 6.73399 10.4683 7.65799H10.4243V6.05199H6.92627V17.8H10.5783V11.97C10.5783 10.43 10.8643 8.95599 12.7563 8.95599C14.6263 8.95599 14.6483 10.694 14.6483 12.058V17.778H18.3003V17.8Z" fill="#798DA3"></path>
                                            <path d="M0.986328 6.052H4.63833V17.8H0.986328V6.052Z" fill="#798DA3"></path>
                                            <path d="M2.8122 0.200012C1.6462 0.200012 0.700195 1.14601 0.700195 2.31201C0.700195 3.47801 1.6462 4.44601 2.8122 4.44601C3.9782 4.44601 4.9242 3.47801 4.9242 2.31201C4.9242 1.14601 3.9782 0.200012 2.8122 0.200012Z" fill="#798DA3"></path>
                                            </svg>
                                    </Link>
                                </li>
                            </ul>
                        </div> 
                        <div className="content">
                            <h5 className="name">Darrell Steward</h5>
                            <p className="position">Developer</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fringilla rutrum eros, 
                                vitae fringilla metus sodales vel. Praesent vehicula ac nunc sit amet rhoncus. 
                                In vel ligula et nulla scelerisque suscipit. Quisque in nisi viverra, 
                                mattis felis id, porttitor dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fringilla rutrum eros, 
                                vitae fringilla metus sodales vel. Praesent vehicula ac nunc sit amet rhoncus. 
                                In vel ligula et nulla scelerisque suscipit. Quisque in nisi viverra, mattis felis id, porttitor dui. 
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            </p>
                            <p>
                                Donec interdum nisl sed tellus euismod ultricies. Integer eu lacus tellus. 
                                Phasellus rhoncus tellus maximus dui rhoncus, vitae egestas lacus cursus. 
                                Pellentesque suscipit lorem ac libero lacinia consequat.
                            </p>
                            <div className="spacing"></div>
                            <div className="box">
                                <h6 className="title">
                                    <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.418 2.19922H12.6914V1.67188C12.6914 0.799543 11.9817 0.0898438 11.1094 0.0898438H6.89062C6.01829 0.0898438 5.30859 0.799543 5.30859 1.67188V2.19922H1.58203C0.709699 2.19922 0 2.90892 0 3.78125V15.3828C0 15.674 0.236109 15.9102 0.527344 15.9102H17.4727C17.7639 15.9102 18 15.674 18 15.3828V3.78125C18 2.90892 17.2903 2.19922 16.418 2.19922ZM6.36328 1.67188C6.36328 1.3811 6.59985 1.14453 6.89062 1.14453H11.1094C11.4002 1.14453 11.6367 1.3811 11.6367 1.67188V2.19922H6.36328V1.67188ZM1.58203 3.25391H16.418C16.7087 3.25391 16.9453 3.49047 16.9453 3.78125C16.9453 5.57292 16.5438 6.88101 15.7517 7.66922C14.8822 8.53455 13.7816 8.52935 13.4199 8.52748L10.582 8.52734V8C10.582 7.70877 10.3459 7.47266 10.0547 7.47266H7.94531C7.65408 7.47266 7.41797 7.70877 7.41797 8V8.52734H4.62273H4.60009C4.59791 8.52734 4.59577 8.52734 4.59359 8.52734C3.62225 8.52734 2.83345 8.23147 2.24909 7.64791C1.45656 6.85647 1.05469 5.55552 1.05469 3.78125C1.05469 3.49047 1.29125 3.25391 1.58203 3.25391ZM8.47266 8.52734H9.52734V10.6367H8.47266V8.52734ZM16.9453 14.8555H1.05469V7.86155C1.19134 8.05372 1.34089 8.2315 1.50384 8.39424C2.29314 9.18244 3.33253 9.58207 4.59341 9.58207H4.60153L7.41797 9.58203V11.1641C7.41797 11.4553 7.65408 11.6914 7.94531 11.6914H10.0547C10.3459 11.6914 10.582 11.4553 10.582 11.1641V9.58203C10.6205 9.58203 10.1987 9.58203 13.4149 9.58214C14.5854 9.58839 15.6593 9.24921 16.4957 8.41678C16.6589 8.25446 16.8086 8.07671 16.9453 7.88434V14.8555H16.9453Z" fill="#798DA3"/>
                                    </svg>
                                    Experience:
                                </h6>
                                <ul>
                                    <li>
                                        <span>I have 10 years of software development in different languages</span>
                                    </li>
                                    <li>
                                        <span>2 years of design experience</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="spacing"></div>
                            <div className="box">
                                <h6 className="title">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.84 8.55061C12.5961 8.30666 12.2002 8.30654 11.9561 8.55061L10.7867 9.72008C10.072 9.4198 8.87915 8.22958 8.57696 7.51035L9.74643 6.34088C9.9905 6.09681 9.9905 5.70106 9.74643 5.457L7.31569 3.02625C7.07182 2.78234 6.67583 2.78219 6.43181 3.02625L5.106 4.3521C4.44853 5.00953 4.3681 6.10384 4.87951 7.43344C6.35294 11.2644 11.8747 15.2613 13.945 13.1911L15.2708 11.8652C15.5149 11.6212 15.5149 11.2254 15.2708 10.9814L12.84 8.55061ZM13.061 12.3072C12.7864 12.5817 12.1164 12.5602 11.3123 12.2509C9.23466 11.4518 6.84759 9.06843 6.04614 6.98472C5.73683 6.1806 5.71527 5.51055 5.98981 5.23598L6.87369 4.3521L8.42051 5.89892L7.53667 6.7828C7.30104 7.01839 7.116 7.47184 7.57272 8.29388C8.24281 9.50004 10.5325 11.742 11.5142 10.7604L12.3981 9.87649L13.9449 11.4233L13.061 12.3072Z" fill="#798DA3"/>
                                        <path d="M15.0002 0H5.00005C3.10459 0 1.5625 1.54209 1.5625 3.43755V13.4377C1.5625 15.3332 3.10459 16.8753 5.00005 16.8753H7.77123L9.46418 19.6968C9.70599 20.0998 10.2928 20.1023 10.536 19.6968L12.229 16.8753H15.0002C16.8957 16.8753 18.4378 15.3332 18.4378 13.4377V3.43755C18.4378 1.54209 16.8957 0 15.0002 0ZM17.1877 13.4377C17.1877 14.6439 16.2064 15.6252 15.0002 15.6252H11.8752C11.6556 15.6252 11.4522 15.7404 11.3392 15.9287L10.0001 18.1605L8.66105 15.9287C8.54808 15.7405 8.34464 15.6252 8.1251 15.6252H5.00005C3.79386 15.6252 2.81252 14.6439 2.81252 13.4377V3.43755C2.81252 2.23132 3.79386 1.25002 5.00005 1.25002H15.0002C16.2064 1.25002 17.1877 2.23132 17.1877 3.43755V13.4377Z" fill="#798DA3"/>
                                    </svg>
                                    Contact:
                                </h6>
                                <ul>
                                    <li>
                                        <span>Email: <span className="color-hover">darrellsteward@gmail.com</span></span>
                                    </li>
                                    <li>
                                        <span>Phone: <span className="white">+998 90 808 98 09</span></span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    </section>

            {<CTA />}
            
        </div>
    );
}

export default TeamDetails;