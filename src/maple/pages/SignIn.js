import React from "react";
// import { useState } from "react";
import { Link } from "react-router-dom";
import apple from '../assets/images/apple.png';
import goggle from '../assets/images/search.png';
import facebook from '../assets/images/facebook.png';


const SignIn = () => {

    // const loginUser = async () => {

    //     const user = {
    //         email: document.querySelector('.email').value,
    //         password: document.querySelector('.password').value
    //     }
    
    //     await fetch('https://shopbeta-api.onrender.com/users/login', {
    //         method: 'POST',
    //         headers: {
    //             'Accept' : 'application/json, text/plain',
    //             'Content-Type' : 'application/json'
    //         },
    //         body: JSON.stringify(user)
    //         })
    //         .then((res) => res.json())
    //         .then((data) => {
    //             window.localStorage.setItem("token", data.token)
    //             window.localStorage.setItem("meId", data.user._id)
    
    //             const button_login = document.getElementById('login')
    //             button_login.style['display'] = 'none'
            
    //             const button_home = document.getElementById('home')
    //             button_home.style['display'] = 'contents'
    
    //             const check = document.getElementById('check')
    //             check.style['display'] = 'none'
    
    //             const error = document.getElementById('error')
    //             error.style['display'] = 'none'
    //         })
    //         .catch((err) => {
    //             console.log(err.message)
    
    //             const error = document.getElementById('error')
    //             error.style['display'] = 'contents'
    //         })
    // }
    
    const handClick = (event) => {
        event.currentTarget.innerHTML = 'Loading...';
        event.currentTarget.style.fontWeight = 'bold';
    }
    
    const token = localStorage.getItem("token")
    const me = localStorage.getItem("meId")
    
    console.log(token)
    console.log(me)
    
    const handleSubmit = e => {
        e.preventDefault()
        // loginUser()
    }

        return(
                <div className="pv3">
                    <main>
                        <div className="pv3 tc">
                            <p className="f3 pv3">Sign In</p>
                            <p className="f5">Hi! Welcome Back, you've been missed</p>
                        </div>
                        <form onSubmit={handleSubmit} className="pa3 container" style={{width: '360px'}}>
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
                                    {/* {errMessage}<br/> */}
                                    <small className="icon-info f6 ph2"></small>
                                    Sorry something went wrong, pls try again later!
                                </div>
                            </div>
                            <div className="tr pv2">
                                <Link 
                                    to={"../maple/pages/forgotpassword"} className="red">
                                    <p className="red">
                                        Forgot Password?
                                    </p>
                                </Link>
                            </div>
                            <div className="pv4 tc">
                                <div id="signin" className="tc">
                                    <button  onClick={handClick} type="submit" className="button-bg bg-red b--transparent white pa2 tc br-pill ba w-100 pointer pv3">
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
                        </form>
                    </main>

                    <footer style={{position: 'fixed', width: '100%', backgroundColor: '#ffffff', borderBottom: '1px thin black', borderTop: '1px thick black', bottom: '0', left: '0', marginTop: '1rem', padding: '1rem'}}>
                        <div id="proceed" style={{display: 'none'}} className="navbar navbar-expand-lg tc">
                            <div  style={{fontSize: '29px', width: '360px'}} className="pv3 container">
                                <span  className="navbar-brand pointer">
                                    <small style={{fontSize: '35px'}} className=""></small>
                                </span>
                                <span className="navbar-brand pointer">
                                    <small className="f5"></small>
                                </span>
                                <span className="pointer">
                                    <Link 
                                        to={"../maple/pages/verifycode"} className="link black">
                                        <small style={{fontSize: '35px'}} className="icon-arrow-right-circle red"></small> 
                                    </Link>
                                </span>
                            </div>
                        </div>
                        
                        <div id="footer">
                            <div className="tc container">
                                <small className="f6">Or sign in with</small>
                            </div>
                            <nav className="navbar navbar-expand-lg tc">
                                <div style={{fontSize: '29px', width: '360px'}} className="pv3 container">
                                    <small className="tc">
                                        <Link 
                                            to={"../pages/shop"} className="link black">
                                            <img src={apple} alt="apple" className="br-pill field-color pa4 bw2" width="25px" height="25x" />
                                        </Link>
                                    </small>
                                    <small className="tc">
                                        <Link 
                                            to={"../pages/shop"} className="link black">
                                            <img src={goggle} alt="goggle" className="br-pill field-color pa4 bw2" width="25px" height="25x" />
                                        </Link>
                                    </small>
                                    <small className="tc">
                                        <Link 
                                            to={"../pages/shop"} className="link black">
                                            <img src={facebook} alt="facebook" className="br-pill field-color pa4 bw2" width="25px" height="25x" />
                                        </Link>
                                    </small>
                                </div>
                            </nav>
                            <div className="tc pb4">
                                Don't have an account?
                                <Link 
                                    to={"../maple/pages/signup"} className="red">
                                    <small className="red f5 ph2">Sign Up</small>
                                </Link>
                            </div>
                        </div>
                    </footer>
                </div>
    );
}

export default SignIn;