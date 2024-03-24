import React from "react";
import img from '../assets/images/tst-image3.jpg'
import '../assets/css/simple-line-icons/css/simple-line-icons.css';
import { Link } from "react-router-dom";

const HomeHeader = () => {
    
    const me = 'localStorage.getItem("meId")'
    console.log(me)

    return(
        <div className="" style={{position: 'fixed', width: '100%', backgroundColor: '#ffffff', borderBottom: '1px thin black'}}>
            <nav className="navbar navbar-expand-lg">
                {!me || <div style={{fontSize: '29px'}} className="container">
                    <span className="navbar-brand pointer">
                        <div className="">
                            <Link className="link tj flex flex-wrap black" to={"../maple/pages/yourprofile"}>
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
                    <span className="">
                        <i style={{fontSize: '25px'}} className="pr3 pointer fi fi-rs-bell"></i> 
                    </span>
                </div>}

                {!me && <div style={{fontSize: '29px'}} className="container pv2">
                    <span className="navbar-brand">
                        <h2 className="">Welcome</h2>
                    </span>
                    <span className="" style={{fontSize: '15px', fontWeight: '500'}}>
                        <span className="hover-white pointer">
                            <Link 
                                to={"/maple/pages/signin"} className="link black">
                                <small className="f5 br-pill button-bg field-color b--transparent ph4 pa3">Signin</small>
                            </Link>
                        </span>
                        <span className="ph2">
                            <small className=""></small>
                        </span>
                        <span className="hover-white pointer">
                            <Link 
                                to={"/maple/pages/signup"} className="link black">
                                <small className="f5 button-bg br-pill b--transparent bg-red white ph4 pa3">Signup</small>
                            </Link>
                        </span>
                    </span>
                </div>}
            </nav>
            <div className="navbar navbar-expand-lg ph2 tc">
                <div className="pv2 br4 container" style={{fontSize: '30px', fontWeight: '500', backgroundColor: '#f6f6f6'}}>
                    <Link 
                        to={"/maple/pages/search"} className="link black">
                        <span className="navbar-brand">
                            <i className="fi fi-rs-search f3 ph2"></i> 
                            <small className="f4 gray ph3">Search</small>
                        </span>
                    </Link>
                    <Link 
                        to={"/maple/pages/visualsearch"} className="link black" title="visual search">
                        <span className="">
                            <i className="fi fi-rs-camera f3 ph2"></i>  
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

const FeedHeader = () => {

    return(
        <div className="pa2" style={{position: 'fixed', width: '100%', backgroundColor: '#ffffff', borderBottom: '1px thin black'}}>
            <nav className="navbar navbar-expand-lg">
                <div style={{fontSize: '29px'}} className="container">
                    <span className="navbar-brand">
                        <h2 className="">Feeds</h2>
                    </span>
                    <span className="">
                        <span className="pointer">
                            <span className="">
                                <i style={{fontSize: '25px'}} className="pointer fi fi-rs-bell"></i>
                            </span>
                            <span className="ph2">
                             
                             </span>
                            <span className="">
                                <Link className="link black" to={"../maple/pages/yourprofile"}>
                                    <img src={img} alt="avatar" className="br-100 pointer" width="29px" height="29px" />
                                </Link>
                            </span>
                        </span>
                    </span>
                </div>
            </nav>
            <div className="navbar navbar-expand-lg ph2 tc">
                <div className="pv2 container">
                    <span className="navbar-brand">
                        <small className="f5 br-pill b--transparent red field-color ph5 pa3">Posts</small>
                    </span>
                    <span className="hover-white pointer">
                        <small className="f5 button-bg br-pill b--transparent field-color ph5 pa3">Videos</small>
                    </span>
                </div>
            </div>
        </div>
    );
};



const VideoHeader = () => {

    return(
        <div className="pa2" style={{position: 'fixed', width: '100%', backgroundColor: '#ffffff', borderBottom: '1px thin black'}}>
            <nav className="navbar navbar-expand-lg">
                <div style={{fontSize: '29px'}} className="container">
                    <span className="navbar-brand">
                        <h2 className="">Feeds</h2>
                    </span>
                    <span className="">
                        <span className="pointer">
                            <span className="">
                                <i style={{fontSize: '25px'}} className="pointer fi fi-rs-bell"></i>
                            </span>
                            <span className="ph2">
                             
                             </span>
                            <span className="">
                                <Link className="link black" to={"../maple/pages/yourprofile"}>
                                    <img src={img} alt="avatar" className="br-100 pointer" width="29px" height="29px" />
                                </Link>
                            </span>
                        </span>
                    </span>
                </div>
            </nav>
            <div className="navbar navbar-expand-lg ph2 tc">
                <div className="pv2 container">
                    <span className="navbar-brand">
                        <small className="f5 br-pill button-bg b--transparent field-color ph5 pa3">Posts</small>
                    </span>
                    <span className="hover-white pointer">
                        <small className="f5 br-pill b--transparent red field-color ph5 pa3">Videos</small>
                    </span>
                </div>
            </div>
        </div>
    );
};


const CategoryHeader = () => {

    return(
        <div className="pv3">
            <nav className="navbar navbar-expand-lg pv1" style={{position: 'fixed', width: '100%', backgroundColor: '#ffffff', borderBottom: '1px thin black'}}>
                <div style={{fontSize: '29px'}} className="ph3 container">
                    <span className="navbar-brand pointer">
                        <Link 
                            to={"../pages/home"} className="link black"  title="home">
                            <small style={{fontSize: '35px'}} className="icon-arrow-left-circle"></small>
                        </Link>
                    </span>
                    <span className="navbar-brand">
                        <h3 className="ph2 f3">Category</h3>
                    </span>
                    <span className="pointer">
                        <i style={{fontSize: '28px'}} className=""></i> 
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

const ReviewHeader = () => {

    return(
        <div className="pv3">
             <nav className="navbar navbar-expand-lg pv1" style={{position: 'fixed', width: '100%', backgroundColor: '#ffffff', borderBottom: '1px thin black'}}>
                <div style={{fontSize: '29px'}} className="ph3 container">
                    <span className="navbar-brand pointer">
                        <Link 
                            to={"../maple/pages/viewproduct"} className="link black"  title="home">
                            <small style={{fontSize: '35px'}} className="icon-arrow-left-circle"></small>
                        </Link>
                    </span>
                    <span className="navbar-brand">
                        <h3 className="ph2 f3">Ratings & Review</h3>
                    </span>
                    <span className="pointer">
                        <small style={{fontSize: '30px'}} className=""></small> 
                    </span>
                </div>
            </nav>
        </div>
    );
};

const WriteReviewHeader = () => {

    return(
        <div className="pv3">
             <nav className="navbar navbar-expand-lg pv1" style={{position: 'fixed', width: '100%', backgroundColor: '#ffffff', borderBottom: '1px thin black'}}>
                <div style={{fontSize: '29px'}} className="ph3 container">
                    <span className="navbar-brand pointer">
                        <Link 
                            to={"../maple/pages/reviews"} className="link black"  title="home">
                            <small style={{fontSize: '35px'}} className="icon-arrow-left-circle"></small>
                        </Link>
                    </span>
                    <span className="navbar-brand">
                        <h3 className="ph2 f3">Leave Review</h3>
                    </span>
                    <span className="pointer">
                        <small style={{fontSize: '30px'}} className=""></small> 
                    </span>
                </div>
            </nav>
        </div>
    );
};

const WishlistHeader = () => {

    return(
        <div className="pv3" style={{position: 'fixed', width: '100%', backgroundColor: '#ffffff', borderBottom: '1px thin black'}}>
             <nav className="navbar navbar-expand-lg pv1">
                <div style={{fontSize: '29px'}} className="ph3 container">
                    <span className="navbar-brand pointer">
                        <Link 
                            to={"../maple/pages/viewproduct"} className="link black"  title="home">
                            <small style={{fontSize: '35px'}} className="icon-arrow-left-circle"></small>
                        </Link>
                    </span>
                    <span className="navbar-brand">
                        <h3 className="ph2 f3">Wishlist</h3>
                    </span>
                    <span className="pointer">
                        <small style={{fontSize: '30px'}} className=""></small> 
                    </span>
                </div>
            </nav>
            <div className="navbar navbar-expand-lg pt3 tc">
                <div style={{fontSize: '30px', fontWeight: '500'}} className="container">
                    <span className="navbar-brand hover-white pointer">
                        <small className="f5 button-bg br-pill b--transparent field-color ph3 pa2">All</small>
                    </span>
                    <span className="navbar-brand hover-blue pointer">
                        <small className="f5 br-pill bg-red b--transparent white ph3 pa2">Shoes</small>
                    </span>
                    <span className="navbar-brand hover-white pointer">
                        <small className="f5 button-bg br-pill b--transparent field-color ph3 pa2">Clothes</small>
                    </span>
                    <span className="hover-white pointer">
                        <small className="f5 button-bg br-pill b--transparent field-color ph3 pa2">Electronics</small>
                    </span>
                </div>
            </div>
        </div>
    );
};


export {
    HomeHeader,
    FeedHeader,
    VideoHeader,
    CategoryHeader,
    OnboardingHeader,
    ReviewHeader,
    WriteReviewHeader,
    WishlistHeader
}