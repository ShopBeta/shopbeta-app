import React from "react";
import '../assets/css/global.css'
import { Link } from "react-router-dom";
import slide1 from '../assets/images/md-salman-tWOz2_EK5EQ-unsplash.jpg'
import slide2 from '../assets/images/nathan-dumlao-lvWw_G8tKsk-unsplash.jpg'
import slide3 from '../assets/images/nike.jpg'


const Slide1 = () => {

    return(
            <div className="">
                <div className="navbar navbar-expand-lg tc pb3">
                    <div style={{fontSize: '30px', fontWeight: '500'}} className="br3 container">
                        <span className="navbar-brand">
                            <small className="f4">#SpecialForYou</small>
                        </span>
                        <span className="hover-blue pointer">
                            <Link 
                                to={"..maple/pages/specialoffers"} className="link black">
                                <small className="f5 red">See all</small>
                            </Link>
                        </span>
                    </div>
                </div>
                <main  style={{fontWeight: '500'}} className="tl">
                    <div className="container white">
                        <div className="br4" style={{backgroundImage: `url(${slide1})`, backgroundSize: "100%", backgroundRepeat: "no-repeat",width: '100%'}}>
                            <div className="navbar navbar-expand-lg tc">
                                <div className="pa3 container">
                                    <span className="navbar-brand">
                                        <small className="f5">Revi product</small>
                                    </span>
                                    <span className="">
                                        <Link 
                                            to={"../pages/viewproduct"} className="link black">
                                            <button className="button-bg bg-red b--transparent white pa1 tc br-pill ba f6 pointer ph4 pv3">
                                                Claim
                                            </button>
                                        </Link>
                                    </span>
                                </div>
                            </div>
                            <div className="container">
                                <div className="pv3">
                                    <p className="f2">Get Special Offer</p>
                                    <div className="pt3">
                                        <small className="f4">Up to</small>
                                        <small className="f2 ph2">40%</small>
                                        <small className="f6">off</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
    );
}

const Slide2 = () => {

    return(
            <div className="">
                <main  style={{fontWeight: '500'}} className="tl">
                    <div className="container white">
                        <div className="br4" style={{backgroundImage: `url(${slide2})`, backgroundSize: "100%", backgroundRepeat: "no-repeat",width: '100%'}}>
                            <div className="container pa3">
                                <div className="pv2">
                                    <p className="f2">New Collection</p>
                                    <div className="pv3">
                                        <small className="f5">Discount 50% for <br/>the first transaction</small>
                                    </div>
                                    <Link 
                                        to={"../pages/viewproduct"} className="link black">
                                        <button className="button-bg bg-red b--transparent white pa1 tc br-pill ba f6 pointer ph4 pv3">
                                            Shop Now
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
    );
}

const Slide3 = () => {

    return(
            <div className="">
                <main  style={{fontWeight: '500'}} className="tl">
                    <div className="container white">
                        <div className="br4" style={{backgroundImage: `url(${slide3})`, backgroundSize: "100%", backgroundRepeat: "no-repeat",width: '100%'}}>
                            <div className="navbar navbar-expand-lg tc">
                                <div className="pa3 container">
                                    <span className="navbar-brand">
                                        <small className="f5">Revi product</small>
                                    </span>
                                    <span className="">
                                        <button className="button-bg bg-red b--transparent white pa1 tc br-pill ba f6 pointer ph4 pv3">
                                            Claim
                                        </button>
                                    </span>
                                </div>
                            </div>
                            <div className="container">
                                <div className="pv3">
                                    <p className="f2">Get Special Offer</p>
                                    <div className="pt3">
                                        <small className="f4">Up to</small>
                                        <small className="f2 ph2">40%</small>
                                        <small className="f6">off</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
    );
}


export {
    Slide1,
    Slide2,
    Slide3,
}