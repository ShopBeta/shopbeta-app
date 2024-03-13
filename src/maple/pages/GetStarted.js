
import React from "react";
import '../assets/css/global.css'
import { Link } from "react-router-dom";
import img from '../assets/images/data-points-concept-illustration_114360-1715.avif'
// import Preloader from "./Preloader";


const GetStarted = () => {

    return(
        <div className="">
            <main>
                <section className="tc">
                    <div>
                        <img src={img} alt="get started" className="tc" />
                    </div>
                </section>  
            </main>

            <footer>
                <div className="tc" style={{position: 'fixed', width: '100%', backgroundColor: '#ffffff', borderBottom: '1px thin black', borderTop: '1px thick black', bottom: '0', left: '0', marginTop: '1rem', padding: '1rem'}}>
                    <div style={{width: '360px'}} className="container pb3">
                        <div className="">
                            <p className="f3"><small className="f3 red">Your Shopping Destination </small><br/> for Everything</p>
                            <p className="pv4 f6 tc">Welcome to maple, seamlessly,<br />interact with buyers and sellers anytime, anywhere.</p>
                        </div>
                        <div className="tc pb4 grow">
                            <Link 
                                to={"../maple/pages/onboardingscreen1"} className="link black">
                                <button type="button" className="w-100 ba pa3 f4 br-pill button-bg bg-red white pointer">
                                    <small className="pv1">Let's Get Started</small>
                                </button>
                            </Link>
                        </div> 
                        <div className="pb3">
                            Already have an account?
                            <Link 
                                to={"../maple/pages/signin"} className="red">
                                <small className="red f5 ph2">Sign in</small>
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default GetStarted;