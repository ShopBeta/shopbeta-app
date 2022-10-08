import React from "react";

const ProfileInfo = () => {
    return(
        <div>
            <div className="dib">
            <div className="flex flex-wrap tl br3 pa3 ma2">
                <div>
                    <span className="f4 orange code">8904</span>
                <div className="pv3">
                    <p className="fw5">Your current followers</p>
                    <div className="f5 pv3">
                        <span className="pr2 fw7 code pv1">+23%</span>
                        <span className="f7 fw6">People interested</span>
                    </div>
                </div>
                <p className="pv2 tc">
                        Customer Engagement Report
                        </p>
               <div className="dtc code pv3 dt--fixed">
                <span className="pr6 dib">
                        <p className="f7 fw5">RECIEVED MESSAGES</p>
                        <div className="fw7 f5">
                            <p>338</p>
                        </div>
                    </span>
                <span className="dib">
                        <p className="f7 fw5">SENT MESSAGES</p>
                        <div className="fw7 f5">
                            <p>425</p>
                        </div>                 
                    </span>
                </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default ProfileInfo;