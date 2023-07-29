import React from "react";
import { Typography } from "@material-ui/core";
import '../assets/Home.css'
import './simple-line-icons/css/simple-line-icons.css';
import { Link } from "react-router-dom";

const Navbar = () => {

    return(
        <div className="fw5 navbar tc" style={{position: 'fixed', width: '100%', backgroundColor: '#ffffff', borderBottom: '1px thin black', bottom: '0', left: '0', marginTop: '1rem', padding: '1rem'}}>
            <Typography>
                <div className="">
                    <span style={{fontSize: '35px'}} className="ph2">
                        <Link to={"../assets/AdbillBoard"} title="adbillboard" className="navbar pr4 br3 black link hover-bg-light-gray f3 fw6 icon-home pv2"></Link>
                        <Link to={"../assets/Home"} title="home" className="navbar pv2 f3 hover-bg-light-gray br3 icon-handbag link ph4 fw6 black"></Link>
                        <Link to={"../assets/Chats"} title="chats" className="navbar pv2 f3 hover-bg-light-gray br3 icon-bubbles link fw6 black ph4"></Link>
                        <Link className="navbar f3 black ph4 fw6 icon-social-youtube pointer hover-bg-light-gray br3 pa2" to={"/assets/VideoSpace"} title="videospace"></Link>
                        <Link title="profile" to={"/assets/vendor/Profile"} className="navbar pv2 f3 hover-bg-light-gray br3 icon-user link fw6 black pl4"></Link>
                    </span>
                </div>
            </Typography>
        </div>
    );
};


export default Navbar;