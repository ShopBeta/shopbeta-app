import React from "react";
import '../assets/Home.css'
import { useLocation } from "react-router-dom";
import './simple-line-icons/css/simple-line-icons.css';
import { Link } from "react-router-dom";

const Navbar = () => {

    const location = useLocation()
    const currentRoute = location.pathname.toLowerCase()
    console.log(currentRoute)

    return(
        <div className="fw5 tc" style={{position: 'fixed', width: '100%', backgroundColor: '#ffffff', borderBottom: '1px thin black', bottom: '0', left: '0', marginTop: '1rem', padding: '1rem'}}>
            <div style={{fontSize: '35px'}} className="ph2 tc">
                <Link 
                    to={"../assets/AdbillBoard"} title="adbillboard"
                    className={currentRoute.includes("adbillboard") ? "nav-link link active" : "link black"}>
                    <small className="pv2 f3 hover-bg-light-gray br3 icon-home pr4 fw6"></small>  
                </Link>

                <Link 
                    to={"../assets/MarketPlace"} title="marketplace"
                
                    className={currentRoute.includes("marketplace") ? "nav-link link active" : "link black"}>
                    <small className="pv2 f3 hover-bg-light-gray br3 icon-handbag ph4 fw6 "></small> 
                </Link>

                <Link 
                    to={"../assets/Chats"} title="chats"
                    className={currentRoute.includes("chats") ? "nav-link link active" : "link black"}>
                    <small className="pv2 f3 hover-bg-light-gray br3 icon-bubbles ph4 fw6"></small>  
                </Link>

                <Link 
                    to={"../assets/VideoSpace"} title="videospace"
                    className={currentRoute.includes("videospace") ? "nav-link active" : "black"}>
                    <small className="pv2 f3 hover-bg-light-gray br3 icon-social-youtube ph4 fw6"></small>  
                </Link>

                <Link 
                    to={"../assets/vendor/Profile"} title="profile"
                    className={currentRoute.includes("profile") ? "nav-link link active" : "link black"}>
                    <small className="pv2 f3 hover-bg-light-gray br3 icon-user pl4 fw6"></small>  
                </Link>
            </div>
        </div>
    );
};


export default Navbar;