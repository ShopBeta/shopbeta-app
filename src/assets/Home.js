import React from "react";
import './Home.css'
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import SocialCard from '../components/SocialCard'
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

        return(
               <div className="">
                <div>
                    <Preloader />
                    <Navbar />
                    <div className="">
                        <div className="dtc">
                        {/* <SideBar /> */}
                        </div>
                       <div className="pv5 tc">
                            <span className="">
                                <SocialCard />
                            </span>
                            <span className="pb2 tc">
                                <p className="pv2 orange f4">
                                    Stores or users you may like
                                </p>
                                <FollowCardList users={users} />
                            </span>
                            <div>
                        </div>
                       </div>
                    </div>
                </div>
            </div>
        );
}

export default Home;