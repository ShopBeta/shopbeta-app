import { render } from "@testing-library/react";
import React from "react";
import '../Home.css'
import Navbar from "../../components/Navbar";
import User from "../../components/User";
import Preloader from "../../components/Preloader";




const Profile = () => {
    render()
        return(
            <div className="">
                <Preloader />
                        <Navbar />
                    <div className="">
                       <div className="tc pv6">
                        <User />
                       </div>
                </div>
            </div>
        );
}



export default Profile;