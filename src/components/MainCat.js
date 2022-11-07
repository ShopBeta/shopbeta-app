import React from "react";
import { Link } from "react-router-dom";
import 'tachyons';
import { catData } from "../containers/CatData";

const MainCat = () => {
    return (
        <div className="dtc bg-white tc">
            {
                    catData.map((val, key) => {
                        return (
                            <div
                                className="dib tc pa2-l"
                                key={key} 
                                onClick={() => {
                                        window.location.pathname = val.Link;
                                    }}>
                                                    
                            <div className="flex flex-wrap tc bg-white b--black tj br3 pa3 pv4 ma2 grow bw2 shadow-5">
                                <Link to={"../assets/vendor/MarketPlace"} className="link black">
                                    <div>
                                            {val.Image}
                                        <h3> 
                                            {val.Title}   
                                        </h3>
                                            
                                            {/* {val.Icon} */}
                                    </div>
                                </Link>
                            </div>
                            </div>
                        )
                    })
            }
        </div>
    );
} 

export default MainCat;