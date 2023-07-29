import React from "react";
import { Link } from "react-router-dom";
import 'tachyons';
import { catData } from "../containers/CatData";

const MainCat = (val) => {

    return (
        <div className="dtc bg-white tc">
            {
                    catData.map((val, key) => {
                        return (
                                <div className="dib tc shadow-5 br3 ma2" key={key}>                      
                                <div>
                                <Link to={"../assets/vendor/MarketPlace"} className="link black">
                                    <div className="dib">
                                        <div onClick={() => {window.localStorage.setItem("category", val.Title)}} className="tl br3 bw2 b--black ma2 pa2">
                                                <div className="flex flex-wrap">
                                                    <p className="tc">
                                                        {val.Image}
                                                    </p>
                                                </div>   
                                                <div className="tc">
                                                    <p className="fw5">{val.Title}</p>
                                                    <button disabled className="bg-transparent b--black-10 orange pointer tc br-pill ph5 pa3 ma3">
                                                        <small className="icon-heart pointer ph2 f5"></small>
                                                        <small className="f5 fw6">View listings</small>
                                                    </button>
                                                </div>    
                                            </div>
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