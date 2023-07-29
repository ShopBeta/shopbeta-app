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
                            <p key={key}
                                id={window.location.pathname === val.Link ? "active" : ""  } 
                                
                                className="pt4 pointer row">
                                    
                                <div id="Icon" className="pa1 grow br3 orange">{val.Icon}</div>
                                <div id="Title">{val.Title}</div>
                            </p>
                        );
                    })}
            </ul>
            <Link className="link orange" to={"/components/PostProduct"}>
                <small title="post product" className="f1 fw7 bg-white br-pill grow pa1 pointer icon-plus"></small>
            </Link>
        </div>
    );
} 

const FeedSideBar = () => {

    return (
        <div className="sidebar w-10 fw7 orange dtc tc f2 pt7">
            <div className="sidebarList">
                { 
                    sidebarData.map((val, key) => {
                        return (
                            <p key={key}
                                id={window.location.pathname === val.Link ? "active" : ""  } 
                                
                                className="pt4 pointer">
                                    
                                <small id="Icon" className="pa2 grow br3 orange">{val.Icon}</small>
                                <small id="Title">{val.Title}</small>
                            </p>
                        );
                    })}
            </div>
            <Link className="link orange" to={"/container/PostAd"}>
                <small title="post feed" className="f1 fw6 bg-white br-pill grow pa2 pointer icon-plus"></small>
            </Link>
        </div>
    );
} 

const VideoSideBar = () => {

    return (
        <div className="sidebar w-10 fw7 orange dtc tc f2 pt7">
            <div className="sidebarList">
                { 
                    sidebarData.map((val, key) => {
                        return (
                            <p key={key}
                                id={window.location.pathname === val.Link ? "active" : ""  } 
                                
                                className="pt4 pointer">
                                    
                                <small id="Icon" className="pa2 grow br3 orange">{val.Icon}</small>
                                <small id="Title">{val.Title}</small>
                            </p>
                        );
                    })}
            </div>
            <Link className="link orange" to={"/container/PostVideo"}>
                <small title="post video" className="f1 fw7 bg-white br-pill grow pa2 tc pointer icon-plus"></small>
            </Link>
        </div>
    );
} 

export { 
    SideBar,
    FeedSideBar,
    VideoSideBar
 };