import React from "react";
import '../assets/Home.css';
import { Link } from "react-router-dom";
import { sidebarData } from "../containers/SidebarData";

const SideBar = () => {

    return (
        <div className="sidebar w-10 fw7 orange dtc tc f2 pt7">
            <div className="sidebarList">
                { 
                    sidebarData.map((val, key) => {
                        return (
                            <p key={key}
                                id={window.location.pathname === val.Link ? "active" : ""  } 
                                
                                className="pt5 pointer">
                                    
                                <small id="Icon" className="pa2 hover-bg-light-blue br3 orange">{val.Icon}</small>
                                <small id="Title">{val.Title}</small>
                            </p>
                        );
                    })}
            </div>
            <Link className="link orange" to={"/container/PostAd"}>
                <small title="post feed" className="f1 fw7 bg-white br-pill grow pa2 pointer icon-plus shadow-5"></small>
            </Link>
        </div>
    );
} 

export default SideBar;