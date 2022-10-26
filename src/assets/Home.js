import React from "react";
import './Home.css'
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import SocialCard from "../components/SocialCard"
import HomeCard from "../components/HomeCard";
import { SuggCard1, SuggCard2, SuggCard3, SuggCard4, SuggCard5 } from "../components/SuggCard";
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

        return(
               <div className="home">
                <div>
                    <Preloader />
                    <Navbar />
                    <div className="dt dt--fixed">
                        <SideBar />
                       <div className="ma2">
                            <div className="tc pb2">
                                <HomeCard />
                            </div>
                        {/* <p className="f4 pa2 orange monospace">
                            Recommended
                        </p> */}
                            <SuggCard1 />
                            <SuggCard2 />
                            <SuggCard3 />
                            <SuggCard4 />
                            <SuggCard5 />
                        <div style={{ overflowY: 'scroll', height: '165px'}}>
                            <FollowCardList users={users} />
                        </div>
                       </div>
                        <SocialCard />
                    </div>
                </div>
            </div>
        );
}

export default Home;