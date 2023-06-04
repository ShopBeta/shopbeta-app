import React from "react";
import 'tachyons'
import '../Home.css'
import img from '../../images/shopbeta logo.png'
import img1 from '../../images/500.png'
import { Link } from "react-router-dom";
import Preloader from "../../components/Preloader";


const ServerError = () => {

        return(
            <div className="bg-white tc">
                <div className="pa2 pv5">
                <Preloader />
                    <div className="tc">
                        <div className="pa2">
                            <div className='tc code' style={{fontSize: '27px', fontWeight: '500'}}><img src={img} alt="logo" className="tc" width="75px" height="75px" /></div>
                            <p className="pv4 fw6 tc ph3">
                                <small className="f3 orange">500<br/></small>
                                <small className="green f4">Internal Server Error<br/></small>
                                <small className="f5">Something went wrong with our server, please try again later.</small>
                            </p>
                            <div className="">
                                <div className='tc code' style={{fontSize: '27px', fontWeight: '500'}}><img src={img1} alt="500 error" className="tc" width="200px" height="200px" /></div>
                                <div className="pv2 tc">
                                <span> 
                                    <Link to={"/assets/AdbillBoard"}>
                                        <button className="index-button f6 pointer ba hover-bg-mid-gray pa3 tc br-pill ph5 ma1 grow b fw6">Go to Home<small className="icon-arrow-right pl2"></small></button>
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

export default ServerError;