import React from "react";
import 'tachyons'
import '../Home.css'
import img1 from '../../images/network-error-1.png'
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
                                <small className="green f4">Check your internet connetion</small>
                            </p>
                            <div className="">
                                <div className='tc code' style={{fontSize: '27px', fontWeight: '500'}}><img src={img1} alt="logo" className="tc" width="200px" height="200px" /></div>
                                
                                <small className="f5 ph4">Something went wrong, please check your internet connection and try again.</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NetworkError;