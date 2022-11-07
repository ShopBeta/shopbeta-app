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
            <div className="">
                <Preloader />
                        <Navbar />
                    <div className="">
                       <div className="dtc">
                           <SideBar />
                       </div>
                       <div className="tc pv6">
                        <User />
                       </div>
                    {/* <Map /> */}
                </div>
            </div>
        );
}

export default Profile;