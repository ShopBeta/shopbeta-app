import React from "react";
import { Link } from "react-router-dom";
import '../assets/Home.css';
import { sidebarData } from "../containers/SidebarData";

const SideBar = () => {

    return (
        <div className="sidebar w-10 fw7 orange dtc tc f2 pt7">
            <ul className="sidebarList">
                { 
                    sidebarData.map((val, key) => {
                        return (
                            <li key={key}
                                id={window.location.pathname === val.Link ? "active" : ""  } 
                                
                                className="pt6 pointer br4 row">
                                    
                                <div id="Icon" className="pa1 hover-bg-light-blue br3 orange">{val.Icon}</div>
                                <div id="Title">{val.Title}</div>
                            </li>
                        );
                    })}
            </ul>
            <Link className="link orange" to={"/components/PostProduct"}>
                <small title="post product" className="f1 fw7 bg-white br-pill grow pa1 pointer icon-plus shadow-5"></small>
            </Link>
        </div>
    );
} 

export default SideBar;