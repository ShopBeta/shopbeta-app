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

     // format represention of heart & followers
     let newNum = Math.abs(followers.length);
     
     let oldNum = Math.abs(user.hearts);

     let intFollowers = newNum;
     if(intFollowers.length > 3) {
        intFollowers = intFollowers.substr(0, intFollowers.length - 3) + ',' + intFollowers.substr(intFollowers.length - 3, 3); // input 2310, output 2,310
     }

     let intHearts = oldNum;
     if(intHearts.length > 3) {
        intHearts = intHearts.substr(0, intHearts.length - 3) + ',' + intHearts.substr(intHearts.length - 3, 3); // input 2310, output 2,310
     }

    return (
        <div className="">
            <div id="user" className="w-100">
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
                    </div>
                    <div className="tj flex flex-wrap pt3 ph2">
                        <span>
                            <img src={`https://shopbeta-api.onrender.com/users/${user._id}/avatar`} alt="avatar" className="br-100" width="125px" height="125px" />
                        </span>
                        <span className="pa2 f4 fw5">
                            <p className="pa1 pl2">{user.username}</p>
                            <p className="f6 pv1 pa1 pl2 fw4">
                                {user.location}
                                <small className="icon-globe ph1"></small>
                            </p>
                            <p className="f4 code pt3 pl2 tl">
                                {intFollowers}
                                <small className="pl2 fw4">followers</small>
                            </p>
                        </span>
                    </div> 
                    <div className="tr">
                        <strong className="icon-heart f4 pa2"><small className="ph2 f4 fw4">{intHearts}</small></strong>
                    </div>    
                    <div className="pv3 tl">
                        <p className="fw6 f4 ph3">About</p>
                        <p className="f5 fw3 pa3">
                            {user.bio}
                        </p>
                    </div>  
                    <div style={{fontSize: '35px'}} className="ph2 pv2 fw6 tc">
                        <div className="bw2 b--black pa2">
                            <Link className="link black" to={"/assets/vendor/User"}>
                                <div className="flex flex-wrap">
                                    <span style={{fontSize: '25px'}} className="icon-link f2">
                                    </span>
                                    <span className="pointer pl3 pa2 fw5 f5">
                                        <a href={user.link} target={user.link} className="link hover-blue pointer f5">
                                            {user.link}
                                        </a>
                                    </span>
                                </div>
                            </Link>       
                        </div>
                    </div>
                    <div style={{fontSize: '35px'}} className="ph2 pv2 fw6 tc">
                        <div className="bw2 b--black pa2">
                            <Link className="link black" to={"/assets/vendor/User"}>
                                <div className="flex flex-wrap">
                                    <span style={{fontSize: '25px'}} className="icon-phone f2">
                                    </span>
                                    <span className="pointer pl3 pa2 fw5 f5">
                                        {user.phonenumber}
                                    </span>
                                </div>
                            </Link>       
                        </div>
                    </div>
                    <div style={{fontSize: '35px'}} className="ph2 pv2 fw6 tc">
                        <div className="bw2 b--black pa2">
                            <Link className="link black" to={"/assets/vendor/User"}>
                                <div className="flex flex-wrap">
                                    <span style={{fontSize: '25px'}} className="icon-envelope f2">
                                    </span>
                                    <span className="pointer pl3 pa2 fw5 f5">
                                        <a href={user.email} target={user.email} className="link hover-blue pointer f5">
                                            {user.email}
                                        </a>
                                    </span>
                                </div>
                            </Link>       
                        </div>
                    </div>
                    <div className="tc pv3">
                        <Link to={"/assets/indexes/Login"} className="link black">
                            <button onClick={logOut} className="bg-orange f5 pointer w-100 ba hover-bg-mid-gray pa3 white tc br-pill ma1 fw6">Logout<strong className="icon-logout ph2"></strong></button>
                        </Link>
                    </div> 
                </div>
            </div>
            <div id="error" style={{display: 'none'}} className="tc pt4">
                <UserError />
            </div>
        </div>
    )
}

export default User;