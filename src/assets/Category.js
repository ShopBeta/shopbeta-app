import { render } from "@testing-library/react";
import React from "react";
import './Home.css'
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import MainCat from '../components/MainCat';
import HelpCard from '../components/HelpCard'; 
import Preloader from "../components/Preloader";


const Category = () => {
    render()
        return(
            <div className="home">
                <Preloader />
                        <Navbar />
                    <div className="dt dt--fixed">
                        <SideBar />
                    <div>
                        <h3 className="shop code fw5 f4 ph3 pb2">Category</h3>
                        <div style={{ overflowY: 'scroll', height: '490px'}}>
                            <MainCat />
                        </div>
                    </div>
                        <HelpCard />
                    </div>
            </div>
        );
}

export default Category;