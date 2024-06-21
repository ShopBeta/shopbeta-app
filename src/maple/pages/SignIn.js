import React from "react";
import { Link } from "react-router-dom";
import img from '../assets/images/search.png';


const SignIn = () => {

        return(
                <div className="pv4">
                    <main>
                        <div className="pv3 tc">
                            <p className="f3 pv3">Sign In</p>
                            <p className="f5">Hi! Welcome Back, you've been missed</p>
                        </div>

                        <form className="pa3 container" style={{width: '360px'}}>
                            <div className="tl pv2">
                                <p className="pv2 f5">Email</p>
                                <input type="email" name="email" className="email b--transparent ba field-color br3 pa3 w-100" placeholder="example@gmail.com" required autoComplete="email" />
                            </div>
                            <div className="tl pv2">
                                <p className="pv2 f5">Password</p>
                                <div className="br4 field-color bw2">
                                    <span className="">
                                        <input style={{width: '88%'}} type="password" name="password" className="password b--transparent ba field-color br3 pa3 w-100" placeholder="12345" minLength={5} aria-hidden required />
                                    </span>
                                    <span className="">
                                        {/* <i style={{width: '12%'}} className="fi fi-rs-eye f3 pointer pa2"></i> */}
                                        <i style={{width: '12%'}} className="fi fi-rs-crossed-eye f3 pointer pa2"></i>
                                    </span>
                                </div>
                            </div>

                            <div id="error" style={{display: 'none'}} className="fw5 f6 red">
                                <div className="pv2">
                                    <small className="icon-info f6 ph2"></small>
                                    Sorry something went wrong, pls try again later!
                                </div>
                            </div>

                            <div className="tr pv2">
                                <Link 
                                    to={"../maple/pages/forgotpassword"} className="red link">
                                    <p className="red">
                                        Forgot Password?
                                    </p>
                                </Link>
                            </div>
                            <div className="pv4 tc">
                                <div id="signin" className="tc">
                                    <button type="submit" className="button-bg bg-red b--transparent white pa2 f4 tc br-pill ba w-100 pointer pv3">
                                        Sign In
                                    </button>
                                </div>
                                <div id="success" style={{display: 'none'}}>
                                    <div className="pv4">
                                        <small className="icon-check f2 green"></small>
                                        <p className="green pv2 f4">Welcome Back</p>
                                    </div>
                                </div>
                            </div>

                            <div className="pv4 tc">
                                <div className="pv1">
                                    <p>or</p>
                                </div>
                                
                                <div className="pv2">
                                    <button type="submit" className="button-bg bg-transparent pa2 tc br-pill ba pointer w-90 pv3">
                                        <div className="link tj flex flex-wrap black ph4">
                                            <span className="ph2">
                                                <img src={img} alt="logo" className="" width="20px" height="20px" />
                                            </span>
                                            <span className="pa1">
                                                <p className="f4">Sign in with Google</p>                                               
                                            </span>
                                        </div>
                                    </button>
                                </div>

                            </div>
                        </form>
                    </main>

                    <footer style={{position: 'fixed', width: '100%', backgroundColor: '#ffffff', borderBottom: '1px thin black', borderTop: '1px thick black', bottom: '0', left: '0', marginTop: '1rem', padding: '1rem'}}>
                        <div id="footer">
                            <div className="tc pb4">
                                Don't have an account?
                                <Link 
                                    to={"../maple/pages/signup"} className="red link">
                                    <small className="red f5 ph2">Sign Up</small>
                                </Link>
                            </div>
                        </div>
                    </footer>
                </div>
    );
}

export default SignIn;