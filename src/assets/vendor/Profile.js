import { render } from "@testing-library/react";
import React from "react";
import '../Home.css'
import Navbar from "../../components/Navbar";
import SideBar from "../../components/SideBar";
import User from "../../components/User";
import Map from "../../containers/Map";
import Preloader from "../../components/Preloader";



const Profile = () => {
    render()
        return(
            <div className="home">
                <Preloader />
                        <Navbar />
                    <div className="dt dt--fixed">
                       <div className="flex flex-wrap">
                           <SideBar />
                           <User />
                       </div>
                    <Map />
                </div>
            </div>
        );
}

export default Profile;