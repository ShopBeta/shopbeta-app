import { render } from "@testing-library/react";
import React from "react";
import '../Home.css'
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Preloader from "../../components/Preloader";


const Settings = ({username, bio, email, password, phonenumber, location, website, contactEmail}) => {

const token = localStorage.getItem("token")
const me = localStorage.getItem("meId")
console.log(me)
    
const logoutAllClick = async () => {
            await fetch("https://shopbeta-api.onrender.com/users/logoutAll", {
                method: "POST",
                headers: {
                    'Authorization' : 'Bearer ' + token,
                    'Accept' : 'application/json, text/plain',
                    'Content-Type' : 'application/json'
                },
            })
            .catch((err) => {
                console.log(err.message)
            })
}

const deleteClick = async () => {
        await fetch("https://shopbeta-api.onrender.com/users/deleteme", {
            method: "DELETE",
            headers: {
                'Authorization' : 'Bearer ' + token,
                'Accept' : 'application/json, text/plain',
                'Content-Type' : 'application/json'
            },
        })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => {
                console.log(err.message)
            })
}

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

    await fetch(`https://shopbeta-api.onrender.com/users/update/${me}`, {
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

const handClick = (event) => {
    event.currentTarget.innerHTML = 'Saving...';
    event.currentTarget.style.fontWeight = 'bold';
}

const handleSubmit = e => {
    e.preventDefault()
    changes()
}

    render()
        return(
            <div className="tc w-100">
                <Preloader />
                <Navbar />
                    <div className="dib">
                      <div className="flex flex-wrap pv6">
                        <div style={{width: '360px'}} className="pv2 dib ma2">
                            <h3 className="tr"><small className="icon-settings f4 ph2"></small>Change Settings</h3>
                                <form onSubmit={handleSubmit}>
                                    <div className="tl pv2">
                                        <p className="pv1 f5 fw5">Change Username</p>
                                        <small className="icon-user f4 fw5"></small>
                                        <input type="text" name="username" value={username} className="username br3 ba pa3 w-100" placeholder="Type in new username..." />
                                    </div>
                                    <div className="tl pv1">
                                        <p className="pv1 f5 fw5">Change Bio</p>
                                        <p className="pv1">
                                            <small className="icon-note f4 fw5"></small>
                                            <textarea id="myInput" name="bio" value={bio} className="bio br3 ba pa3 w-100 h3" placeholder="Something about your profile..." aria-label="With textarea"></textarea>
                                        </p>
                                    </div>
                                    <div className="tl pv2">
                                        <p className="pv1 f5 fw5">Add Location</p>
                                        <small className="icon-location-pin f4 fw5"></small>
                                        <input id="location" type="text" name="location" value={location} className="location br3 ba pa3 w-100" placeholder="Type in your location..." />
                                    </div>
                                    <div className="tl pv2">
                                        <p className="pv1 f5 fw5">Add Phone Number</p>
                                        <small className="icon-phone f4 fw5"></small>
                                        <input type="tel" name="phonenumber" value={phonenumber} className="phonenumber br3 ba pa3 w-100" placeholder="Input phone number..." />
                                    </div>
                                    <div className="tl pv2">
                                        <p className="pv1 f5 fw5">Set new Email</p>
                                        <small className="icon-envelope f4 fw5"></small>
                                        <input type="email" name="email" value={email} className="email br3 ba pa3 w-100" placeholder="Your email..." />
                                    </div>
                                    <div className="tl pv2">
                                        <p className="pv1 f5 fw5">Add Website URL</p>
                                        <small className="icon-globe f4 fw5"></small>
                                        <input type="url" name="website" value={website} className="website br3 ba pa3 w-100" placeholder="Your website url..." />
                                    </div>
                                    <div className="tl pv2">
                                        <p className="pv1 f5 fw5">Set contact Email</p>
                                        <small className="icon-envelope f4 fw5"></small>
                                        <input type="email" name="contactEmail" value={contactEmail} className="contactEmail br3 ba pa3 w-100" placeholder="Your contact email..." />
                                    </div>
                                    <div className="tl pv2">
                                        <p className="pv1 f5 fw5">Set Password</p>
                                        <small className="icon-lock f4 fw5"></small>
                                        <input type="password" value={password} className="password br3 ba pa3 w-100" placeholder="Type in your new password..." />
                                    </div>
                                    <div className="tl pv2">
                                        <p className="pv1 f5 fw5">Repeat Password</p>
                                        <small className="icon-lock f4 fw5"></small>
                                        <input type="password" value={password} name="password" className="br3 ba pa3 w-100" placeholder="Repeat password..." />
                                    </div>
                                </form>
                        </div>
                        <div style={{width: '360px'}} className="ma2 pv2 dib">
                            <p className="tr">
                                <button onClick={handClick} type="submit" className="index-button pointer hover-bg-mid-gray pa2 tc br-pill ba ph4 ma1 grow pv3 b fw6">Save settings</button>
                            </p>
                            <div className="pv2">
                                <div className="pv2">
                                    <span className="tc pa2 pv2">
                                        Logout from all devices that you've logged in from before
                                        <Link className="link black" to={"/assets/indexes/Login"}>
                                            <p onClick={logoutAllClick} className="bg-transparent hover-bg-mid-gray pa3 pointer tc ba br-pill orange ph3 ma1 grow b fw6"> Log-out all devices</p>
                                        </Link>
                                    </span>
                                    <p className="pv2 f4 fw7 red tl">Danger Zone</p>
                                    <span className="tc pa2 pv2">
                                        Delete this account
                                        <Link className="link black" to={"/assets/indexes/Signup"}>
                                            <p onClick={deleteClick} className="bg-red hover-bg-red hover-bg-mid-gray pa3 pointer tc br-pill ba ph4 white ma1 grow b fw6"> Delete Account</p>
                                        </Link>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default Settings;