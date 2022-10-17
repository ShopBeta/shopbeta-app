import { render } from "@testing-library/react";
import React from "react";
import './Home.css'
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import SocialCard from "../components/SocialCard"
import HomeCard from "../components/HomeCard";
import { SuggCard1, SuggCard2, SuggCard3, SuggCard4, SuggCard5 } from "../components/SuggCard";
import Preloader from "../components/Preloader";
import { users } from "../containers/Users";
import FollowCardList from "../containers/FollowCardList";


const Home = () => {
    render()
        return(
               <div className="home">
                <Preloader />
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
                            <SuggCard5 />
                        <div style={{ overflowY: 'scroll', height: '172px'}}>
                            <FollowCardList users={users} />
                        </div>
                       </div>
                        <SocialCard />
                    </div>
            </div>
        );
}

export default Home;