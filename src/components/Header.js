import React from "react";
import { Typography } from "@material-ui/core";
import '../assets/Home.css'
import img from '../images/shopbeta logo.png'
import './simple-line-icons/css/simple-line-icons.css';

const Header = () => {

    return(
        <nav className="bg-white fw5 navbar tc pv1" style={{position: 'fixed', width: '100%', borderBottom: '1px thin black'}}>
            <Typography>
                <div style={{fontSize: '29px'}} className="ph2">
                    <span className='tc code' style={{fontSize: '12px', fontWeight: '500'}}>
                        <img src={img} alt="logo" className="tc" width="50px" height="50px" />
                    </span>  
                </div>
            </Typography>
        </nav>
    );
};


export default Header;