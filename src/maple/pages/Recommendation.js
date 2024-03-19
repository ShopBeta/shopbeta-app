import { render } from "@testing-library/react";
import React from "react";
import '../assets/css/global.css'
import Navbar from '../components/NavBar';
import { Link } from "react-router-dom";
import Product from "../components/Product";


const Recommendation = () => {

    render()
        return(
                <div className="">
                    <div>                   
                        <main>
                            <div className="pv3">
                                <div className="navbar navbar-expand-lg tc" style={{position: 'fixed', width: '100%', backgroundColor: '#ffffff', borderBottom: '1px thin black'}}>
                                    <div style={{fontSize: '29px', fontWeight: '500'}} className="ph3 container">
                                        <span className="navbar-brand">
                                            <small className="f2">Recommended</small>
                                        </span>
                                        <span className="hover-blue">
                                            <Link 
                                                to={"..maple/pages/specialoffers"} className="link black">
                                                <small className="f5">Top Sale</small>
                                            </Link>
                                        </span>
                                    </div>
                                </div>
                                <div className="container pv6">
                                    <div className="navbar navbar-expand-lg flex flex-wrap tc pb6">
                                        <div style={{fontSize: '30px', fontWeight: '500'}} className="pa2 container">
                                            <Product />
                                            <Product />
                                            <Product />
                                            <Product />
                                            <Product />
                                            <Product />
                                            <Product />
                                        </div>
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

export default Recommendation;