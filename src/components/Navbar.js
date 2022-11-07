import React from "react";
import { makeStyles } from "@material-ui/core";
import { Typography } from "@material-ui/core";
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
        <nav className="bg-white pv2 shadow-5" style={{position: 'fixed', width: '100%'}}>
            <Typography>
            <div style={{color: '#ee9617', fontSize: '21px', fontWeight: '500', letterSpacing: '-1px'}} className="pa2">ShopBeta</div>
            <div className="tr ph2">
                <Link className="link tr f4 link black ph3 icon-magnifier pointer hover-bg-light-blue br3 pa2 grow" to={"/assets/vendor/SearchPage"}></Link>
                <Link className="link f4 link black ph3 icon-basket pointer hover-bg-light-blue br3 pa2 grow" to={"/assets/vendor/Cart"}></Link>
                <Link className="link f4 link black ph4 icon-settings pointer hover-bg-light-blue br3 pa2 grow"to={"/assets/vendor/Settings"}></Link>
                <Link to={"/assets/vendor/Profile"} className="hover-bg-light-blue tr pointer br3 pa2 f4 grow">
                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="black bi bi-person-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z"/>
                    <path fill-rule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                    <path fill-rule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"/>
                    </svg>
                </Link>
            </div>
            </Typography>
        </nav>
    );
};


export default Navbar;