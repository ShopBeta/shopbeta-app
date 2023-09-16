import { render } from "@testing-library/react";
import React from "react";
import '../Home.css'
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
                    <div className="tc pv5">
                        <User />
                    </div>
                </div>
            </div>
        );
}

export default Profile;