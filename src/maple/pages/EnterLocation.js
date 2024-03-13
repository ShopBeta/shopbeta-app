import React from "react";
// import { useState } from "react";
import { Link } from "react-router-dom";


const EnterLocation = () => {

        return(
                <div className="">
                    <div className="navbar navbar-expand-lg tc">
                        <div style={{fontSize: '29px'}} className="pv3 container">
                            <span className="pointer">
                                <Link 
                                    to={"../maple/pages/location"} className="link black pointer">
                                    <small style={{fontSize: '35px'}} className="icon-arrow-left-circle"></small>
                                </Link>
                            </span>
                            <span className="navbar-brand pointer">
                                <small className="f4">Enter Your Location</small>
                            </span>
                            <span className="navbar-brand pointer">
                                <small style={{fontSize: '35px'}} className=""></small> 
                            </span>
                        </div>
                    </div>

                    <main>
                        <div className="container" style={{width: '360px'}}>
                            <div className="field-color br3 tc">
                                <div className="pointer">
                                    <span className="ph2">
                                        <small className="icon-magnifier f4"></small>
                                    </span>
                                    <span className="">
                                        <input type="search" className="b--transparent ba field-color br3 f5 pa3 w-90" placeholder="Golden Avenue" />
                                    </span>
                                </div>
                            </div>
                            <div style={{fontSize: '17px'}} className="pb2 pt4 pointer">
                                <span className="red">
                                    <small className="icon-paper-plane"></small>
                                </span>
                                <span className="ph2">
                                    <small className="hover-blue">Use my current location</small>
                                </span>
                            </div>
                            <div className="pv2">
                                <div className="gray">
                                    <hr />
                                    <p className="f5 pv3">SEARCH RESULT</p>
                                </div>
                                <div className="pointer grow">
                                    <div className="pv1">
                                        <span className="red">
                                            <small className="icon-paper-plane"></small>
                                        </span>
                                        <span className="ph2 f4">
                                            <small className="">Golden Avenue</small>
                                        </span>
                                    </div>
                                    <div className="f4">
                                        <small className="gray">8052 Preston Rd, Ingl.</small>
                                    </div>
                                    <div id="error" style={{display: 'none'}} className="fw5 f4 red">
                                        <small className="icon-location-pin red f5 pr2"></small>
                                        Sorry couldn't get this location!
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
    );
}

export default EnterLocation;