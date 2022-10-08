import { render } from "@testing-library/react";
import React from "react";
import './Home.css';
import Navbar from '../components/Navbar';
import SideBar from '../components/SideBar';
import CreditCard from "../components/CreditCard";
import CreditCardInput from "../containers/CreditCardInput";
import SalesInfo from "../components/SalesInfo";
import ProfileInfo from "../components/ProfileInfo";

const Inventory = () => {
    render()
        return(
            <div className="home">
                        <Navbar />
                    <div className="dt dt--fixed">
                        <SideBar />
                        <div className="flex flex-wrap">
                            <ProfileInfo />
                            <SalesInfo />
                            <CreditCard />
                            <CreditCard /> 
                        </div>
                        <CreditCardInput />
                    </div>
            </div>
        );
}

export default Inventory;