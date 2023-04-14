import React from "react";
import '../Home.css'
import img from '../../images/shopbeta logo.png'
import { Link } from "react-router-dom";
import Preloader from "../../components/Preloader";


const Signup = () => {

const newUser = async () => {

    const user = {
        username: document.querySelector('.username').value,
        email: document.querySelector('.email').value,
        password: document.querySelector('.password').value,
        phonenumber: document.querySelector('.phonenumber').value,
    }
    await fetch('https://shopbeta-api.onrender.com/users/signup', {
        method: 'POST',
        headers: {
            'Accept' : 'application/json, text/plain',
            'Content-Type': "application/json",
        },
        body: JSON.stringify(user)       
    })
    .then((res) => res.json())
    .then((data) => window.localStorage.setItem("token", data.token))
    .then((data) => window.localStorage.setItem("meId", data.user._id))
    .catch((err) => {
        console.log(`Couldn't register new user`)
    })

    const button_sign = document.getElementById('sign')
    button_sign.style['display'] = 'none'

    const button_next = document.getElementById('next')
    button_next.style['display'] = 'contents'
}

    const handleSubmit = e => {
        e.preventDefault()
        newUser()
    }

        return(
            <div className="">
                <Preloader />
                    <div className="tc">
                      <div style={{width: '360px'}} className="dib pa3 tc">
                        <div className="pv3">
                            <div className='tc code' style={{fontSize: '27px', fontWeight: '500'}}><img src={img} alt="logo" className="tc" width="75px" height="75px" /></div>
                            <p className="pv2 fw6 tc"><small className="orange f4">Welcome</small><br/> It only takes a <small className="green f4">few seconds</small> to create your account</p>
                                <form onSubmit={handleSubmit}>
                                    <div className="tl pv2">
                                        <p className="pv1 f5 fw5">Username</p>
                                        <small className="icon-user f4 fw5"></small>
                                        <input type="text" name="username" className="username br3 ba pa3 w-100" placeholder="Type in username..." required />
                                    </div>
                                    <div className="tl pv2">
                                        <p className="pv1 f5 fw5">Phone Number</p>
                                        <small className="icon-phone f4 fw5"></small>
                                        <input type="tel" name="phonenumber" className="phonenumber br3 ba pa3 w-100" placeholder="Input phone number..." required />
                                    </div>
                                    <div className="tl pv2">
                                        <p className="pv1 f5 fw5">Email</p>
                                        <small className="icon-envelope f4 fw5"></small>
                                        <input type="email" name="email" className="email br3 ba pa3 w-100" placeholder="Your email..." required autoComplete="email" />
                                    </div>
                                    <div className="tl pv2">
                                        <p className="pv1 f5 fw5">Password</p>
                                        <small className="icon-lock f4 fw5"></small>
                                        <input type="password" name="password" className="password br3 ba pa3 w-100" placeholder="password..." required autoComplete="current-password" />
                                    </div>
                                    <div className="tl pv2">
                                        <input name="check" id="exampleCheck" type="checkbox" className="pr2" required /><label for="exampleCheck" className="form-check-label ph2">Accept our <a href="https://shopbetaonline.onrender.com/terms of use.html">Terms and Conditions</a>.</label>
                                    </div>
                                    <p className="tr"><small className="ph2">Already have an account?</small>
                                        <Link className="link" to={"/assets/indexes/Login"}><small className="hover-blue orange f5 fw4 pointer">Login</small></Link>
                                    </p>
                                    <div>
                                        <div className="pv2">
                                            <div className="pv2">
                                                <p id="sign" className="tc">
                                                    <button type="submit" className="index-button hover-bg-mid-gray pa2 tc br-pill ba pointer ph6 ma1 grow pv3 b fw6">Signup</button>
                                                </p>
                                                <div id="next" style={{display: 'none'}} className="tc">
                                                    <p className="tc green fw6 pv2 f4">
                                                        <small className="ph2 f4 icon-check orange"></small>
                                                        Signup
                                                        <small className="fw6 orange f4 fw4 pointer"> Successful</small>
                                                    </p>
                                                    <Link className="link" to={"/assets/indexes/NewAccount"}> 
                                                        <button className="index-button hover-bg-mid-gray pa2 tc br-pill ba pointer ph6 ma1 grow pv3 b fw6">Next<small className="icon-arrow-right pl2"></small></button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
    );
}

export default Signup;