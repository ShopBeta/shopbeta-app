
import React from "react";
import '../assets/css/global.css'
import img from '../assets/images/search.png'
import { Link } from "react-router-dom";
import { DriveEtaSharp } from "@mui/icons-material";


const Onboarding2 = () => {

    return(
        <div className="">
             <div className="pa2" style={{position: 'fixed', width: '100%', backgroundColor: '#ffffff', borderBottom: '1px thin black'}}>
                <nav className="navbar navbar-expand-lg">
                    <div style={{fontSize: '29px'}} className="container tc">
                        <img src={img} alt="logo" className="" width="40px" height="40px" />
                    </div>
                </nav>
            </div>

            <main className="pv6">
                <div className="pa3 container" style={{width: '360px'}}>
                    <section className="container">
                        <div style={{fontSize: '29px', fontWeight: '500'}}>
                            <p className="pv3">Wishlist to dream product in one click.<br /> Swift and reliable deliveries.</p>
                        </div>
                    </section>  

                    <div className="pv3 tc">
                        <div className="pv2">
                            <Link 
                                to={"../maple/pages/signup"}>
                                <button type="submit" className="button-bg bg-transparent pa2 tc br-pill ba pointer w-90 pv3">
                                    <div className="link tj flex flex-wrap black ph4">
                                        <span className="ph2">
                                            <img src={img} alt="logo" className="" width="20px" height="20px" />
                                        </span>
                                        <span className="pa1">
                                            <p className="f4">Continue with Google</p>                                               
                                        </span>
                                    </div>
                                </button>
                            </Link>
                        </div>

                        <div className="pv1">
                            <p>or</p>
                        </div>

                        <div className="pv2">
                            <Link 
                                to={"../maple/pages/signup"}>
                                <button type="submit" className="button-bg bg-red white pa2 tc f4 br-pill ba pointer w-90 pv3">
                                    Continue with Email
                                </button>
                            </Link>
                        </div>

                        <div className="pv4 container tl">
                            <p className="container">
                                By signing up, you agree to our <a className="blue link" href="https://shopbetaonline.onrender.com/terms of use.html">Terms, Privacy Policy, and Cooke use</a>
                            </p>
                        </div>
                    </div>
                 </div>
            </main>

            <footer>
                <div className="pb4" style={{position: 'fixed', width: '100%', backgroundColor: '#ffffff', borderBottom: '1px thin black', borderTop: '1px thick black', bottom: '0', left: '0', marginTop: '1rem', padding: '1rem'}}>
                    
                    <div className="tc pb4">
                        Have an account already?
                        <Link 
                            to={"../maple/pages/signin"} className="red link">
                            <small className="red f5 ph2">Sign In</small>
                        </Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Onboarding2;