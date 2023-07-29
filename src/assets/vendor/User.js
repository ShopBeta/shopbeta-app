import { render } from "@testing-library/react";
import React from "react";
import '../Home.css'
import Navbar from "../../components/Navbar";
import Header from '../../components/Header';
import User from "../../containers/User";
import Preloader from "../../components/Preloader";



const Profile = () => {
    render()
        return(
            <div className="">
                <Preloader />
                        <Header />
                    <div className="">
                       <div className="tc pv6">
                            <User />
                       </div>
                    </div>
                <Navbar />
            </div>
        );
}

export default Profile;