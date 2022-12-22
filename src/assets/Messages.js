import React from "react";
import './Home.css'
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import img from '../images/tst-image3.jpg'
import img1 from '../images/space scenery.jpg'
import Preloader from "../components/Preloader";
import FollowCardList from "../containers/FollowCardList";


const Messages = () => {
    
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch("https://shopbeta-app.herokuapp.com/users", {
            method: "GET",
            headers: {
                'Accept' : 'application/json, text/plain',
                'Content-Type' : 'application/json' 
            },
        })
        .then((res) => res.json())
        .then((data) => setUsers(data))
        .catch((err) => {
            console.log(err.message)
        })
    }, [])

    console.log(users)


        return(
               <div className="tc">
                <div>
                    <Preloader />
                    {/* <Navbar /> */}

                    <div className="pa2 tl">
                    <span style={{color: '#ee9617', fontSize: '23px', fontWeight: '500', letterSpacing: '-1px'}} className="tj code">Your messages</span>
                        <span className="f3 tr">
                            <Link to={"../"} title="home" className="link black icon-home pv2 ph4"></Link>
                            <Link to={"../assets/Adbillboard"} title="feed" className="pv2 icon-picture black ph4" ></Link>
                            <Link className="link f3 black ph4 icon-settings pointer hover-bg-light-blue br3 pa2 grow"to={"/assets/vendor/Settings"}></Link>
                        </span>
                    </div>
                    <div className="tc">
                        <p className="pt3 bg-white">
                                <div className="tj w-100 flex flex-wrap">
                                    {
                                        users.map(
                                            users => {
                                                return (
                                                    <img src={`https://shopbeta-app.herokuapp.com/users/${users._id}/avatar`} alt="avatar..." onClick={() => {window.history.pushState(null, "", users._id)}} className="br-100 pointer grow ph3" width="60px" height="60px" />
                                                )
                                            }
                                        )
                                    }
                                </div>
                            </p>
                            <p className="pv3 tr bg-white">
                                <div className="pa1 w-100 ph2 fw6">
                                    <span className="f4 ph2"></span>
                                    <span className="f4 pa1 fw4 code pl5 fw3"><small className="f3">Joseph John</small></span>
                                    {/* <span className="icon-phone f4 ph3"><small className="f3 code ph2">0809079899</small></span> */}
                                </div>
                            </p>
                        </div>
                            <div style={{overflowY: 'auto', height: '600px', width: '430px'}} className="dib tc">
                                <div className="br3 pa2 b--black">
                                    <div className="br3 pa2 w-100">
                                        <div className="pv2 pointer tj flex flex-wrap">
                                            <img src={img} alt="Accessories..." className="br-100" width="55px" height="55px" />
                                            <span className="pa2 fw5 f4">
                                                Kimi
                                                <p className="f6 pa1 code orange fw3"><small className="icon-location-pin pr2"></small>ShopBeta, Inc.</p>
                                            </span>
                                            <div className="pv2">
                                                <div className="bg-light-blue pa3 br4">
                                                    Welcome to ShopBeta! <br/>ShopBeta social commerce platform enables better shoping experience with features easy to use, like product and store ratings, store or seller's location, recommendations and an Ad billboard to help customers make better decisions.
                                                </div>
                                                <small class="opacity-6 code">
                                                    <i class="pr2"></i>
                                                    just now | Today
                                                </small>
                                            </div>
                                        </div>
                                        <div className="pv2 pointer tr">
                                            <div className="pv2">
                                                <div className="bg-light-blue pa3 br4">
                                                    Connect with other social shoppers and make better purchases. We hope you have a great Social Shopping experience.
                                                </div>
                                                <small class="opacity-6 code">
                                                    <i class="pr2 tr"></i>
                                                    just now | Today
                                                </small>
                                                </div>
                                        </div>
                                        <div className="pv2 pointer tj flex flex-wrap">
                                            <img src={img} alt="Accessories..." className="br-100" width="55px" height="55px" />
                                            <span className="pa2 fw5 f4">
                                                Kimi
                                                <p className="f6 pa1 code orange fw3"><small className="icon-location-pin pr2"></small>ShopBeta, Inc.</p>
                                            </span>
                                            <div className="pv2">
                                                <div className="bg-light-blue orange pa3 br4">
                                                    Coming soon! <br/> This messaging feature is launching soon
                                                </div>
                                                <small class="opacity-6 code">
                                                    <i class="pr2"></i>
                                                    just now | Today
                                                </small>
                                            </div>
                                        </div>
                                        <div className="pv2 pointer tr">
                                            <div className="pv2">
                                                <div className="bg-light-blue pa3 br4">
                                                    Connect with other social shoppers and make better purchases. We hope you have a great Social Shopping experience.
                                                </div>
                                                <small class="opacity-6 code">
                                                    <i class="pr2 tr"></i>
                                                    just now | Today
                                                </small>
                                                </div>
                                        </div>
                                        <div className="pv2 pointer tj">
                                            <div className="tj flex flex-wrap">
                                                <img src={img} alt="Accessories..." className="br-100" width="55px" height="55px" />
                                                <span className="pa2 fw5 f4">
                                                    Kimi
                                                    <p className="f6 pa1 code orange fw3"><small className="icon-location-pin pr2"></small>ShopBeta, Inc.</p>
                                                </span>
                                            </div>
                                                    <div className="pv2">
                                                        <div className="bg-light-blue pa3 br4">
                                                            Contact us at shopbeta22@gmail.com or call +2347048958530 for any info.
                                                        </div>
                                                        <small class="opacity-6 code">
                                                            <i class="pr2"></i>
                                                            just now | Today
                                                        </small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>                
                                <div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white pv3 tc" style={{position: 'static', width: '100%'}}>
                        <span id="message-form" className="pv2">
                            <input name="message" id="message-input" type="text" className="pa3 ba br-pill w-80" placeholder="Type your message..." required autoComplete="off"/>
                            <small id="send-message" className="icon-paper-plane pointer grow blue f3 pa2"></small>
                            <small id="send-message" className="icon-picture pointer grow blue f3 pa2"></small>
                            {/* <small type="file" title="send media file" className="icon-camera pointer f3 pa2"></small> */}
                        </span>
                    </div> 
                </div>
        );
}

export default Messages;