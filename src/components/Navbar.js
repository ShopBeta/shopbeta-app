import React from "react";
import { makeStyles } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import img from '../images/shop-local.png'
import './simple-line-icons/css/simple-line-icons.css';
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme=> ({
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));


const Navbar = () => {

    const classes = useStyles();

    return(
        <nav className="bg-white tc pv2 shadow-2" style={{position: 'fixed', width: '100%', borderBottom: '1px thin black'}}>
            <Typography>
                <div className="">
                    <span style={{color: '#ee9617', fontSize: '23px', fontWeight: '500', letterSpacing: '-1px'}} className="pa2 pr3 code"><img src={img} alt="logo" className="br4 ph2" width="24px" height="24px" />Sponge</span>
                    <span style={{fontSize: '29px'}} className="">
                        <Link className="link" to={"/assets/vendor/SearchPage"}>
                            <input style={{fontSize: '19px',  fontWeight: '300', color: 'black'}} className="pa2 pr6 ph4 code br-pill ba" type="search" placeholder="Search products...."/>          
                        </Link>
                        <Link to={"../assets/Adbillboard"} title="feed" className="navbar pv2 f3 hover-bg-light-gray br3 icon-picture black ph4" ></Link>
                        <Link to={"../assets/VideoSpace"} title="video space" className="navbar pv2 f3 hover-bg-light-gray br3 icon-social-youtube black ph4"></Link>
                        <Link to={"../assets/Chats"} title="Chats" className="navbar ph4 br3 black hover-bg-light-gray f3 link icon-bubbles pv2"></Link>
                        <Link to={"../assets/Vendor/Cart"} title="cart" className="navbar ph4 f3 black hover-bg-light-gray br3 link icon-basket pv2"></Link>
                        <Link className="navbar link f3 black ph4 icon-settings pointer hover-bg-light-gray br3 pa2 grow"to={"/assets/vendor/Settings"}></Link>
                        <Link style={{justifyContent: 'flex-end'}} to={"/assets/vendor/Profile"} className="navbar pt2 pointer br3 pa2 f4">
                            <svg width="21px" height="21px" viewBox="0 0 16 16" className="black bi bi-person-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z"/>
                            <path fill-rule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                            <path fill-rule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"/>
                            </svg>
                        </Link>
                    </span>
                </div>
            </Typography>
        </nav>
    );
};


export default Navbar;