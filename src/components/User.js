import React from "react";
import { useState, useEffect } from "react";
import 'tachyons';
import img1 from '../images/avatar6.png'
import img2 from '../images/images-1.jpg'
import { Link } from "react-router-dom";
import UserError from "../assets/indexes/UserError";

const User = () => { 
    
    const token = localStorage.getItem("token")
    const me = localStorage.getItem("meId")
    console.log(token)
    console.log(me)

    const [user, setUser] = useState({})
    useEffect(() => {
        fetch(`https://shopbeta-api.onrender.com/users/${me}`, {
            method: "GET"
        })
        .then((res) => res.json())
        .then((data) => {
            setUser(data)

            const error = document.getElementById('error')
            error.style['display'] = 'none'
        })
        .catch((err) => {
            console.log(err.message)

            const error = document.getElementById('error')
            error.style['display'] = 'contents'

            const user = document.getElementById('user')
            user.style['display'] = 'none'
        })
    }, [me])


    const [followers, setFollowers] = useState({})
    useEffect(() => {
        fetch(`https://shopbeta-api.onrender.com/users/${user._id}/followers`, {
            method: "GET",
            headers: {
                'Authorization' : 'Bearer ' + token,
                'Accept' : 'application/json, text/plain',
                'Content-Type' : 'application/json'
            },
        })
        .then((res) => res.json())
        .then((data) => setFollowers(data))
        .catch((err) => {
            console.log(err.message)
        })
    }, [user._id, token])

    const [following, setFollowing] = useState({})
    useEffect(() => {
        fetch(`https://shopbeta-api.onrender.com/users/${user._id}/following`, {
            method: "GET",
            headers: {
                'Authorization' : 'Bearer ' + token,
                'Accept' : 'application/json, text/plain',
                'Content-Type' : 'application/json'
            },
        })
        .then((res) => res.json())
        .then((data) => setFollowing(data))
        .catch((err) => {
            console.log(err.message)
        })
    }, [user._id, token])

    const logOut = async () => {
        await fetch("https://shopbeta-api.onrender.com/users/logout", {
            method: 'POST',
            headers: {
                'Authorization' : 'Bearer ' + token,
                'Accept' : 'application/json, text/plain',
                'Content-Type' : 'application/json'
            }
        })
        .catch((err) => {
            console.log(err.message)
        })
    }

    return (
        <div>
            <div id="user" className="tc w-100 pa2">
                <div style={{width: '360px'}} className="pa3 dib">
                        <div className="">
                            <img src={`https://shopbeta-api.onrender.com/users/${me}/avatar`} alt="avatar" className="br-100 b--white" width="250px" height="250px"></img>
                            <div className="tr">
                                <Link to={"/assets/indexes/Avatar"} className="link black">
                                    <span title="Change profile photo" className="icon-camera f3 orange ph2 pointer fw6 hover-mid-gray br3 pa2 grow"></span>
                                </Link>
                                <Link to={"/assets/vendor/Settings"} className="link black">
                                    <span title="Change profile photo" className="icon-settings f3 orange ph3 pointer fw6 hover-mid-gray br3 pa2 grow"></span>
                                </Link>
                                <div>
                                    <h5 className="f3 fw5 tc">
                                        {user.username}
                                    </h5>
                                    <p className="tc pa2 f5 fw4">
                                        {user.location}
                                        <small className="icon-location-pin ph2"></small>
                                    </p>
                                </div>
                            </div>
                            <div className="f3">
                                <span className="icon-heart ph3 f3 fw6 orange">
                                    <small className="ph2 black code">{user.hearts}</small>
                                </span>
                                <span className="f3 ph2">
                                    {followers.length}
                                    <small className="pl2">followers</small>
                                </span>
                                |
                                <span className="f3">
                                    {following.length}
                                    <small className="ph2">following</small>
                                </span>
                            </div>
                        </div>
                </div>
                <div style={{width: '360px'}} className="dib">
                        <div className="pv3 tc f4">
                            <p className="ph2">
                                {user.bio}
                            </p>
                        </div>
                        <div className="pv2">
                            <div className="pv3 f5 fw6">
                                <p>
                                    <small className="icon-phone pr2"></small>
                                    {user.phonenumber}
                                </p>
                                <p>
                                    <small className="icon-envelope pr2"></small>
                                    {user.contactEmail}
                                </p>
                                <p>
                                    <small className="icon-globe pr2"></small>
                                    <a href={user.website} target={user.website} className="link">
                                        {user.website}
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="tc">
                            <img src={img2} alt="profile" className="br3 b--white"></img>
                        </div>
                        <span> 
                            <Link to={"/assets/vendor/Settings"}>
                                <button className="index-button f5 pointer ba hover-bg-mid-gray pa3 tc br-pill ph4 ma1 grow b fw6"><small className="icon-settings pr2"></small>Settings</button>
                            </Link>
                        </span>
                        <span> 
                            <Link to={"/assets/indexes/Login"}>
                                <button onClick={logOut} className="index-button f5 pointer ba hover-bg-mid-gray pa3 tc br-pill ph4 ma1 grow b fw6">Logout<small className="icon-logout pl2"></small></button>
                            </Link>
                        </span>
                    </div>
        </div>
        <div id="error" style={{display: 'none'}} className="tc">
            <UserError />
        </div>
    </div>
    )
}

export default User;