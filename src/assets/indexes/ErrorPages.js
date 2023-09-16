import React from "react";
import 'tachyons'
import '../Home.css'
import { Link } from "react-router-dom";
import img from '../../images/alert-concept-illustration_114360-388.avif'
import img1 from '../../images/sign-concept-illustration_114360-5267.avif'


const NetworkError = () => {

        return(
            <div className="bg-white tc">
                <div className="pa2">
                    <div className="tc pt4">
                        <div className="pa2">
                            <p className="fw6 tc ph3">
                                <small className="f3 orange">Network Error<br/></small>
                                <small className="green f4">Check your internet connection</small>
                            </p>
                            <div className="">
                                <img src={img} alt="network-error" width="400px" height="400px" className="tc" />
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
            <div className="pa2">
                <div className="pa2">
                    <p className="fw6 tc ph3">
                        <small className="f3 orange">You're not logged in!<br/></small>
                        <small className="green f4">login your account or signup if you don't have an account.</small>
                    </p>
                    <img src={img1} alt="error" width="400px" height="400px" className="tc"/>
                        <div className="pt3 tc">
                           <span> 
                                <Link to={"/assets/indexes/Login"}>
                                    <button className="index-button f5 pointer ba hover-bg-mid-gray pa3 tc br-pill ph5 ma1 grow b fw6">Login<small className="icon-arrow-right pl2"></small></button>
                                </Link>
                            </span>
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