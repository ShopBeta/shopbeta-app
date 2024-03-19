import React from "react";
// import { useState } from "react";
import { Link } from "react-router-dom";


const NewPassword1 = () => {

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
                <div className="">
                    <div className="navbar navbar-expand-lg tc">
                        <div style={{fontSize: '29px'}} className="pv3 container">
                            <span className="pointer">
                                <Link 
                                    to={"../maple/pages/signup"} className="link black pointer">
                                    <small style={{fontSize: '35px'}} className="icon-arrow-left-circle"></small>
                                </Link>
                            </span>
                            <span className="navbar-brand pointer">
                                <small className="f5"></small>
                            </span>
                            <span className="navbar-brand pointer">
                                <Link 
                                    to={"../maple/pages/signin"} className="link black">
                                    <small style={{fontSize: '35px'}} className=""></small> 
                                </Link>
                            </span>
                        </div>
                    </div>

                    <main>
                        <div className="pv3 tc">
                            <p className="f3 pv3">New Password</p>
                            <p className="f5">Your new password must be different<br /> from previously used passwords</p>
                        </div>
                        <form onSubmit={handleSubmit} className="pa3 container" style={{width: '360px'}}>
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
                            <div className="tl pv2">
                                <p className="pv2 f5">Confirm Password</p>
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
                            <div id="error" style={{display: 'none'}} className="fw5 pv3 f5 red">
                                {/* {errMessage}<br/> */}
                                <small className="icon-info red f5 ph2"></small>
                                Sorry something went wrong, pls try again later!
                            </div>
                            <div className="pv4 tc">
                                <div id="new-password" className="">
                                    <button onClick={handClick} type="submit" className="button-bg bg-red b--transparent white pa2 tc br-pill ba pointer w-100 pv3">
                                        Create New Password
                                    </button>
                                </div>
                                <div id="success" style={{display: 'none'}}>
                                    <div className="pv4">
                                        <small className="icon-check f2 green"></small>
                                        <p className="green pv2 f4">Successful</p>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </main>
                </div>
    );
}

export default NewPassword1;