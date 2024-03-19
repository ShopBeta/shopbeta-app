import React from "react";
import '../assets/css/global.css'
import { useLocation } from "react-router-dom";
import '../assets/css/simple-line-icons/css/simple-line-icons.css';
import { Link } from "react-router-dom";

const NavBar = () => {

    const location = useLocation()
    const currentRoute = location.pathname.toLowerCase()
    console.log(currentRoute)

    return(
        <nav className="navbar navbar-expand-lg shadow-5 tc pv1" style={{position: 'fixed', width: '100%', backgroundColor: '#ffffff', borderBottom: '1px thin black', borderTop: '1px thick black', bottom: '0', left: '0', marginTop: '1rem', padding: '1rem'}}>
            <div style={{fontSize: '29px'}} className="ph1 container">
                <span className="navbar-brand">
                    <Link 
                        to={"../maple/pages/home"} title="home"
                        className={currentRoute.includes("home") ? "navbar-link link active" : "link black"}>
                        <i className="f3 hover-light-blue br3 fi fi-rs-home"></i>
                        <p className="f5">Home</p>  
                    </Link>
                </span>

                <span className="navbar-brand">
                    <Link 
                        to={"../maple/pages/feed"} title="feed"
                            className={currentRoute.includes("feed") ? "navbar-link link active" : "link black"}>
                            <i className="f3 hover-light-blue br3 fi fi-rs-category"></i>  
                            <p className="f5">Feed</p> 
                    </Link>
                </span>

                <span className="navbar-brand">
                    <Link 
                        to={"../maple/pages/wishlist"} title="wishlist"
                            className={currentRoute.includes("wishlist") ? "navbar-link link active" : "link black"}>
                            <i className="f3 hover-light-blue br3 fi fi-rs-heart"></i> 
                            <p className="f5">Wishlist</p> 
                    </Link>
                </span>

                <span className="navbar-brand">
                    <Link 
                        to={"../maple/pages/bag"} title="bag"
                        className={currentRoute.includes("bag") ? "navbar-link link active" : "link black"}>
                        <i className="f3 hover-light-blue br3 fi fi-rs-shopping-bag"></i> 
                        <p className="f5">Bag</p> 
                        {/* <i className="f3 hover-light-blue br3 fi fi-rs-shopping-cart"></i> 
                        <p className="f5">Cart</p>   */}
                    </Link>
                </span>
                            
                <span className="navbar-brand">
                    <Link 
                        to={"../maple/pages/chat"} title="chat"
                        className={currentRoute.includes("chat") ? "navbar-link link active" : "link black"}>
                        <i className="f3 hover-light-blue br3 fi fi-rs-comment"></i> 
                        <p className="f5">Chat</p> 
                    </Link>
                </span>
                            
            </div>
        </nav>
    );
};


export default NavBar;

