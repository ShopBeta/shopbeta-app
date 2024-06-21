import { render } from "@testing-library/react";
import React from "react";
import '../assets/css/global.css'
import { CategoryHeader } from '../components/Header';
import { Link } from "react-router-dom";


const Category = () => {

    render()
        return(
                <div className="">
                    <div>
                        <CategoryHeader />
                        
                        <main className="pv5">
                            <div className="pt4 navbar navbar-expand-lg tc">
                                <div style={{fontSize: '30px', fontWeight: '500'}} className="pointer pa3 container">
                                    <span className="tc">
                                        <Link 
                                            to={"../pages/shop"} className="link black" title="clothes">
                                            <i className="f2 navbar-brand red br-pill field-color pa3 bw2 fi fi-rs-tshirt"></i>
                                            <p className="f5 pv2 pr3">Clothes</p>
                                        </Link>
                                    </span>
                                    <span className="tc">
                                        <Link 
                                            to={"../pages/shop"} className="link black" title="shoes">
                                            <i className="f2 navbar-brand field-color red br-pill pa3 bw2 fi fi-rs-shoe-prints"></i>
                                            <p className="f5 pv2 pr3">Shoes</p>
                                        </Link>
                                    </span>
                                    <span className="tc">
                                        <Link 
                                            to={"../pages/shop"} className="link black" title="search">
                                            <i className="f2 navbar-brand field-color red br-pill pa3 bw2 fi-rs-speakers"></i>
                                            <p className="f5 pv2 pr3">Electronics</p>
                                        </Link>
                                    </span>
                                    <span className="tc">
                                        <Link 
                                            to={"../pages/shop"} className="link black" title="search">
                                            <i className="f2 navbar-brand field-color red br-pill pa3 bw2 fi fi-rs-watch"></i>
                                            <p className="f5 pv2 pr3">Watch</p>
                                        </Link>
                                    </span>
                                </div>
                            </div>

                            <div className="pt3 navbar navbar-expand-lg tc">
                                <div style={{fontSize: '30px', fontWeight: '500'}} className="pointer pa3 container">
                                    <span className="tc">
                                        <Link 
                                            to={"../pages/shop"} className="link black" title="clothes">
                                            <i className="f2 navbar-brand red br-pill field-color pa3 bw2 fi fi-rs-luggage-rolling"></i>
                                            <p className="f5 pv2 pr3">Bags</p>
                                        </Link>
                                    </span>
                                    <span className="tc">
                                        <Link 
                                            to={"../pages/shop"} className="link black" title="shoes">
                                            <i className="f2 navbar-brand field-color red br-pill pa3 bw2 fi fi-rs-couch"></i>
                                            <p className="f5 pv2 pr3">Furniture</p>
                                        </Link>
                                    </span>
                                    <span className="tc">
                                        <Link 
                                            to={"../pages/shop"} className="link black" title="search">
                                            <i className="f2 navbar-brand field-color red br-pill pa3 bw2 fi fi-rs-nesting-dolls"></i>
                                            <p className="f5 pv2 pr3">Toys</p>
                                        </Link>
                                    </span>
                                    <span className="tc">
                                        <Link 
                                            to={"../pages/shop"} className="link black" title="search">
                                            <i className="f2 navbar-brand field-color red br-pill pa3 bw2 fi fi-rs-utensils"></i>
                                            <p className="f5 pv2 pr3">Kitchen</p>
                                        </Link>
                                    </span>
                                </div>
                            </div>

                            <div className="pt3 navbar navbar-expand-lg tc">
                                <div style={{fontSize: '30px', fontWeight: '500'}} className="pointer pa3 container">
                                    <span className="tc">
                                        <Link 
                                            to={"../pages/shop"} className="link black" title="clothes">
                                            <i className="f2 navbar-brand red br-pill field-color pa3 bw2 fi fi-rs-sunglasses"></i>
                                            <p className="f5 pv2 pr3">Glasses</p>
                                        </Link>
                                    </span>
                                    <span className="tc">
                                        <Link 
                                            to={"../pages/shop"} className="link black" title="shoes">
                                            <i className="f2 navbar-brand field-color red br-pill pa3 bw2 fi fi-rs-ring-diamond"></i>
                                            <p className="f5 pv2 pr3">Jewelry</p>
                                        </Link>
                                    </span>
                                    <span className="tc">
                                        <Link 
                                            to={"../pages/shop"} className="link black" title="search">
                                            <i className="f2 navbar-brand field-color red br-pill pa3 bw2 fi fi-rs-laptop"></i>
                                            <p className="f5 pv2 pr3">Laptop</p>
                                        </Link>
                                    </span>
                                    <span className="tc">
                                        <Link 
                                            to={"../pages/shop"} className="link black" title="search">
                                            <i className="f2 navbar-brand field-color red br-pill pa3 bw2 fi fi-rs-mobile-notch"></i>
                                            <p className="f5 pv2 pr3">Mobile</p>
                                        </Link>
                                    </span>
                                </div>
                            </div>

                            <div className="pt3 navbar navbar-expand-lg tc">
                                <div style={{fontSize: '30px', fontWeight: '500'}} className="pointer pa3 container">
                                    <span className="tc">
                                        <Link 
                                            to={"../pages/shop"} className="link black" title="clothes">
                                            <i className="f2 navbar-brand red br-pill field-color pa3 bw2 fi fi-rs-camera"></i>
                                            <p className="f5 pv2 pr3">Camera</p>
                                        </Link>
                                    </span>
                                    <span className="tc">
                                        <Link 
                                            to={"../pages/shop"} className="link black" title="shoes">
                                            <i className="f2 navbar-brand field-color red br-pill pa3 bw2 fi fi-rs-paw"></i>
                                            <p className="f5 pv2 pr3">Pet food</p>
                                        </Link>
                                    </span>
                                    <span className="tc">
                                        <Link 
                                            to={"../pages/shop"} className="link black" title="search">
                                            <i className="f2 navbar-brand field-color red br-pill pa3 bw2 fi fi-rs-lipstick"></i>
                                            <p className="f5 pv2 pr3">Beauty</p>
                                        </Link>
                                    </span>
                                    <span className="tc">
                                        <Link 
                                            to={"../pages/shop"} className="link black" title="search">
                                            <i className="f2 navbar-brand field-color red br-pill pa3 bw2 fi fi-rs-watch"></i>
                                            <p className="f5 pv2 pr3">Fitness</p>
                                        </Link>
                                    </span>
                                </div>
                            </div>

                            <div className="pt3 navbar navbar-expand-lg tc">
                                <div style={{fontSize: '30px', fontWeight: '500'}} className="pointer pa3 container">
                                    <span className="tc">
                                        <Link 
                                            to={"../pages/shop"} className="link black" title="clothes">
                                            <i className="f2 navbar-brand red br-pill field-color pa3 bw2 fi fi-rs-camera-cctv"></i>
                                            <p className="f5 pv2 pr3">Security</p>
                                        </Link>
                                    </span>
                                    <span className="tc">
                                        <Link 
                                            to={"../pages/shop"} className="link black" title="shoes">
                                            <i className="f2 navbar-brand field-color red br-pill pa3 bw2 fi fi-rs-tools"></i>
                                            <p className="f5 pv2 pr3">Hardware</p>
                                        </Link>
                                    </span>
                                    <span className="tc">
                                        <Link 
                                            to={"../pages/shop"} className="link black" title="search">
                                            <i className="f2 navbar-brand field-color red br-pill pa3 bw2 fi fi-rs-rugby"></i>
                                            <p className="f5 pv2 pr3">Sports</p>
                                        </Link>
                                    </span>
                                    <span className="tc">
                                        <Link 
                                            to={"../pages/shop"} className="link black" title="search">
                                            <i className="f2 navbar-brand field-color red br-pill pa3 bw2 fi fi-rs-gamepad"></i>
                                            <p className="f5 pv2 pr3">Games</p>
                                        </Link>
                                    </span>
                                </div>
                            </div>

                            <div className="pt3 navbar navbar-expand-lg tc">
                                <div style={{fontSize: '30px', fontWeight: '500'}} className="pointer pa3 container">
                                    <span className="tc">
                                        <Link 
                                            to={"../pages/shop"} className="link black" title="clothes">
                                            <i className="f2 navbar-brand red br-pill field-color pa3 bw2 fi fi-rs-palette"></i>
                                            <p className="f5 pv2 pr3">Arts</p>
                                        </Link>
                                    </span>
                                    <span className="tc">
                                        <Link 
                                            to={"../pages/shop"} className="link black" title="shoes">
                                            <i className="f2 navbar-brand field-color red br-pill pa3 bw2 fi fi-rs-baby-carriage"></i>
                                            <p className="f5 pv2 pr3">Baby</p>
                                        </Link>
                                    </span>
                                    <span className="tc">
                                        <Link 
                                            to={"../pages/shop"} className="link black" title="search">
                                            <i className="f2 navbar-brand field-color red br-pill pa3 bw2 fi fi-rs-book"></i>
                                            <p className="f5 pv2 pr3">Books</p>
                                        </Link>
                                    </span>
                                    <span className="tc">
                                        <Link 
                                            to={"../pages/shop"} className="link black" title="search">
                                            <i className="f2 navbar-brand field-color red br-pill pa3 bw2 fi fi-rs-garage"></i>
                                            <p className="f5 pv2 pr3">Garage sale</p>
                                        </Link>
                                    </span>
                                </div>
                            </div>

                            <div className="pt3 navbar navbar-expand-lg tc">
                                <div style={{fontSize: '30px', fontWeight: '500'}} className="pointer pa3 container">
                                <span className="tc">
                                        <Link 
                                            to={"../pages/shop"} className="link black" title="shoes">
                                            <i className="f2 navbar-brand field-color red br-pill pa3 bw2 fi fi-rs-headphones"></i>
                                            <p className="f5 pv2 pr3">Music</p>
                                        </Link>
                                    </span>
                                    <span className="tc">
                                        <Link 
                                            to={"../pages/shop"} className="link black" title="shoes">
                                            <i className="f2 navbar-brand field-color red br-pill pa3 bw2 fi fi-rs-guitar"></i>
                                            <p className="f5 pv2 pr3">Instruments</p>
                                        </Link>
                                    </span>
                                    <span className="tc">
                                        <Link 
                                            to={"../pages/shop"} className="link black" title="search">
                                            <i className="f2 navbar-brand field-color red br-pill pa3 bw2 fi fi-rs-shovel"></i>
                                            <p className="f5 pv2 pr3">Garden</p>
                                        </Link>
                                    </span>
                                    <span className="tc">
                                        <Link 
                                            to={"../pages/shop"} className="link black" title="search">
                                            <i className="f2 navbar-brand field-color red br-pill pa3 bw2 fi fi-rs-washer"></i>
                                            <p className="f5 pv2 pr3">Appliances</p>
                                        </Link>
                                    </span>
                                </div>
                            </div>

                            <div className="pt3 navbar navbar-expand-lg tc">
                                <div style={{fontSize: '30px', fontWeight: '500'}} className="pointer pa3 container">
                                    <span className="tc">
                                        <Link 
                                            to={"../pages/shop"} className="link black" title="clothes">
                                            <i className="f2 navbar-brand red br-pill field-color pa3 bw2 fi fi-rs-rent"></i>
                                            <p className="f5 pv2 pr3">House Rent</p>
                                        </Link>
                                    </span>
                                    <span className="tc">
                                        <Link 
                                            to={"../pages/shop"} className="link black" title="shoes">
                                            <i className="f2 navbar-brand field-color red br-pill pa3 bw2 fi fi-rs-house-chimney"></i>
                                            <p className="f5 pv2 pr3">House sale</p>
                                        </Link>
                                    </span>
                                    <span className="tc">
                                        <Link 
                                            to={"../pages/shop"} className="link black" title="search">
                                            <i className="f2 navbar-brand field-color red br-pill pa3 bw2 fi fi-rs-gift"></i>
                                            <p className="f5 pv2 pr3">Gifts</p>
                                        </Link>
                                    </span>
                                    <span className="tc">
                                        <Link 
                                            to={"../pages/shop"} className="link black" title="search">
                                            <i className="f2 navbar-brand field-color red br-pill pa3 bw2 fi fi-rs-apps"></i>
                                            <p className="f5 pv2 pr3">Others</p>
                                        </Link>
                                    </span>
                                </div>
                            </div>
                        </main>

                    </div>
                </div>
            );
        }

export default Category;