import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import 'tachyons';
import { catData } from "../containers/CatData";

const MainCat = () => {

    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch("https://shopbeta-app.herokuapp.com/products", {
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
                                <div
                                    className="dib tc pa2-l"
                                    key={key} 
                                    onClick={() => {
                                            window.location.pathname = val.Link;
                                        }}>
                                                        
                                <div>
                                <Link to={"../assets/vendor/MarketPlace"} className="link black">
                                    <div className="dib">
                                        <div className="tl br3 pa3 bw2 grow bg-transparent b--black ma2 pa2">
                                                <div className="flex flex-wrap">
                                                    <p className="tc">
                                                        {val.Image}
                                                        {/* <img src={val.Image} alt="avatar" className="pointer br-100" width="100px" height="100px" /> */}
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