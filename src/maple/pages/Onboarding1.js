
import React from "react";
import '../assets/css/global.css'
import img from '../assets/images/facebook.png'
import { Link } from "react-router-dom";


const Onboarding1 = () => {

    return(
        <div className="">
             <div className="pa2" style={{position: 'fixed', width: '100%', backgroundColor: '#ffffff', borderBottom: '1px thin black'}}>
                <nav className="navbar navbar-expand-lg">
                    <div style={{fontSize: '29px'}} className="container tc">
                        <img src={img} alt="logo" className="" width="40px" height="40px" />
                    </div>
                </nav>
            </div>

            <main className="pv7">
                <div className="pa3 container" style={{width: '360px'}}>
                    <section className="container">
                        <div style={{fontSize: '29px', fontWeight: '500'}}>
                            <p className="pv3">Seamlessly<br /> interact with buyers and sellers anytime, anywhere.</p>
                        </div>
                    </section>  
                    <div className="pv3 tc">
                        <div className="pv2">
                            <Link 
                                to={"../maple/pages/onboarding2"}>
                                <button type="submit" className="button-bg bg-red white pa2 tc br-pill f4 ba pointer w-90 pv3">
                                    Create account
                                </button>
                            </Link>
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

export default Onboarding1;