import React from "react";
import 'tachyons'

const HelpCard = () => {
    return(
        <div className="sidebar w-20 pr2 dtc">
            <div className="tl br3 pa3 ma2">
                <div className="b pv1 f4 fw3">
                    <p className="f4">Hi <br/> What can we help you with?</p>
                </div>
                    <div 
                        onClick={() => {window.location.pathname = '/Help'}} 
                        className="tc venus white br3 pa3 grow bw2 shadow-5">
                        <h4 className="fw5">Topics</h4>
                            <small>Check for recent updates</small>
                    </div>
            <div className="pv4">
                <small className="icon-diamond fw7"></small>
                    <div className="sans-serif hover-light-blue grow pointer pv2">
                        What does new Shopper mean?
                        <p className="pv1">How many new Shopper Coupons can i get in total?</p>
                    </div>
                <small className="icon-credit-card"></small>
                    <div className="sans-serif hover-light-blue grow pointer pv2">
                        How to open a dispute for a refund?
                        <p className="pv1">When will i get a refund?</p>
                    </div>
                <small className="icon-settings fw7"></small>
                    <div className="sans-serif hover-light-blue grow pointer pv2">
                        How to manage my account?
                        <p className="pv1">Open a dispute</p>
                    </div>
            </div>
        </div>
    </div>
    )
}

export default HelpCard;