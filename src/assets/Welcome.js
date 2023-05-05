import React from "react";
import 'tachyons'
import './Home.css'
import img from '../images/shopbeta logo.png'
import img1 from '../images/e-commerce-online.jpg'
// import img2 from '../images/9.jpg'
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Preloader from "../components/Preloader";


const Welcome = () => {

    const me = localStorage.getItem("meId")
    console.log(me)

    const [user, setUser] = useState({})
    useEffect(() => {
        fetch(`https://shopbeta-api.onrender.com/users/${me}`, {
            method: "GET"
        })
        .then((res) => res.json())
        .then((data) => {
            setUser(data)

            const error = document.getElementById('error')
            error.style['display'] = 'none'
        })
        .catch((err) => {
            console.log(err.message)

            const error = document.getElementById('error')
            error.style['display'] = 'contents'

            const user = document.getElementById('user')
            user.style['display'] = 'none'
        })
    }, [me])


        return(
            <div className="bg-white tc">
                <div className="pa2 pv5">
                <Preloader />
                    <div className="tc">
                        <div id="error" style={{display: 'none'}} className="pa2">
                            <div className='tc code' style={{fontSize: '27px', fontWeight: '500'}}><img src={img} alt="logo" className="tc" width="75px" height="75px" /></div>
                            <p className="pv2 fw6 tc ph3">
                                <small className="f3 orange">Welcome to ShopBeta<br/></small>
                                <small className="green f4">Seamlessly interact with buyers and sellers anytime, anywhere.</small>
                            </p>
                            <div className="">
                                <div className='tc code pv5' style={{fontSize: '27px', fontWeight: '500'}}><img src={img1} alt="logo" className="tc" width="200px" height="200px" /></div>
                                <div className="pv2 tc">
                               <span> 
                                    <Link to={"/assets/indexes/Login"}>
                                        <button className="index-button f6 pointer ba hover-bg-mid-gray pa3 tc br-pill ph5 ma1 grow b fw6"><small className="icon-login f6 pr2"></small>Login</button>
                                    </Link>
                                </span>
                                <span> 
                                    <Link to={"/assets/indexes/Signup"}>
                                        <button className="index-button f6 pointer ba hover-bg-mid-gray pa3 tc br-pill ph5 ma1 grow b fw6">Signup<small className="icon-user f6 pl2"></small></button>
                                    </Link>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div id="user" className="pa2">
                            <p className="pv4 fw6 tc ph3">
                                <small className="f3 orange">Welcome Back to ShopBeta<br/></small>
                            </p>
                            <div className="">
                                <div className='tc code' style={{fontSize: '27px', fontWeight: '500'}}><img src={`https://shopbeta-api.onrender.com/users/${me}/avatar`} alt="avatar" className="tc br-100 b--white" width="200px" height="200px" /></div>
                                <div className="">
                                    <h5 className="f4 fw5 tc">
                                        {user.username}
                                    </h5>
                                    <p className="tc pa2 f6 fw4">
                                        {user.location}
                                        <small className="icon-location-pin ph2"></small>
                                    </p>
                                </div>
                               <p className="pv5">
                                    <small className="green f4">Seamlessly interact with buyers and sellers anytime, anywhere.</small>
                               </p>
                                <div className="pv2 tc">
                                <span> 
                                    <Link to={"/assets/Home"}>
                                        <button className="index-button f6 pointer ba hover-bg-mid-gray pa3 tc br-pill ph5 ma1 grow b fw6">Home<small className="icon-arrow-right pl2"></small></button>
                                    </Link>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Welcome;