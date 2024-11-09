import React from 'react';

import CTA from '../components/cta';
import { Link } from 'react-router-dom';

function ConnectWallet(props) {
    return (
        <div className='inner-page'>
            <section className="page-title">
        <div className="overlay"></div> 
    </section>

    <section className="tf-section tf-wallet" data-aos-delay="500" data-aos="fade-up" data-aos-duration="800">
        <div className="container">
            <div className="row">   
                <div className="col-md-12">
                    <div className="wallet-form">
                        <h4>Connect Wallet</h4>
                        <p className="sub">Please Choose a network & select a wallet to connect to this marketplace</p>
                        <div className="spacing"></div>

                        <div className="choose-network flat-tabs">
                            <h6>Choose network</h6>
                            <ul className="menu-tab">
                                <li className="active">
                                    <img src={require ("../assets/images/common/wallet_1.png")} alt="" />
                                    <span>BSC</span>
                                </li>
                                <li>
                                    <img src={require ("../assets/images/common/wallet_2.png")} alt="" />
                                    <span>ETH</span>
                                </li>
                                <li>
                                    <img src={require ("../assets/images/common/wallet_3.png")} alt="" />
                                    <span>BTC</span>
                                </li>
                                <li>
                                    <img src={require ("../assets/images/common/wallet_4.png")} alt="" />
                                    <span>XRP</span>
                                </li>
                            </ul>
                        </div>

                        <div className="connect-wallet">
                            <h6>Connect wallet</h6>
                            <ul>
                                <li>
                                    <Link to="#"><img src={require ("../assets/images/common/wallet_5.png")} alt="" />
                                        <span>MetaMask</span>
                                        <span className="icon">
                                            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.1875 1.375L6.8125 7L1.1875 12.625" stroke="#798DA3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg> 
                                        </span>
                                    </Link>
                                </li>

                                <li>
                                    <Link to="#">
                                        <img src={require ("../assets/images/common/wallet_6.png")} alt="" />
                                        <span>Coibase Walet</span>
                                        <span className="icon">
                                            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.1875 1.375L6.8125 7L1.1875 12.625" stroke="#798DA3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg> 
                                        </span>
                                    </Link>
                                </li>

                                <li>
                                    <Link to="#">
                                        <img src={require ("../assets/images/common/wallet_7.png")} alt="" />
                                        <span>WaletConnect</span>
                                        <span className="icon">
                                            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.1875 1.375L6.8125 7L1.1875 12.625" stroke="#798DA3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg> 
                                        </span>
                                    </Link>
                                </li>

                                <li>
                                    <Link to="#">
                                        <img src={require ("../assets/images/common/wallet_8.png")} alt="" />
                                        <span>Phantom</span>
                                        <span className="icon">
                                            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.1875 1.375L6.8125 7L1.1875 12.625" stroke="#798DA3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg> 
                                        </span>
                                    </Link>
                                </li>

                                <li>
                                    <Link to="#">
                                        <img src={require ("../assets/images/common/wallet_9.png")} alt="" />
                                        <span>Core</span>
                                        <span className="icon">
                                            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.1875 1.375L6.8125 7L1.1875 12.625" stroke="#798DA3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg> 
                                        </span>
                                    </Link>
                                </li>

                                <li>
                                    <Link to="#">
                                        <img src={require ("../assets/images/common/wallet_10.png")} alt="" />
                                        <span>Bitski</span>
                                        <span className="icon">
                                            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.1875 1.375L6.8125 7L1.1875 12.625" stroke="#798DA3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg> 
                                        </span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="bottom">
                            By connecting your wallet, you agree to our <Link to="#">Terms of Service</Link> and our <Link to="#">Privacy Policy</Link>.
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

export default ConnectWallet;