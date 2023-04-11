import React from "react";
import '../Home.css'
import img from '../../images/shopbeta logo.png'
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Preloader from "../../components/Preloader";


const NewAccount = ({bio, location, website, contactEmail}) => {

const token = localStorage.getItem("token")
const me = localStorage.getItem("meId")
console.log(me)

const changes = async () => {
    const update = {
        username: document.querySelector('.username').value,
        bio: document.querySelector('.bio').value,
        email: document.querySelector('.email').value,
        password: document.querySelector('.password').value,
        phonenumber: document.querySelector('.phonenumber').value,
        location: document.querySelector('.location').value,
        website: document.querySelector('.website').value,
        contactEmail: document.querySelector('.contactEmail').value
    }

    await fetch("https://shopbeta-api.onrender.com/users/updateme", {
        method: "PATCH",
        headers: {
            'Authorization' : 'Bearer ' + token,
            'Accept' : 'application/json, text/plain',
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(update)
    })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => {
        console.log(err.message)
    })
}

const [user, setUser] = useState({})
    useEffect(() => {
        fetch(`https://shopbeta-api.onrender.com/users/${me}`, {
            method: "GET",
            headers: {
                'Accept' : 'application/json, text/plain',
                'Content-Type' : 'application/json'
            },
        })
        .then((res) => res.json())
        .then((data) => setUser(data))
        .catch((err) => {
            console.log(err.message)
        })
}, [me])


const handleSubmit = e => {
    e.preventDefault()
    changes()
}

        return(
            <div className="">
                <Preloader />
                    <div className="tc">
                      <div style={{width: '360px'}} className="dib pa3 tc">
                        <div className="pv3">
                            <div className='tc code' style={{fontSize: '27px', fontWeight: '500'}}><img src={img} alt="logo" className="tc" width="75px" height="75px" /></div>
                            <p className="pv2 fw6 tl ph3"><small className="f3 orange">{user.username} </small><small className="f5">We'd like to know more <small className="green f4">information</small> about you.</small> Let's take a <small className="green f4">few seconds</small> to finish setting up your account</p>
                                <form onSubmit={handleSubmit}>
                                    <div className="tl pv1">
                                        <p className="pv1 f5 fw5">Bio information</p>
                                        <p className="pv1">
                                            <small className="icon-note f4 fw5"></small>
                                            <textarea id="myInput" name="bio" value={bio} className="bio br3 ba pa3 w-100 h3" placeholder="Something about your profile..." aria-label="With textarea" required></textarea>
                                        </p>
                                    </div>
                                    <div className="tl pv2">
                                        <p className="pv1 f5 fw5">Location</p>
                                        <small className="icon-location-pin f4 fw5"></small>
                                        <input id="location" type="text" name="location" value={location} className="location br3 ba pa3 w-100" placeholder="Type in your location..." required />
                                    </div>
                                    <div className="tl pv2">
                                        <p className="pv1 f5 fw5">Website URL</p>
                                        <small className="icon-globe f4 fw5"></small>
                                        <input type="url" name="website" value={website} className="website br3 ba pa3 w-100" placeholder="Your website url..." required />
                                    </div>
                                    <div className="tl pv2">
                                        <p className="pv1 f5 fw5">Contact Email</p>
                                        <small className="icon-envelope f4 fw5"></small>
                                        <input type="email" name="contactEmail" value={contactEmail} className="contactEmail br3 ba pa3 w-100" placeholder="Your contact email..." required autoComplete="username" />
                                    </div>
                                    <div className="tl pv2">
                                        <input name="check" id="exampleCheck" type="checkbox" className="pr2" required /><label for="exampleCheck" className="form-check-label ph2">Accept our <a href="https://shopbetaonline.onrender.com/terms of use.html">Terms and Conditions</a>.</label>
                                    </div>
                                    <div>
                                    <div className="pv2">
                                        <div className="pv2">
                                            <Link className="link" to={"/assets/indexes/Avatar"}>
                                                <p className="tr">
                                                    <button type="submit" className="index-button hover-bg-mid-gray pa2 tc br-pill ba pointer ph5 ma1 grow pv3 b fw6">Next</button>
                                                </p>
                                            </Link>
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

export default NewAccount;