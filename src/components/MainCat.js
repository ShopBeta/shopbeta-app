import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import 'tachyons';
import { catData } from "../containers/CatData";

const MainCat = () => {

    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch("https://shopbeta-api.onrender.com/products", {
            method: "GET",
        })
        .then((res) => res.json())
        .then((data) => setProduct(data))
        .catch((err) => {
            console.log(err.message)
        })
    }, [])

    return (
        <div className="dtc bg-white tc">
            {
                    catData.map((val, key) => {
                        return (
                                <div className="dib tc" key={key}>                      
                                <div>
                                <Link to={"../assets/vendor/MarketPlace"} className="link black">
                                    <div className="dib">
                                        <div className="tl br3 bw2 shadow-4 bg-white b--black ma2 pa2">
                                                <div className="flex flex-wrap">
                                                    <p className="tc">
                                                        {val.Image}
                                                    </p>
                                                </div>   
                                                <div className="tc">
                                                    <p>{val.Title}</p>
                                                    {/* <small className="icon-heart pointer ph4 f4"></small> */}
                                                    <button disabled className="bg-transparent b--black-10 pa1 tc br-pill ph6 pa2 ma3 f6 b fw6">
                                                        {product.length} listings
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