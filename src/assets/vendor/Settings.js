import { render } from "@testing-library/react";
import React from "react";
import '../Home.css'
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Header from '../../components/Header'
import Preloader from "../../components/Preloader";


const Settings = ({username, bio, email, phonenumber, location, link}) => {

const token = localStorage.getItem("token")
const me = localStorage.getItem("meId")
console.log(me)

const [user, setUser] = useState({})
useEffect(() => {
    fetch(`https://shopbeta-api.onrender.com/users/${me}`, {
        method: "GET"
    })
    .then((res) => res.json())
    .then((data) => {
        setUser(data)
    })
    .catch((err) => {
        console.log(err.message)
    })
}, [me])
    
const logoutAllClick = async () => {

            localStorage.clear("token")
            localStorage.clear("meId")
            
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
        phonenumber: document.querySelector('.phonenumber').value,
        location: document.querySelector('.location').value,
        link: document.querySelector('.link').value,
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
    .then((data) => {
        console.log(data)
        
        const error = document.getElementById('error')
        error.style['display'] = 'none'

        const button_update = document.getElementById('update')
        button_update.style['display'] = 'none'

        const button_next = document.getElementById('next')
        button_next.style['display'] = 'contents'
    })
    .catch((err) => {
        console.log(err.message)

        const error = document.getElementById('error')
        error.style['display'] = 'contents'
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
                    <Header />
                    <div className="dib">
                      <div className="pv5">
                        <div style={{width: '360px'}} className="pv2 dib pa3">
                            <h3 className="tl pv1 code f3">
                                    Settings
                                </h3>
                                <form onSubmit={handleSubmit}>
                                    <div className="tl pv2">
                                        <p className="pv1 icon-user f4 fw5"><small className="ph2 fw5">Username</small></p>
                                        <input type="text" name="username" value={username} className="username br3 ba pa3 w-100" placeholder={user.username} />
                                    </div>
                                    <div className="tl pv1">
                                        <p className="pv1 icon-note f4 fw5"><small className="ph2 fw5">Bio</small></p>
                                        <p className="pv1">
                                            <textarea id="myInput" name="bio" value={bio} className="bio br3 ba pa3 w-100 h3" placeholder={user.bio} aria-label="With textarea"></textarea>
                                        </p>
                                    </div>
                                    <div className="tl pv2">
                                        <p className="pv1 icon-location-pin f4 fw5"><small className="ph2 fw5">Location</small></p>
                                        <input id="location" type="text" name="location" value={location} className="location br3 ba pa3 w-100" placeholder={user.location} />
                                    </div>
                                    <div className="tl pv2">
                                        <p className="pv1 icon-phone f4 fw5"><small className="ph2 fw5">Phone number</small></p>
                                        <input type="tel" name="phonenumber" value={phonenumber} className="phonenumber br3 ba pa3 w-100" placeholder={user.phonenumber} />
                                    </div>
                                    <div className="tl pv2">
                                        <p className="pv1 icon-envelope f4 fw5"><small className="ph2 fw5">Email</small></p>
                                        <input type="email" name="email" value={email} className="email br3 ba pa3 w-100" placeholder={user.email} />
                                    </div>
                                    <div className="tl pv2">
                                        <p className="pv1 icon-link f4 fw5"><small className="ph2 fw5">Link</small></p>
                                        <input type="url" name="link" value={link} className="link br3 ba pa3 w-100" placeholder={user.link} />
                                    </div>
                                    <div id="error" style={{display: 'none'}} className="orange fw5 pv3 f5 red">
                                        <small className="icon-info f5 red ph2"></small>
                                        Something went wrong, Couldn't update new info!
                                    </div>
                                    <p id="update" className="tr">
                                        <button onClick={handClick} type="submit" className="index-button pointer hover-bg-mid-gray pa2 tc br-pill ba ph4 ma1 grow pv3 b fw6">Save settings</button>
                                    </p>
                                    <div id="next" style={{display: 'none'}} className="tc">
                                        <p className="tc green fw6 pv3 f4">
                                            <small className="ph2 f4 icon-check orange"></small>
                                            Data
                                            <small className="fw6 orange f4 fw4 pointer"> Saved!</small>
                                        </p>
                                    </div>
                                </form>
                            <div className="pv2">
                                <div className="pv1">
                                    <div style={{fontSize: '35px'}} className="pv2 fw6 tc">
                                        <div className="bw2 b--black pa2">
                                            <Link className="link black" to={"/assets/indexes/NewPassword"}>
                                                <div className="flex flex-wrap">
                                                    <span style={{fontSize: '25px'}} className="icon-lock f2">
                                                    </span>
                                                    <span className="pointer ph4 pa2 fw5">
                                                        <p className="hover-blue pointer f4">
                                                        Change Password 
                                                        <small className="icon-arrow-right f6 pl5"></small>
                                                        </p>
                                                    </span>
                                                </div>
                                            </Link>       
                                        </div>
                                    </div>
                                    <div style={{fontSize: '35px'}} className="pv2 fw6 tc">
                                        <div className="bw2 b--black pa2">
                                            <Link className="link black" to={"/assets/indexes/Login"}>
                                                <div className="flex flex-wrap">
                                                    <span style={{fontSize: '25px'}} className="icon-logout f2">
                                                    </span>
                                                    <span className="pointer ph4 pa2 fw5">
                                                        <p onClick={logoutAllClick}  className="hover-blue pointer f4">
                                                        Logout all devices
                                                        <small className="icon-arrow-right f6 pl5"></small>
                                                        </p>
                                                    </span>
                                                </div>
                                            </Link>       
                                        </div>
                                    </div>
                                    <div className="pv3 f4 fw7 red tl">Danger Zone</div>
                                    <div className="tc pa2 fw6 pv2">
                                        <Link className="link black" to={"/assets/indexes/Signup"}>
                                            <button onClick={deleteClick} className="bg-red hover-bg-red hover-bg-mid-gray pa3 w-80 pointer tc br-pill ba ph4 white ma1 grow b fw6"> Delete Account</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Navbar />
            </div>
    );
}

export default Settings;