import React from "react";
import { useState, useEffect } from "react";
import 'tachyons';
// import img from '../images/avatar6.png'
import { Link } from "react-router-dom";
import { UserError } from "../assets/indexes/ErrorPages";

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

    const logOut = async () => {

        localStorage.clear("token")
        localStorage.clear("meId")

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
            <div id="user" className="">
                <div className="dib pa2">
                    <div className="tr fw5 bg-white navbar pa2">
                        <span>
                            <Link to={"/assets/vendor/Settings"} className="link black">
                                <button className="bg-white f5 pointer ba hover-bg-mid-gray pa2 tc br-pill grow ph4 ma1 fw6"><small className="icon-pencil f6 pr2"></small>Edit</button>
                            </Link>
                        </span>
                        <span>
                            <Link to={"/assets/indexes/Avatar"} className="link black">
                                <button className="bg-white f5 pointer ba hover-bg-mid-gray pa2 tc br-pill grow ph4 ma1 fw6"><small className="icon-camera f6 pr2"></small>Photo</button>
                            </Link>
                        </span>
                        <span>
                            <Link to={"/assets/indexes/Login"} className="link black">
                                <button onClick={logOut} className="bg-white f5 pointer ba hover-bg-mid-gray pa2 tc br-pill grow ph3 ma1 fw6"><strong className="icon-logout pr2"></strong></button>
                            </Link>
                        </span>
                    </div>
                    <div className="tj flex flex-wrap pt3">
                        <span>
                            <img src={`https://shopbeta-api.onrender.com/users/${user._id}/avatar`} alt="avatar" className="br-100" width="125px" height="125px" />
                        </span>
                        <span className="pa2 f4 fw5">
                            <p>{user.username}</p>
                            <p className="f6 pv1 fw4">
                                {user.location}
                                <small className="icon-globe ph1"></small>
                            </p>
                            <div className="pa1 pl2">
                                <p className="">
                                    <small className="f6">{user.phonenumber}</small>
                                </p>
                                <p className="">
                                    <small className="f6">{user.contactEmail}</small>
                                </p>
                            </div>
                            <p className="f4 code pv1 tl">
                                <strong className="icon-heart pa2"><small className="ph2 f6 fw4">{user.hearts}</small></strong>
                                {followers.length}
                                <small className="pl2 fw4">followers</small>
                            </p>
                        </span>
                    </div> 
                    <div className="tr">
                        <span>
                            <a href={user.website} target={user.website} className="link hover-blue pointer f6">
                                {user.website}
                            </a>
                        </span>
                    </div>    
                    <div className="pv2">
                        <small className="tj f4 fw3 pa2">
                            {user.bio}
                        </small>
                    </div>   
                </div>
            </div>
            <div id="error" style={{display: 'none'}} className="tc">
                <UserError />
            </div>
        </div>
    )
}

export default User;