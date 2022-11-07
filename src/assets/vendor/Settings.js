import { render } from "@testing-library/react";
import React from "react";
import '../Home.css'
import Navbar from "../../components/Navbar";
import SideBar from "../../components/SideBar";
import Map from "../../containers/Map";
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
        await fetch("https://shopbeta-app.herokuapp.com/users/me", {
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
        avatar: document.querySelector('.avatar').value,
        website: document.querySelector('.website').value,
        contactEmail: document.querySelector('.contactEmail').value
    }

    await fetch("https://shopbeta-app.herokuapp.com/users/me", {
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

const handleSubmit = e => {
    e.preventDefault()
    changes()
}

    render()
        return(
            <div className="">
                <Preloader />
                <Navbar />
                    <div className="">
                           <div className="dtc">
                            <SideBar />
                           </div>
                      <div className="pa4 tc pv6 pl5">
                        <div className="pv3 dib code">
                                <form onSubmit={handleSubmit}>
                                    <div className="tl pv2">
                                        <h3 className="pv2">Change Settings</h3>
                                        <p className="pv1 f5 fw5">Change Username</p>
                                        <input type="text" name="username" value={username} className="username br3 ba pa2 w-100" placeholder="Type in new username..." />
                                    </div>
                                    <div className="tl pv2">
                                        <p className="pv1 f5">Change Bio</p>
                                        <p className="pv2">
                                            <textarea id="myInput" name="bio" value={bio} className="bio br3 ba pa2 w-100 h3" placeholder="Something about your profile..." aria-label="With textarea"></textarea>
                                        </p>
                                    </div>
                                    <div className="tl pv2">
                                        <p className="f5 fw5">Add Location</p>
                                        <input id="location" type="text" name="location" value={location} className="location br3 ba pa2 w-100" placeholder="Type in your location..." />
                                    </div>
                                    <div className="tl pv2">
                                        <p className="pv1 f5 fw5">Add Phone Number</p>
                                        <input type="tel" name="phonenumber" value={phonenumber} className="phonenumber br3 ba pa2 w-100" placeholder="Input phone number..." />
                                    </div>
                                    <div className="tl pv2">
                                        <p className="pv1 f5 fw5">Set new Email</p>
                                        <input type="email" name="email" value={email} className="email br3 ba pa2 w-100" placeholder="Your email..." />
                                    </div>
                                    <div className="tl pv2">
                                        <p className="pv1 f5 fw5">Add Website</p>
                                        <input type="url" name="website" value={website} className="website br3 ba pa2 w-100" placeholder="Your website..." />
                                    </div>
                                    <div className="tl pv2">
                                        <p className="pv1 f5 fw5">Set contact Email</p>
                                        <input type="email" name="contactEmail" value={contactEmail} className="contactEmail br3 ba pa2 w-100" placeholder="Your contact email..." />
                                    </div>
                                    <div className="tl pv2">
                                        <p className="pv1 f5 fw5">Set Password</p>
                                        <input type="password" value={password} className="password br3 ba pa2 w-100" placeholder="Type in your new password..." />
                                    </div>
                                    <div className="tl pv2">
                                        <p className="pv1 f5 fw5">Repeat Password</p>
                                        <input type="password" value={password} name="password" className="br3 ba pa2 w-100" placeholder="Repeat password..." />
                                    </div>
                                    <p className="pv2">
                                        <p className="f5 fw5">Set new Profile photo</p>
                                        <div className="pv2 br-pill">
                                            <input type="file" value={avatar} name="avatar" className="avatar pa3 w-90 ba br3" id="customFile" />
                                        </div>
                                    </p>
                                    <p className="tr">
                                        <button type="submit" className="bg-orange white hover-bg-mid-gray pa2 tc br3 ph4 ma1 grow b fw6">Save</button>
                                    </p>
                                    <div>
                                        <div className="pv2">
                                            <div className="pa3 pv1 tj f6">
                                                <h3 className="pv1">
                                                    <small className="icon-info pr2 f5 blue"></small>
                                                    Some tips
                                                </h3>
                                                <div className="code fw6">
                                                    <p>Ensure to upload high quality images</p>
                                                    <p className="pv2">Image file size shouldn't exceed 5MB</p>
                                                    <p>680x680 is best recommended</p>
                                                </div>
                                            </div>
                                    <div className="pv2">
                                        <span className="tc pa2 pv2">
                                            Logout from all devices that you've logged in from before
                                            <a href="https://shopbetaonline.herokuapp.com/indexes/login.html" className="link"><p onClick={logoutAllClick} className="bg-blue white hover-bg-mid-gray pa3 pointer tc br3 ph3 ma1 grow b fw6"> Log-out all devices</p></a>
                                        </span>
                                        <span className="tc pa2 pv2">
                                            Delete this account
                                            <a href="https://shopbetaonline.herokuapp.com"  className="link"><p onClick={deleteClick} className="bg-red white hover-bg-mid-gray pa3 pointer tc br3 ph4 ma1 grow b fw6"> Delete Account</p></a>
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