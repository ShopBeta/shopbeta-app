import React from "react";
import '../Home.css'
import img from '../../images/shopbeta logo.png'
import { Link } from "react-router-dom";
import Preloader from "../../components/Preloader";


const ForgotPassword = ({ email }) => {

const token = localStorage.getItem("token") 
console.log(token)

const forgotPassword = async () => {

    const email = {
        email: document.querySelector('.email').value,
    }
    
    await fetch(`https://shopbeta-api.onrender.com/users/forgotPassword`, {
        method: "POST",
        headers: {
            'Authorization' : 'Bearer ' + token,
            'Accept' : 'application/json, text/plain',
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(email)
    })
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        window.localStorage.setItem("meId", data._id)

        const email = document.getElementById('email')
        email.style['display'] = 'contents'

        const button = document.getElementById('button')
        button.style['display'] = 'none'

        const error = document.getElementById('error')
        error.style['display'] = 'none'
    })
    .catch((err) => {
        console.log(err.message)

        const error = document.getElementById('error')
        error.style['display'] = 'contents'
        
        const email = document.getElementById('email')
        email.style['display'] = 'none'
    })
}

const handClick = (event) => {
    event.currentTarget.innerHTML = 'Loading...';
    event.currentTarget.style.fontWeight = 'bold';
}

const handleSubmit = e => {
    e.preventDefault()
    forgotPassword()
}

        return(
            <div className="">
                <Preloader />
                    <div className="tc">
                      <div style={{width: '360px'}} className="dib pa3 tc pt5">
                        <div className="pv3">
                            <div className='tc code' style={{fontSize: '27px', fontWeight: '500'}}><img src={img} alt="logo" className="tc" width="75px" height="75px" /></div>
                            <p className="pv2 fw6 tc"><small className="orange f4">Forgot your password?</small><br/> Use the form below to <small className="green f4">recover</small> your account</p>
                                <form onSubmit={handleSubmit}>
                                    <div className="tl pv2">
                                        <p className="pv1 f5 fw5">Email</p>
                                        <small className="icon-envelope f4 fw5"></small>
                                        <input type="email" name="email" value={email} className="email br3 ba pa3 w-100" placeholder="Your email..." required autoComplete="email" />
                                    </div>
                                    <div id="error" style={{display: 'none'}} className="orange fw5 pv3 f5 red">
                                        <small className="icon-info red f5 ph2"></small>
                                        Something went wrong, try again later!
                                    </div>
                                    <div className="tl pv2">
                                        <input name="check" id="exampleCheck" type="checkbox" className="pr2" /><label for="exampleCheck" className="form-check-label ph2">Subscribe to our newsletters</label>
                                    </div>
                                    <p className="tr"><small className="ph2">Login existing account?</small>
                                        <Link className="link" to={"/assets/indexes/Login"}><small className="hover-blue orange f5 fw4 pointer">Login</small></Link>
                                    </p>
                                    <div>
                                        <div className="pv2">
                                            <div className="pv2">
                                                <p id="email" style={{display: 'none'}} className="tc code f4">
                                                    #<small className="ph2">Check the email we sent you to reset your</small>
                                                    <small className="fw6 green f4 fw4 pointer">password</small>
                                                </p>
                                                <p id="button" className="tc">
                                                    <button type="submit" onClick={handClick} className="index-button hover-bg-mid-gray pa2 tc br-pill ba pointer ph5 ma1 grow pv3 b fw6">Recover password</button>
                                                </p>
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

export default ForgotPassword;