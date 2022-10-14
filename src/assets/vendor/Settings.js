import { render } from "@testing-library/react";
import React from "react";
// import { useState,  useEffect } from 'react'
import { Link } from "react-router-dom";
import '../Home.css'
import Navbar from "../../components/Navbar";
import SideBar from "../../components/SideBar";
import Map from "../../containers/Map";
import Preloader from "../../components/Preloader";


const Settings = () => {

const logoutAllClick = async () => {
            await fetch("https://shopbeta-app.herokuapp.com/users/logout", {
                method: 'POST',
            })
            .catch((err) => {
                console.log(err.message)
            })
}

const deleteClick = async () => {
        await fetch("https://shopbeta-app.herokuapp.com/users/me", {
            method: 'DELETE',
        })
        .then((res) => res.json())
        .then((data) => console.log(data))
         .catch((err) => {
                console.log(err.message)
            })
}

    render()
        return(
            <div className="home">
                <Preloader />
                <Navbar />
                    <div className="dt dt--fixed">
                       <div className="flex flex-wrap">
                           <SideBar />
                        <div className="w-40">
                            <Map />
                        </div>
                         <div style={{ overflowY: 'scroll', height: '530px'}} className="pv3 pa4 code w-50">
                            <form action="https://shopbeta-app.herokuapp.com/users/me" method="patch">
                                <div className="tl pv2">
                                    <h3 className="pv2">Change Settings</h3>
                                    <p className="pv1 f5 fw5">Change Username</p>
                                    <input type="text" name="username" className="br3 ba pa2 w-100" placeholder="Type in new username..." />
                                </div>
                                <div className="tl pv2">
                                    <p className="pv1 f5 fw5">Change Bio</p>
                                    <p className="pv2">
                                        <textarea id="myInput" name="bio" className="br3 ba pa2 w-100 h3" placeholder="Something about your profile..." aria-label="With textarea"></textarea>
                                    </p>
                                </div>
                                <div className="tl pv2">
                                    <p className="f5 fw5">Add Location</p>
                                    <input type="text" name="location" className="br3 ba pa2 w-100" placeholder="Type in your location..." />
                                </div>
                                <div className="tl pv2">
                                    <p className="pv1 f5 fw5">Add Phone Number</p>
                                    <input type="tel" name="phonenumber" className="br3 ba pa2 w-100" placeholder="Input phone number..." />
                                </div>
                                <div className="tl pv2">
                                    <p className="pv1 f5 fw5">Set new Email</p>
                                    <input type="email" name="email" className="br3 ba pa2 w-100" placeholder="Your email..." />
                                </div>
                                <div className="tl pv2">
                                    <p className="pv1 f5 fw5">Set Password</p>
                                    <input type="password" className="br3 ba pa2 w-100" placeholder="Type in your new password..." />
                                </div>
                                <div className="tl pv2">
                                    <p className="pv1 f5 fw5">Repeat Password</p>
                                    <input type="password" name="password" className="br3 ba pa2 w-100" placeholder="Repeat password..." />
                                </div>
                                <p className="pv2">
                                    <p className="f5 fw5">Set new Profile photo</p>
                                    <div className="pv2 br-pill">
                                        <input type="file" name="avatar" className="pa3 w-90 ba br3" id="customFile" />
                                    </div>
                                </p>
                                <p className="tr">
                                    <Link to={"../Assets/Vendor/Profile"} className="link"><button type="submit" className="bg-orange white hover-bg-mid-gray pa2 tc br3 ph4 ma1 grow b fw6">Save</button></Link>
                                </p>
                                <div>
                                    <div className="pv2">
                                        <div className="pa3 pv1 tj f6">
                                            <h3 className="pv1">
                                                <small className="icon-info pr2 f5 blue"></small>
                                                Some tips
                                            </h3>
                                            <div className="code fw6">
                                                <p>Ensure to upload high quality images</p>
                                                <p className="pv2">Image file size shouldn't exceed 5MB</p>
                                                <p>680x680 is best recommended</p>
                                            </div>
                                        </div>
                                <div className="tc pv2">
                                    <span className="tc">
                                        <a href="src/assets/indexes/Login Boxed.html" onClick={logoutAllClick} className="link"><button className="bg-blue white hover-bg-mid-gray pa2 pointer tc br3 ph3 ma1 grow b fw6"> Log-out all devices</button></a>
                                    </span>
                                    <span className="tc">
                                        <a href="src/assets/indexes/Login Boxed.html" onClick={deleteClick} className="link"><button className="bg-red white hover-bg-mid-gray pa2 pointer tc br3 ph4 ma1 grow b fw6"> Delete Account</button></a>
                                    </span>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Settings;