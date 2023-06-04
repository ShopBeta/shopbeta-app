import React from "react";
import 'tachyons'
import '../Home.css'
import { Link } from "react-router-dom";
import img from '../../images/network-error-1.png'
import img1 from '../../images/e-commerce-online.jpg'
import Preloader from "../../components/Preloader";


const NetworkError = () => {

        return(
            <div className="bg-white tc">
                <div className="pa2 pv4">
                <Preloader />
                    <div className="tc">
                        <div className="pa2">
                            <p className="pv4 fw6 tc ph3">
                                <small className="f3 orange">Network Error<br/></small>
                                <small className="green f4">Check your internet connection</small>
                            </p>
                            <div className="">
                                <div className='tc code' style={{fontSize: '27px', fontWeight: '500'}}><img src={img} alt="logo" className="tc" width="200px" height="200px" /></div>
                                <small className="f5 ph4">Something went wrong, please check your internet connection and try again.</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const UserError = () => {

    return(
        <div className="bg-white tc">
            <div className="pa2 pv4">
            <Preloader />
            <div className="tc">
                    <div className="pa2">
                        <p className="pv4 fw6 tc ph3">
                            <small className="f3 orange">You're not logged in!<br/></small>
                            <small className="green f4">login your account or signup if you don't have an account.</small>
                        </p>
                        <div className="">
                            <div className='tc code' style={{fontSize: '27px', fontWeight: '500'}}><img src={img1} alt="error" className="tc" width="200px" height="200px" /></div>
                            <div className="pt5 tc">
                           <span> 
                                <Link to={"/assets/indexes/Login"}>
                                    <button className="index-button f5 pointer ba hover-bg-mid-gray pa3 tc br-pill ph5 ma1 grow b fw6">Login<small className="icon-arrow-right pl2"></small></button>
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


export {
    NetworkError,
    UserError
}