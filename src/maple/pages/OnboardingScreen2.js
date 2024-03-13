
import React from "react";
import '../assets/css/global.css'
import img from '../assets/images/online-wishes-list-concept-illustration.avif'
import { Link } from "react-router-dom";
import { OnboardingHeader } from "../components/Header";


const OnboardingScreen2 = () => {

    return(
        <div className="">
            <OnboardingHeader />
            <main>
                <section className="container tc">
                    <div className='tc'>
                        <img src={img} alt="wishlist"/>
                    </div>
                </section>  
            </main>

            <footer>
                <div className="pb4" style={{position: 'fixed', width: '100%', backgroundColor: '#ffffff', borderBottom: '1px thin black', borderTop: '1px thick black', bottom: '0', left: '0', marginTop: '1rem', padding: '1rem'}}>
                    <div className="tc">
                        <p className="f3"><small className="f3 red">Wishlist to Dream Product, </small><br/> in Just a Few Clicks</p>
                        <p className="pv4 f6">Welcome to maple, seamlessly,<br />interact with buyers and sellers anytime, anywhere.</p>
                    </div>
                    <nav className="navbar navbar-expand-lg tc">
                        <div style={{fontSize: '29px'}} className="pa3 container">
                            <span className="navbar-brand pointer">
                                <Link 
                                    to={"../maple/pages/onboardingscreen1"} className="link black">
                                    <small style={{fontSize: '35px'}} className="icon-arrow-left-circle"></small> 
                                </Link>
                            </span>
                            <span className="navbar-brand pointer">
                                <small className="navbar-brand f5 pointer br-pill field-color pa3">1</small>
                                <small className="navbar-brand f3 red pointer br-pill field-color pa3">2</small>
                                <small className="navbar-brand f5 pointer br-pill field-color pa3">3</small>
                            </span>
                            <span className="pointer">
                                <Link 
                                    to={"../maple/pages/onboardingscreen3"} className="link black">
                                    <small style={{fontSize: '35px'}} className="icon-arrow-right-circle red"></small>
                                </Link>
                            </span>
                        </div>
                    </nav>
                </div>
            </footer>
        </div>
    );
}

export default OnboardingScreen2;