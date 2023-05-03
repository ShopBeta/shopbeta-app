import React from "react";
import '../Home.css'
import img from '../../images/shopbeta logo.png'
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Preloader from "../../components/Preloader";


const NewAccount = () => {

const me = localStorage.getItem("meId")
const token = localStorage.getItem("token")
console.log(me)
console.log(token)

const changes = async () => {

    const update = {
        bio: document.querySelector('.bio').value,
        location: document.querySelector('.location').value,
        website: document.querySelector('.website').value,
        contactEmail: document.querySelector('.contactEmail').value
    }

    await fetch(`https://shopbeta-api.onrender.com/users/update/${me}`, {
        method: 'PATCH',
        headers: {
            'Accept' : 'application/json, text/plain',
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(update)
    })
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
             
        const button_update = document.getElementById('update')
        button_update.style['display'] = 'none'

        const button_next = document.getElementById('next')
        button_next.style['display'] = 'contents'

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

const [user, setUser] = useState({})
useEffect(() => {
    fetch(`https://shopbeta-api.onrender.com/users/${me}`, {
        method: "GET",
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
                                            <textarea id="myInput" name="bio" className="bio br3 ba pa3 w-100 h3" placeholder="Something about your profile..." aria-label="With textarea" required></textarea>
                                        </p>
                                    </div>
                                    <div className="tl pv2">
                                        <p className="pv1 f5 fw5">Location</p>
                                        <small className="icon-location-pin f4 fw5"></small>
                                        <input id="location" type="text" name="location" className="location br3 ba pa3 w-100" placeholder="Type in your location..." required />
                                    </div>
                                    <div className="tl pv2">
                                        <p className="pv1 f5 fw5">Website URL</p>
                                        <small className="icon-globe f4 fw5"></small>
                                        <input type="url" name="website" className="website br3 ba pa3 w-100" placeholder="Your website url..." required />
                                    </div>
                                    <div className="tl pv2">
                                        <p className="pv1 f5 fw5">Contact Email</p>
                                        <small className="icon-envelope f4 fw5"></small>
                                        <input type="email" name="contactEmail" className="contactEmail br3 ba pa3 w-100" placeholder="Your contact email..." required autoComplete="username" />
                                    </div>
                                    <div id="error" style={{display: 'none'}} className="orange fw5 pv3 f5 red">
                                        <small className="icon-info red f5 ph2"></small>
                                        Couldn't register new user, try again later!
                                    </div>
                                    <div id="check" className="tl pv2">
                                        <input name="check" id="exampleCheck" type="checkbox" className="pr2" required /><label for="exampleCheck" className="form-check-label ph2">Accept our <a href="https://shopbetaonline.onrender.com/terms of use.html">Terms and Conditions</a>.</label>
                                    </div>
                                    <div>
                                    <div className="pv2">
                                        <div className="pv2">
                                            <p id="update" className="tr">
                                                <button onClick={handClick} type="submit" className="index-button hover-bg-mid-gray pa2 tc br-pill ba pointer ph5 ma1 grow pv3 b fw6">Submit</button>
                                            </p>
                                            <div id="next" style={{display: 'none'}} className="tr">
                                                <p className="tc green fw6 pv3 f4">
                                                    <small className="ph2 f4 icon-check orange"></small>
                                                    Data
                                                    <small className="fw6 orange f4 fw4 pointer"> Saved!</small>
                                                </p>
                                                <Link className="link" to={"/assets/indexes/Avatar"}>
                                                    <button className="index-button hover-bg-mid-gray pa2 tc br-pill ba pointer ph5 ma1 grow pv3 b fw6">Next<small className="icon-arrow-right pl2"></small></button>
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

export default NewAccount;