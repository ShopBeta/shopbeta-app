import { render } from "@testing-library/react";
import React from "react";
import './Home.css'
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import MainCat from '../components/MainCat';
import Preloader from "../components/Preloader";
import FollowCardList from "../containers/FollowCardList";


const Home = () => {

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
                        <Navbar />
                    <div className="pv6 tc dtc">
                        <h3 className="tc pv2 code f3 ph3">
                            Explore MarketPlace
                        </h3>
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
        );
}

export default Home;