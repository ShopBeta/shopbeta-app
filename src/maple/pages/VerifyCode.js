import React from "react";
// import { useState } from "react";
import { Link } from "react-router-dom";


const VerifyCode = () => {

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
        // verifyCode()
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
                                <small style={{fontSize: '35px'}} className=""></small> 
                            </span>
                        </div>
                    </div>

                    <main>
                        <div className="pv3 tc">
                            <p className="f3 pv3">Verify Code</p>
                            <p className="f5">Please enter the code we just sent to your email <br /> <small className="f5 red">example@gmail.com</small></p>
                        </div>
                        <form onSubmit={handleSubmit} className="pa3 container" style={{width: '360px'}}>
                            <div className="tc">
                                <div className="navbar navbar-expand-lg tc">
                                    <div style={{fontSize: '29px'}} className="pv3 container">
                                        <span className="navbar-brand br4 field-color pa3 bw2">
                                            <input style={{width: '40px', height: '10px'}} type="number" name="code1" className="code1 b--transparent bg-transparent tc f5 ba br3 pa3 pointer" required maxLength={1} />
                                        </span>
                                        <span className="navbar-brand br4 field-color pa3 bw2">
                                            <input style={{width: '40px', height: '10px'}} type="number" name="code2" className="code2 b--transparent bg-transparent tc f5 ba br3 pa3 pointer" required maxLength={1} />
                                        </span>
                                        <span className="navbar-brand br4 field-color pa3 bw2">
                                            <input style={{width: '40px', height: '10px'}} type="number" name="code3" className="code3 b--transparent bg-transparent tc f5 ba br3 pa3 pointer" required maxLength={1} />
                                        </span>
                                        <span className="navbar-brand br4 field-color pa3 bw2">
                                            <input style={{width: '40px', height: '10px'}} type="number" name="code4" className="code4 b--transparent bg-transparent tc f5 ba br3 pa3 pointer" required maxLength={1} />
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="tc pv4">
                                <p>Didn't receive OTP?</p>
                                <Link 
                                    to={"#"} className="red pointer">
                                    <p className="pv2">
                                        Resend code
                                    </p>
                                </Link>
                            </div>
                            <div className="tc">
                                <div id="verifycode" className="">
                                    <button onClick={handClick} type="submit" className="button-bg bg-red b--transparent white pa2 tc br-pill ba pointer w-100 pv3">
                                       Verify
                                    </button>
                                </div>
                                <div id="error" style={{display: 'none'}} className="fw5 pv3 f5 red">
                                    {/* {errMessage}<br/> */}
                                    <small className="icon-info red f5 ph2"></small>
                                    Wrong OTP code, pls try again later!
                                </div>
                            </div>
                        </form>
                    </main>
                </div>
    );
}

export default VerifyCode;