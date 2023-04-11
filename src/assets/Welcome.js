import React from "react";
import 'tachyons'
import './Home.css'
import img from '../images/shopbeta logo.png'
import img1 from '../images/e-commerce-online.jpg'
import { Link } from "react-router-dom";
import Preloader from "../components/Preloader";


const Welcome = () => {

        return(
            <div className="bg-white tc">
                <div className="pa2 pv5">
                <Preloader />
                    <div className="tc">
                        <div className="pa2">
                            <div className='tc code' style={{fontSize: '27px', fontWeight: '500'}}><img src={img} alt="logo" className="tc" width="75px" height="75px" /></div>
                            <p className="pv4 fw6 tc ph3">
                                <small className="f3 orange">Welcome to ShopBeta<br/></small>
                                <small className="green f4">Seamlessly interact with buyers and sellers anytime, anywhere.</small>
                            </p>
                            <div className="">
                                <div className='tc code' style={{fontSize: '27px', fontWeight: '500'}}><img src={img1} alt="logo" className="tc" width="200px" height="200px" /></div>
                                <div className="pv2 tc">
                               <span> 
                                    <Link to={"/assets/indexes/Login"}>
                                        <button className="index-button f6 pointer ba hover-bg-mid-gray pa3 tc br-pill ph5 ma1 grow b fw6"><small className="icon-arrow-left pr2"></small>Login</button>
                                    </Link>
                                </span>
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