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
        fetch("https://shopbeta-app.herokuapp.com/users", {
            method: "GET",
            headers: {
                'Accept' : 'application/json, text/plain',
                'Content-Type' : 'application/json'
            },
        })
        .then((res) => res.json())
        .then((data) => setUsers(data))
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
                        <div className="tc">
                            <MainCat />
                        </div>
                        <p className="pv4 tc orange fw6 code f4">
                            Stores or users you may like
                        </p>
                        <div className="tj flex flex-wrap">
                                <div className="tc">
                                    <FollowCardList users={users} />
                                </div>
                            <div>
                        </div>
                    </div>
                </div>
            </div>
        );
}

export default Home;