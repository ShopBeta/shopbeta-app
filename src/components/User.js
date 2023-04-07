import React from "react";
import { useState, useEffect } from "react";
import 'tachyons';
import { Link } from "react-router-dom";

const User = () => { 
    
    const token = localStorage.getItem("token")
    console.log(token)
  
    const me = localStorage.getItem("meId")

    const [user, setUser] = useState([])
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

    console.log(me)

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

    const logout = async () => {
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
        <div className="dib w-100 pa2">
              <div className="tc b--black br3 pa3">
                    <div className="br4">
                        <img src={`https://shopbeta-api.onrender.com/users/${me}/avatar`} alt="avatar" className="br-100 b--white" width="250px" height="250px"></img>
                        <div className="tr">
                        <Link to={"/assets/Vendor/Settings"} className="link black"><span title="Edit profile" className="icon-settings f4 ph2 pointer fw5 hover-bg-light-blue br3 pa2 grow"></span></Link>
                        <a href="https://shopbetaonline.netlify.app/indexes/login.html" className="link black"><span title="Logout" onClick={logout} className="icon-logout ph3 fw5 f4 hover-bg-light-blue br3 pa2 pointer grow"></span></a>
                        <h5 className="f3 fw5 tc">
                            {user.username}
                        </h5>
                        <p className="tc pa2 f6 fw5">
                            {user.location}
                            <small className="icon-location-pin ph2"></small>
                        </p>
                    </div>
                </div>
            <div className="">
                <p className="f3">
                    <span className="icon-heart ph3 f4 orange">
                        <small className="ph2 black code">{user.hearts}</small>
                    </span>
                    <span className="f3 ph2">
                        {followers.length}
                        <small className="ph2">followers</small>
                        <small className="icon-user orange"></small>
                    </span>
                    <span className="f3">
                        {following.length}
                        <small className="ph2">following</small>
                        <small className="icon-user orange"></small>
                    </span>
                </p>
                <p className="pv3 tc f4">
                    <p className="ph2">
                        {user.bio}
                    </p>
                </p>
                <p className="pv3 fw5 code f4">
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
                </p>
            </div>
            </div>
            <form action={`https://shopbeta-api.onrender.com/users/${user._id}/avatar`} method="post" encType="multipart/form-data" className="tl br3 pa3 ma2">
                <p className="fw5">
                    <small className="f5 code tc fw6 ph2">Change Profile photo</small>
                        <div className="pv2 pa2 br3 tc bg- ba">
                            <input type="file" name="avatar" className="avatar pa2 w-100"/>
                        </div>
                </p>
                    <div className="tc">
                        <button type="submit" className="bg-transparent f6 pointer ba hover-bg-mid-gray pa2 tc br-pill ph5 ma1 grow b fw6">Upload</button>
                    </div>
            </form>
        </div>
    )
}

export default User;