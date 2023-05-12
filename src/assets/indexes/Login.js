import React from "react";
import '../Home.css'
import img from '../../images/shopbeta logo.png'
import { Link } from "react-router-dom";
import Preloader from "../../components/Preloader";


const Login = () => {


const loginUser = async () => {

    const user = {
        email: document.querySelector('.email').value,
        password: document.querySelector('.password').value
    }

    await fetch('https://shopbeta-api.onrender.com/users/login', {
        method: 'POST',
        headers: {
            'Accept' : 'application/json, text/plain',
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(user)
        })
        .then((res) => res.json())
        .then((data) => {
            window.localStorage.setItem("token", data.token)
            window.localStorage.setItem("meId", data.user._id)

            const button_login = document.getElementById('login')
            button_login.style['display'] = 'none'
        
            const button_home = document.getElementById('home')
            button_home.style['display'] = 'contents'

            const check = document.getElementById('check')
            check.style['display'] = 'none'

            const error = document.getElementById('error')
            error.style['display'] = 'none'
        })
        .catch((err) => {
            console.log(err.message)

            const error = document.getElementById('error')
            error.style['display'] = 'contents'
        })
}

const handClick = (event) => {
    event.currentTarget.innerHTML = 'Loading...';
    event.currentTarget.style.fontWeight = 'bold';
}

const token = localStorage.getItem("token")
const me = localStorage.getItem("meId")

console.log(token)
console.log(me)

const handleSubmit = e => {
    e.preventDefault()
    loginUser()
}

        return(
            <div className="">
                <Preloader />
                    <div className="tc">
                      <div style={{width: '360px'}} className="dib pa3 tc pt5">
                        <div className="pv3">
                            <div className='tc code' style={{fontSize: '27px', fontWeight: '500'}}><img src={img} alt="logo" className="tc" width="75px" height="75px" /></div>
                            <p className="pv2 fw6 tc"><small className="orange f4">Welcome back</small><br/> please sign into your <small className="green f4">account</small> below</p>
                                <form onSubmit={handleSubmit}>
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
                                    <div id="error" style={{display: 'none'}} className="orange fw5 pv3 f5 red">
                                        <small className="icon-info f5 red ph2"></small>
                                        wrong email or password!
                                    </div>
                                    <div id="check">
                                        <div className="tl pv2">
                                            <input name="check" id="exampleCheck" type="checkbox" className="pr2" /><label for="exampleCheck" className="form-check-label ph2">Keep me logged in</label>
                                        </div>
                                        <p className="tr"><small className="ph2">Don't have an account?</small>
                                            <Link className="link" to={"/assets/indexes/Signup"}><small className="hover-blue orange fw4 f5 pointer">Signup</small></Link>
                                        </p>
                                    </div>
                                    <div>
                                        <div className="pv2">
                                            <div className="pv2">
                                                <div id="login" className="tc">
                                                    <small className="ph2">Forgot your password?</small>
                                                    <Link className="link" to={"/assets/indexes/ForgotPassword"}><small className="hover-blue orange f5 fw4 pointer">Recover Password</small></Link>
                                                    <button onClick={handClick} type="submit" className="index-button hover-bg-mid-gray pa2 tc br-pill ba pointer ph6 ma1 grow pv3 b fw6">Login</button>
                                                </div>
                                                <div id="home" style={{display: 'none'}} className="tc">
                                                    <p className="tc green fw6 pv3 f4">
                                                        <small className="ph2 f4 icon-check orange"></small>
                                                        Login
                                                        <small className="fw6 orange f4 fw4 pointer"> Successful</small>
                                                    </p>
                                                    <Link className="link" to={"/assets/Home"}>
                                                        <button className="index-button hover-bg-mid-gray pa2 tc br-pill ba pointer ph5 ma1 grow pv3 b fw6">Home<small className="icon-arrow-right pl2"></small></button>
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

export default Login;