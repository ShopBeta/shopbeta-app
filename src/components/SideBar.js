import React from "react";
import { useState } from "react";
import '../assets/Home.css';
import { sidebarData } from "../containers/SidebarData";
import ModalDialog2 from "../containers/ModalDialog2";

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
               <ModalDialog2 handleShow={open} handleShut={handleShut} />
            <ul className="sidebarList">
                { 
                    sidebarData.map((val, key) => {
                        return (
                            <li key={key}
                                id={window.location.pathname === val.Link ? "active" : ""  } 
                                
                                className="pv3 pointer br4 row">
                                    
                                <div id="Icon" className="pa1 hover-bg-light-blue br3 orange">{val.Icon}</div>
                                <div id="Title">{val.Title}</div>
                            </li>
                        );
                    })}
            </ul>
            <div onClick={handleShow} title="post product" className="f1 fw7 bg-white br-pill grow pa1 pointer icon-plus">
            </div>
        </div>
    );
} 

export default SideBar;