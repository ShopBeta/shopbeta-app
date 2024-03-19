import { render } from "@testing-library/react";
import React from "react";
import '../assets/css/global.css'
import Navbar from '../components/NavBar';
import WishlistCard from "../components/Wishlist";
import { WishlistHeader } from "../components/Header";


const Wishlist = () => {

    render()
        return(
                <div className="">
                    <div> 
                        <WishlistHeader />
                                          
                        <main>
                            <div className="">
                                <div className="container pv6">
                                    <div className="navbar navbar-expand-lg flex flex-wrap tc pb6">
                                        <div style={{fontSize: '30px', fontWeight: '500'}} className="pa2 container">
                                            <WishlistCard />
                                            <WishlistCard />
                                            <WishlistCard />
                                            <WishlistCard />
                                            <WishlistCard />
                                            <WishlistCard />
                                            <WishlistCard />
                                            <WishlistCard />
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

export default Wishlist;