import { render } from "@testing-library/react";
import React from "react";
import './Home.css'
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import SocialCard from "../components/SocialCard"
import HomeCard from "../components/HomeCard";
import { SuggCard1, SuggCard2, SuggCard3, SuggCard4 } from "../components/SuggCard";
import FollowCard from "../components/FollowCard";


const Home = () => {
    render()
        return(
               <div className="home">
                    <Navbar />
                    <div className="dt dt--fixed">
                        <SideBar />
                       <div className="ma2">
                            <div className="tc pb2">
                            <HomeCard />
                            </div>
                        <p className="f4 pa2 orange monospace">
                            Recommended
                        </p>
                        <SuggCard1 />
                        <SuggCard2 />
                        <SuggCard3 />
                        <SuggCard4 />
                        <FollowCard />
                        <FollowCard />
                       </div>
                        <SocialCard />
                    </div>
            </div>
        );
}

export default Home;