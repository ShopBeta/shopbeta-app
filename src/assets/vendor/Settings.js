import { render } from "@testing-library/react";
import React from "react";
import '../Home.css'
import Navbar from "../../components/Navbar";
import { useState, useEffect } from "react";
import Dialog from "../../containers/Dialog";
import Preloader from "../../components/Preloader";


const Settings = ({username, bio, email, password, phonenumber, location, avatar, website, contactEmail}) => {

const token = localStorage.getItem("token")
    
const logoutAllClick = async () => {
            await fetch("https://shopbeta-app.herokuapp.com/users/logoutAll", {
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
        await fetch("https://shopbeta-app.herokuapp.com/users/deleteme", {
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

    await fetch("https://shopbeta-app.herokuapp.com/users/updateme", {
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

const [open, setOpen] = useState(false)

const handClick = () => {
    setOpen(false)
}

const handClickShow = () => {
    setOpen(true)
}

const handleSubmit = e => {
    e.preventDefault()
    changes()
}

    render()
        return(
            <div className="">
                <Dialog open={open} handClick={handClick} />
                <Preloader />
                <Navbar />
                    <div className="tc">
                      <div style={{width: '430px'}} className="dib pa3 tc pv6">
                        <div className="pv3">
                            <h3 className="tr"><small className="icon-settings f4 ph2"></small>Change Settings</h3>
                                <form onSubmit={handleSubmit}>
                                    <div className="tl pv2">
                                        <p className="pv1 f5 fw5">Change Username</p>
                                        <small className="icon-user f4 fw5"></small>
                                        <input type="text" name="username" value={username} className="username br3 ba pa2 w-100" placeholder="Type in new username..." />
                                    </div>
                                    <div className="tl pv1">
                                        <p className="pv1 f5 fw5">Change Bio</p>
                                        <p className="pv1">
                                            <small className="icon-note f4 fw5"></small>
                                            <textarea id="myInput" name="bio" value={bio} className="bio br3 ba pa2 w-100 h3" placeholder="Something about your profile..." aria-label="With textarea"></textarea>
                                        </p>
                                    </div>
                                    <div className="tl pv2">
                                        <p className="pv1 f5 fw5">Add Location</p>
                                        <small className="icon-location-pin f4 fw5"></small>
                                        <input id="location" type="text" name="location" value={location} className="location br3 ba pa2 w-100" placeholder="Type in your location..." />
                                    </div>
                                    <div className="tl pv2">
                                        <p className="pv1 f5 fw5">Add Phone Number</p>
                                        <small className="icon-phone f4 fw5"></small>
                                        <input type="tel" name="phonenumber" value={phonenumber} className="phonenumber br3 ba pa2 w-100" placeholder="Input phone number..." />
                                    </div>
                                    <div className="tl pv2">
                                        <p className="pv1 f5 fw5">Set new Email</p>
                                        <small className="icon-envelope f4 fw5"></small>
                                        <input type="email" name="email" value={email} className="email br3 ba pa2 w-100" placeholder="Your email..." />
                                    </div>
                                    <div className="tl pv2">
                                        <p className="pv1 f5 fw5">Add Website</p>
                                        <small className="icon-globe f4 fw5"></small>
                                        <input type="url" name="website" value={website} className="website br3 ba pa2 w-100" placeholder="Your website..." />
                                    </div>
                                    <div className="tl pv2">
                                        <p className="pv1 f5 fw5">Set contact Email</p>
                                        <small className="icon-envelope f4 fw5"></small>
                                        <input type="email" name="contactEmail" value={contactEmail} className="contactEmail br3 ba pa2 w-100" placeholder="Your contact email..." />
                                    </div>
                                    <div className="tl pv2">
                                        <p className="pv1 f5 fw5">Set Password</p>
                                        <small className="icon-lock f4 fw5"></small>
                                        <input type="password" value={password} className="password br3 ba pa2 w-100" placeholder="Type in your new password..." />
                                    </div>
                                    <div className="tl pv2">
                                        <p className="pv1 f5 fw5">Repeat Password</p>
                                        <small className="icon-lock f4 fw5"></small>
                                        <input type="password" value={password} name="password" className="br3 ba pa2 w-100" placeholder="Repeat password..." />
                                    </div>
                                    <p className="tr">
                                        <button onClick={handClickShow} type="submit" className="bg-transparent orange hover-bg-mid-gray pa2 tc br-pill ba ph4 ma1 grow pv3 b fw6">Save settings</button>
                                    </p>
                                    <div>
                                        <div className="pv2">
                                    <div className="pv2">
                                        <span className="tc pa2 pv2">
                                            Logout from all devices that you've logged in from before
                                            <a href="https://shopbetaonline.herokuapp.com/indexes/login.html" className="black link"><p onClick={logoutAllClick} className="bg-transparent hover-bg-mid-gray pa3 pointer tc ba br-pill ph3 ma1 grow b fw6"> Log-out all devices</p></a>
                                        </span>
                                        <span className="tc pa2 pv2">
                                            Delete this account
                                            <a href="https://shopbetaonline.herokuapp.com/indexes/register.html"  className="black link"><p onClick={deleteClick} className="bg-transparent hover-bg-red hover-bg-mid-gray pa3 pointer tc br-pill ba ph4 ma1 grow b fw6"> Delete Account</p></a>
                                        </span>
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

export default Settings;