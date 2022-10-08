import React from "react";
import { Link } from "react-router-dom";

const Map = () => {
    return(
        <div className="dtc w-40 pr3">
            <div className="pv1">
            <div className="tl bg br3 pa3 ma2">
                    <p className="pv2 orange code f4">
                        Location
                    </p>
                    <div className="tc">
                        <iframe 
                        title="maps"
                        height="360"
                        className="w-100 b--black-10 br3"
                        loading="lazy"
                        allowFullScreen
                        referrerPolicy="no-referrer-when-downgrade"
                        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCKjLTXdq6Db3Xit_pW_GK4EXuPRtnod4o
                            &q=Space+Needle,Seattle+WA"
                        />
                    </div>
                    <div className="tc earth br3 pa3 grow bw2 shadow-5">
                        <Link to={"../Assets/Vendor/MarketPlace"} className="link black">
                            <p className="b white pv2"> 
                                Accessories   
                                <span className="icon-arrow-right-circle pl3"></span> 
                            </p>
                            <small className="white">Check for recent updates</small>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
} 

export default Map;