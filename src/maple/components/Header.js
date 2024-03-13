import React from "react";
import img from '../assets/images/tst-image3.jpg'
import '../assets/css/simple-line-icons/css/simple-line-icons.css';
import { Link } from "react-router-dom";

const HomeHeader = () => {

    // const me = localStorage.getItem("meId")
    const me = 'localStorage.getItem("meId")'
    console.log(me)

    return(
        <div className="pb4">
            <nav className="navbar navbar-expand-lg pv1" style={{position: 'fixed', width: '100%', backgroundColor: '#ffffff', borderBottom: '1px thin black'}}>
                {!me || <div style={{fontSize: '29px'}} className="pa2 ph2 container">
                    <span className="navbar-brand pointer">
                        <div className="">
                            <Link className="link tj flex flex-wrap black" to={"../maple/pages/userprofile"}>
                                <span>
                                    <img src={img} alt="avatar" className="br4 pointer" width="50px" height="50px" />
                                </span>
                                <span className="pa2">
                                    <p className="f4">John Doe</p>
                                    <p className="pv2 gray pointer f5">
                                        <i className="f5 fi fi-rs-marker"></i> 
                                        <small className="ph2 f5">Abuja, Nigeria</small>
                                        <i className="f5 fi fi-rs-angle-down"></i>
                                    </p>
                                </span>
                            </Link>
                        </div>
                    </span>
                    {/* <span className="navbar-brand">
                        <Link 
                            to={"../pages/profile"}  title="profile">
                            <img src={img} alt="user" className="br4 pointer" width="45px" height="45px" /> 
                        </Link>
                    </span>
                    <span className="navbar-brand">
                        <small className="ph2 f4 pointer">Abuja, Nigeria</small>
                        <small className="f5 icon-arrow-down"></small> 
                    </span> */}
                    <span className="">
                        <i style={{fontSize: '25px'}} className="pr3 pointer fi fi-rs-bell"></i> 
                    </span>
                </div>}

                {!me && <div style={{fontSize: '29px'}} className="ph2 container">
                    <span className="navbar-brand">
                        <img src={img} alt="logo" className="br4 pointer" width="45px" height="45px" /> 
                    </span>
                    <span className="navbar-brand">
                        <h3 className="">Welcome to Maple</h3>
                    </span>
                    <span className="" style={{fontSize: '15px', fontWeight: '500'}}>
                        <button className="pa3 br-pill pointer f6 ph4 grow ba">Login</button>
                        <small className="ph2"></small> 
                        <button style={{backgroundColor: '#FF4747'}} className="pa3 br-pill pointer f6 ph4 grow ba">Signup</button>
                    </span>
                </div>}
            </nav>
        </div>
    );
};

const CategoryHeader = () => {

    return(
        <div className="pb4">
            <nav className="navbar navbar-expand-lg pv1" style={{position: 'fixed', width: '100%', backgroundColor: '#ffffff', borderBottom: '1px thin black'}}>
                <div style={{fontSize: '29px'}} className="pa3 container">
                    <span className="navbar-brand pointer">
                        <Link 
                            to={"../pages/home"} className="link black"  title="home">
                            <small style={{fontSize: '25px'}} className="icon-arrow-left-circle"></small>
                        </Link>
                    </span>
                    <span className="navbar-brand pointer">
                        <h3 className="ph2 f4 pointer">Categories</h3>
                    </span>
                    <span className="pointer">
                        <small style={{fontSize: '25px'}} className="icon-magnifier"></small> 
                    </span>
                </div>
            </nav>
        </div>
    );
};


const ViewProductHeader = () => {

    return(
        <div className="pt3 pb4">
            <nav className="navbar navbar-expand-lg pv1" style={{position: 'fixed', width: '100%', backgroundColor: '#ffffff', borderBottom: '1px thin black'}}>
                <div style={{fontSize: '29px'}} className="ph3 container">
                    <span className="navbar-brand pointer">
                        <Link 
                            to={"../pages/home"} className="link black">
                            <i style={{fontSize: '35px'}} className="fi fi-rs-arrow-circle-left"></i>
                        </Link>
                    </span>
                    <span className="navbar-brand">
                        <h3 className="ph2 f4">Product Details</h3>
                    </span>
                    <span className="pointer">
                        <i style={{fontSize: '35px'}} className="fi fi-rs-share"></i> 
                    </span>
                </div>
            </nav>
        </div>
    );
};


const OnboardingHeader = () => {

    return(
        <div className="pv3">
            <nav className="navbar navbar-expand-lg pv1" style={{position: 'fixed', width: '100%', backgroundColor: 'transparent', borderBottom: '1px thin black'}}>
                <div style={{fontSize: '29px'}} className="ph4 container">
                    <span className="navbar-brand pointer">
                        <Link 
                            to={"../pages/home"} className="link black"  title="home">
                            <small style={{fontSize: '29px'}} className=""></small>
                        </Link>
                    </span>
                    <span className="navbar-brand pointer">
                        <small className="ph2 f4 pointer"></small>
                    </span>
                    <span className="pointer">
                        <small style={{fontSize: '20px'}} className="red">Skip</small> 
                    </span>
                </div>
            </nav>
        </div>
    );
};


export {
    HomeHeader,
    CategoryHeader,
    ViewProductHeader,
    OnboardingHeader
}