import React from "react";
import { useState, useEffect } from "react";
import 'tachyons';
// import img1 from '../images/avatar6.png'
import { Link } from "react-router-dom";
import { NetworkError } from "../assets/indexes/ErrorPages";

const User = () => { 
    
    const token = localStorage.getItem("token")
    const userId = localStorage.getItem("userId")
    const me = localStorage.getItem("meId")
    console.log(token)
    console.log(me)

    const [user, setUser] = useState({})
    useEffect(() => {
        fetch(`https://shopbeta-api.onrender.com/users/${userId}`, {
            method: 'GET',
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
        
    }, [userId])

    const [followers, setFollowers] = useState({})
    useEffect(() => {
        fetch(`https://shopbeta-api.onrender.com/users/${userId}/followers`, {
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
    }, [userId, token])

    const initiateChat = async () => {

        const chatInitiator = me
        
        const userIds = [
            userId,
            chatInitiator
        ]
        const type = 'consumer-to-consumer'

         await fetch('https://shopbeta-api.onrender.com/chat/initiate', {
            method: "POST",
            headers: {
                'Content-type': "application/json",
            },
            body: JSON.stringify({
                userIds,
                type
            })       
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            window.localStorage.setItem("chatroom", data.chatRoomId)
        })
        .catch((err) => {
            console.log(`Couldn't create new chatroom`)
        })
    }

    const followClick = async event => {
        event.currentTarget.innerHTML = 'following';

        await fetch(`https://shopbeta-api.onrender.com/user/${user._id}/follow/${me}`, {
            method: 'POST',
            headers: {
                'Accept' : 'application/json, text/plain',
                'Content-Type' : 'application/json'
            },
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch((err) => {
            console.log(err.message)
        })
    }

    // const unfollowClick = async event => {
    //     event.currentTarget.style.color = 'orange';
    //     event.currentTarget.style.fontWeight = 'bold';

    //     await fetch(`https://shopbeta-api.onrender.com/user/${user._id}/unfollow/${me}`, {
    //         method: 'POST',
    //         headers: {
    //             'Accept' : 'application/json, text/plain',
    //             'Content-Type' : 'application/json'
    //         },
    //     })
    //     .then(res => res.json())
    //     .then(data => console.log(data))
    //     .catch((err) => {
    //         console.log(err.message)
    //     })
    // }

    const heartClick = async event => {
        event.currentTarget.style.color = 'orange';
        event.currentTarget.style.fontWeight = 'bold';

        const count = {
            hearts: user.hearts + 1
        }

        await fetch(`https://shopbeta-api.onrender.com/users/${user._id}/hearts`, {
            method: 'POST',
            headers: {
                'Authorization' : 'Bearer ' + token,
                'Accept' : 'application/json, text/plain',
                'Content-Type' : 'application/json'
        },
            body: JSON.stringify(count)
        })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => {
            console.log(err.message)
        })
    }

    const heartText = async event => {
        event.currentTarget.style.color = 'orange';
        event.currentTarget.innerHTML = 'liked';
    }

    const handleSubmit = () => {
        initiateChat()
    }
    return  (
       <div>
            <div id="user" className="tc w-100">
                <div className="dib pa2">
                    <div className="tr fw5 bg-white navbar pa2">
                        <span>
                            <Link to={"/assets/Chats"} className="link black">
                                <button onClick={handleSubmit} className="bg-white f5 pointer ba hover-bg-mid-gray pa2 tc br-pill grow ph4 ma1 fw6"><small className="icon-bubbles f6 pr2"></small>Message</button>
                            </Link>
                        </span>
                        </div>
                    <div className="tj flex flex-wrap pt3">
                        <span>
                            <img src={`https://shopbeta-api.onrender.com/users/${userId}/avatar`} alt="avatar" className="br-100" width="125px" height="125px" />
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
                            <p className="f5 code pv1 tl">
                                <strong className="icon-heart pa2"><small className="ph2 f6 fw4">{user.hearts}</small></strong>
                                {followers.length}
                                <small className="pl2 fw4">followers</small> 
                            </p>
                        </span>
                    </div> 
                    <div className="pv2">
                        <button onClick={followClick} className="bg-white f5 pointer ba hover-bg-mid-gray pa2 tc br4 grow w-70 ma1 fw6"><small className="icon-user-follow f6 pr2"></small>Follow</button>
                        <button className="bg-white f5 pointer ba hover-bg-mid-gray pa2 tc br-pill grow ph3 ma1 fw6">
                            <span onClick={heartClick} className="pa2 fw5 ph2 icon-heart pointer grow">
                                <small onClick={heartText} id="increment" className="pa1 code">like</small>
                            </span>
                        </button>
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
                <NetworkError />
            </div>
        </div>
    )
}

export default User;