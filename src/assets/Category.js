import { render } from "@testing-library/react";
import React from "react";
import './Home.css'
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import MainCat from '../components/MainCat';
import Preloader from "../components/Preloader";


const Category = () => {
    render()
        return(
            <div className="">
                <Preloader />
                        <Navbar />
                    <div className="">
                        <div className="dtc">
                            <SideBar />
                        </div>
                    <div className="pl4 pv6 tc dtc">
                        <h3 className="shop code fw5 f3 ph3 pb2">Categories</h3>
                        <div className="tc">
                            <MainCat />
                        </div>
                    </div>
                    </div>
            </div>
        );
}

export default Category;