import React from "react";
import '../assets/css/global.css'
import { Link } from "react-router-dom";
import img from '../assets/images/md-salman-tWOz2_EK5EQ-unsplash.jpg'


const Product = () => {

    // const truncText = text.substring(0, 500) + "..."

    return(
            <div className="">
                <div className="pa1">
                    <Link 
                        to={"../maple/pages/viewproduct"} className="link black" title="view product">
                        <div className="br3" style={{backgroundImage: `url(${img})`, backgroundSize: "100%", backgroundRepeat: "no-repeat", height: '160px', width: '150px'}}>
                            <div className="navbar navbar-expand-lg pa2 white">
                                <span className="navbar-brand">
                                    {/* <small className="f6 bg-red br-pill b--transparent ph2 pa2">NEW</small> */}
                                    <small className="f6 bg-red br-pill b--transparent ph2 pa2">-25%</small>
                                </span>
                                <span className="f3">
                                </span>
                            </div>
                            <div className="navbar navbar-expand-lg pa1" style={{width: '100%', bottom: '0', marginTop: '7.5rem'}}>
                                <span className="navbar-brand">
                                </span>
                                <span className="f3">
                                    <small className="icon-heart f3 b--transparent gray field-color pa2 br-100"></small>
                                </span>
                            </div>
                        </div>
                        <div className="navbar navbar-expand-lg tc">
                            <span className="f4 navbar-brand">
                                <small className="">Jordan Shoe</small>
                            </span>
                            <span className="f6">
                                <small className="f6 red pr2 yellow icon-star"></small>
                                4.5
                            </span>
                        </div>
                        <p className="f4 tl">
                            <small className="">$23,809.09</small>
                        </p>
                    </Link>
                </div>
            </div>
    );
}

export default Product;