import React from "react";
import 'tachyons';
import { Link } from "react-router-dom";

const SuggCard1 = () => {
    return(
        <div className="dib pl1">
            <Link to={"../Assets/Vendor/MarketPlace"} className="link black" >
                <div className="flex flex-wrap white code venus tl bg-white b--black br3 pa3 ma1 grow bw2 shadow-5">
                    <div> 
                        <p className="pt2 b f5">Mens Clothings</p>   
                        <p className="b">$25 best deals</p>
                        <span className="icon-arrow-right-circle ma2 pl6"></span>
                    </div>
                </div>
            </Link>
        </div>
    )
}

const SuggCard2 = () => {
    return(
        <div className="dib pl1">
            <Link to={"../Assets/Vendor/MarketPlace"} className="link black" >
                <div className="flex flex-wrap white code jupiter tl bg-white b--black br3 pa3 ma1 grow bw2 shadow-5">
                    <div> 
                        <p className="pt2 b f5">Women Clothings</p>   
                        <p className="b">$25 best deals</p>
                        <span className="icon-arrow-right-circle ma2 pl6"></span>
                    </div>
                </div>
            </Link>
        </div>
    )
}

const SuggCard3 = () => {
    return(
        <div className="dib pl1">
            <Link to={"../Assets/Vendor/MarketPlace"} className="link black" >
                <div className="flex flex-wrap white code mercury tl bg-white b--black br3 pa3 ma1 grow bw2 shadow-5">
                    <div> 
                        <p className="pt2 b f5">Phone and Accessories</p>   
                        <p className="b">$25 best deals</p>
                        <span className="icon-arrow-right-circle ma2 pl6"></span>
                    </div>
                </div>
            </Link>
        </div>
    )
}

const SuggCard4 = () => {
    return(
        <div className="dib pl1">
            <Link to={"../Assets/Vendor/MarketPlace"} className="link black" >
                <div className="flex flex-wrap white code earth tl bg-white b--black br3 pa3 ma1 grow bw2 shadow-5">
                    <div> 
                        <p className="pt2 b f5">Consumer Electronics</p>   
                        <p className="b">$25 best deals</p>
                        <span className="icon-arrow-right-circle ma2 pl6"></span>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export { SuggCard1, SuggCard2, SuggCard3, SuggCard4 };