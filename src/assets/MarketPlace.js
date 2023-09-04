import { render } from "@testing-library/react";
import React from "react";
import './Home.css'
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import MainCat from '../components/MainCat';
import Preloader from "../components/Preloader";
import FollowCardList from "../containers/FollowCardList";
import Header from "../components/Header";


const MarketPlace = () => {

    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch("https://shopbeta-api.onrender.com/users", {
            method: "GET",
            headers: {
                'Accept' : 'application/json, text/plain',
                'Content-Type' : 'application/json'
            },
        })
        .then((res) => res.json())
        .then((data) => {
            setUsers(data)
            
            const load = document.getElementById('load')
            load.style['display'] = 'none'
        })
        .catch((err) => {
            console.log(err.message)
        })
    }, [])
    
    console.log(users)

    render()
        return(
            <div className="">
                <Preloader />
                    <Header />
                    <div className="pa1 pv5">
                        <div className="tr pv2">
                            <nav className="fw5 bg-white navbar tr pa2" style={{position: 'fixed', width: '100%', borderBottom: '1px thin black'}}>
                                <span><Link to={"../assets/vendor/SearchPage"} title="search" className="navbar pv2 f3 hover-bg-light-gray br3 icon-magnifier ph4 fw6 link black" ></Link></span>
                                <span><Link to={"../assets/Vendor/Cart"} title="cart" className="navbar ph4 f3 black hover-bg-light-gray br3 fw6 link icon-basket pv2"></Link></span>
                            </nav>
                        </div>
                        <h3 style={{position: 'fixed'}} className="pa4 tl code f3 ph3">
                            Explore
                        </h3>
                        <div className="dib pt5 tc">
                            <div className="tc">
                                <MainCat />
                                <p className="pv4 tc code fw6 f4">
                                    Suggestions
                                </p>
                                <div className="tj flex flex-wrap">
                                    <div className="tc">
                                        <FollowCardList users={users} />
                                    </div>
                                <div>
                                <p id="load" className="tc code orange ph2 fw6 f4">Loading...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <Navbar />
    </div>
    );
}

export default MarketPlace;