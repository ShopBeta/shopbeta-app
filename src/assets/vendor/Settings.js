import { render } from "@testing-library/react";
import React from "react";
import { useState,  useEffect } from 'react'
import { Link } from "react-router-dom";
import '../Home.css'
import Navbar from "../../components/Navbar";
import SideBar from "../../components/SideBar";
import img from '../../images/Beauty shop.jpg';
import Map from "../../containers/Map";
import Preloader from "../../components/Preloader";



const Settings = () => {

    const [data, setData] = useState({})

    const formInfo = {
        userName: 'billy',
        password: 'home'
    }

    useEffect(() => {
        fetch("http://localhost:2000/users/me", {
            method: 'PATCH',
            headers: {
                'Content-type': "application/json"
            },
            body: JSON.stringify(formInfo)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }, [])

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
                         <div className="tl pv2">
                            <h3 className="pv2">Change Settings</h3>
                        <p className="pv1 f5 fw5">Change Username</p>
                        <input type="text" className="br3 ba pa2 w-100" placeholder="Type in new username..." />
                    </div>
                    <div className="tl pv2">
                        <p className="pv1 f5 fw5">Change Bio</p>
                        <p className="pv2">
                            <textarea id="myInput" className="br3 ba pa2 w-100 h3" placeholder="Something about your profile..." aria-label="With textarea"></textarea>
                        </p>
                    </div>
                    <div className="tl pv2">
                        <p className="f5 fw5">Add Location</p>
                        <input type="text" className="br3 ba pa2 w-100" placeholder="Type in your location..." />
                    </div>
                    <div className="tl pv2">
                        <p className="pv1 f5 fw5">Add Phone Number</p>
                        <input type="tel" className="br3 ba pa2 w-100" placeholder="Input phone number..." />
                    </div>
                    <div className="tl pv2">
                        <p className="pv1 f5 fw5">Set new Email</p>
                        <input type="email" className="br3 ba pa2 w-100" placeholder="Your email..." />
                    </div>
                    <div className="tl pv2">
                        <p className="pv1 f5 fw5">Set Password</p>
                        <input type="password" className="br3 ba pa2 w-100" placeholder="Type in your new password..." />
                    </div>
                    <div className="tl pv2">
                        <p className="pv1 f5 fw5">Repeat Password</p>
                        <input type="password" className="br3 ba pa2 w-100" placeholder="Repeat password..." />
                    </div>
                    <p className="pv2">
                        <p className="f5 fw5">Set new Profile photo</p>
                        <div className="pv2 br-pill">
                            <input type="file" className="pa3 w-90 ba br3" id="customFile" />
                        </div>
                    </p>
                    <p className="tr">
                        <Link to={"../Assets/Vendor/Profile"} className="link"><button className="bg-orange white hover-bg-mid-gray pa2 tc br3 ph4 ma1 grow b fw6">Save</button></Link>
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
                                    <p>730x920 is best recommended</p>
                                </div>
                            </div>
                            <div className="tc pv2">
                                <span className="tc">
                                    <a href="src/assets/indexes/Login Boxed.html" className="link"><button className="bg-blue white hover-bg-mid-gray pa2 pointer tc br3 ph3 ma1 grow b fw6"> Log-out all devices</button></a>
                                </span>
                                <span className="tc">
                                    <a href="src/assets/indexes/Login Boxed.html" className="link"><button className="bg-red white hover-bg-mid-gray pa2 pointer tc br3 ph4 ma1 grow b fw6"> Delete Account</button></a>
                                </span>
                            </div>
                        </div>
                    </div>
                         </div>
                       </div>
                        {/* <Map /> */}
                    </div>
                    </div>
        );
}

export default Settings;