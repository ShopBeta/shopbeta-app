import React from "react";
import { useState } from "react";
import '../assets/Home.css';
import { sidebarData } from "../containers/SidebarData";
import VideoModal from "../containers/VideoModal";

const SideBar = () => {

    const [open, setOpen] = useState(false)

    const handleShut= () => {
        setOpen(false)
    }

    const handleShow = () => {
        setOpen(true)
    }

    return (
        <div className="sidebar w-10 fw7 orange dtc tc f2 pt7">
               <VideoModal handleShow={open} handleShut={handleShut} />
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
            <small onClick={handleShow} title="post video" className="f1 fw7 bg-white br-pill grow pa2 tc pointer icon-plus">
            </small>
        </div>
    );
} 

export default SideBar;