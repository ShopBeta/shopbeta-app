import React from "react";
import { useState } from "react";
import 'tachyons';  
import img from '../images/tst-image3.jpg'
import img1 from '../images/shopbeta logo -1.png'
import MessageModal from "../containers/MessageModal";

const SocialCard = () => {

    return(
       <div className="dib pt3">
            <div className="tc">
                <div className="br3 pa4 b--black">
                        <p className="pv2 fw5">
                            <div className="pv2 ph2 fw6 tl f4">
                                Welcome to Social commerce!
                            </div>
                        </p>
                        {/* style={{ overflowY: 'auto', height: '400px'}} */}
                        <div className="pv2 w-100">
                        <div className="pv3 pointer tj flex flex-wrap">
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
                <div className="pv3 pointer tj">
                            <div className="tj flex flex-wrap">
                                <img src={img1} alt="Accessories..." className="br-100" width="55px" height="55px" />
                                <span className="pa2 fw5 f4">
                                    ShopBeta Team
                                    <p className="f6 pa1 code orange fw3"><small className="icon-location-pin pr2"></small>ShopBeta, Inc.</p>
                                </span>
                            </div>
                            <div className="pv2">
                                <div className="bg-light-blue pa3 br4">
                                    Connect with other social shoppers and make better purchases. We hope you have a great Social Shopping experience.
                                </div>
                                <small class="opacity-6 code">
                                    <i class="pr2"></i>
                                        just now | Today
                                </small>
                            </div>
                </div>
                <div className="pv3 pointer tj">
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
            </div>
        </div>
    )
}

export default SocialCard;