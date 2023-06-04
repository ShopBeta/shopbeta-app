import React from "react";
import { Typography } from "@material-ui/core";
import '../assets/Home.css'
import './simple-line-icons/css/simple-line-icons.css';
import { Link } from "react-router-dom";

const Navbar = () => {

    return(
        <nav className="bg-white fw5 navbar tc pv2 shadow-2" style={{position: 'fixed', width: '100%', borderBottom: '1px thin black'}}>
            <Typography>
                <div className="">
                    <span style={{color: '#ee9617', fontSize: '25px', fontWeight: '510',}} className="pa3 pr4">ShopBeta</span>
                    <span style={{fontSize: '29px'}} className="ph2">
                        <Link to={"/"} title="feed" className="ph4 fw5 link black" ></Link>
                        <Link to={"../assets/vendor/SearchPage"} title="feed" className="navbar pv2 f3 hover-bg-light-gray br3 icon-magnifier ph4 fw5 link black" ></Link>
                        <Link style={{justifyContent: 'flex-end'}} to={"/assets/vendor/Profile"} className="navbar pt2 pointer fw5 br3 pa2 ph4 f4">
                            <svg width="22px" height="22px" viewBox="0 0 16 16" className="black bi bi-person-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z"/>
                            <path fill-rule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                            <path fill-rule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"/>
                            </svg>
                        </Link>
                        <Link to={"../assets/AdbillBoard"} title="adbillboard" className="navbar ph4 br3 black link hover-bg-light-gray f3 fw5 icon-home pv2"></Link>
                        <Link to={"../assets/Home"} title="home" className="navbar pv2 f3 hover-bg-light-gray br3 icon-handbag link ph4 fw5 black"></Link>
                        <Link to={"../assets/Chats"} title="chats" className="navbar pv2 f3 hover-bg-light-gray br3 icon-bubbles link fw5 black ph4"></Link>
                        <Link className="navbar f3 black ph4 fw5 icon-social-youtube pointer hover-bg-light-gray br3 pa2 grow"to={"/assets/VideoSpace"} title="videospace"></Link>
                        <Link to={"../assets/Vendor/Cart"} title="cart" className="navbar ph4 f3 black hover-bg-light-gray br3 fw5 link icon-basket pv2"></Link>
                    </span>
                </div>
            </Typography>
        </nav>
    );
};


export default Navbar;