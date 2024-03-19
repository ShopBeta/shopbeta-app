import { render } from "@testing-library/react";
import React from "react";
import '../assets/css/global.css'
import Navbar from '../components/NavBar';
import { Link } from "react-router-dom";
import { Slide1, Slide2, Slide3 } from "../components/SpecialOffers";


const SpecialOffers = () => {

    render()
        return(
                <div className="">
                    <div>                   
                        <main>
                            <div className="pv3">
                                <div className="navbar navbar-expand-lg tc" style={{position: 'fixed', width: '100%', backgroundColor: '#ffffff', borderBottom: '1px thin black'}}>
                                    <div style={{fontSize: '29px', fontWeight: '500'}} className="ph3 container">
                                        <span className="navbar-brand">
                                            <small className="f2">Special Offers</small>
                                        </span>
                                        <span className="hover-blue">
                                            <Link 
                                                to={"..maple/pages/specialoffers"} className="link black">
                                                <small className="f4">25</small>
                                            </Link>
                                        </span>
                                    </div>
                                </div>
                                <div className="container pv6">
                                    <div className="pb2">
                                        <Slide1 />
                                    </div>

                                    <div className="pt4 pb2">
                                        <Slide2 />
                                    </div>

                                    <div className="pt4 pb2">
                                        <Slide3 />
                                    </div>
                                </div>
                             </div>
                        </main>

                        <footer>
                            <Navbar />
                        </footer>
                    </div>
                </div>
            );
        }

export default SpecialOffers;