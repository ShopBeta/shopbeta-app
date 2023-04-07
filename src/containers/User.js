import React from "react";
import { useState, useEffect } from "react";
import 'tachyons';
import { Link } from "react-router-dom";

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
        .then((data) => setUser(data))
        .catch((err) => {
            console.log(err.message)
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

    const [following, setFollowing] = useState({})
    useEffect(() => {
        fetch(`https://shopbeta-api.onrender.com/users/${userId}/following`, {
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
                type,
                chatInitiator
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

    const unfollowClick = async event => {
        event.currentTarget.style.color = 'orange';
        event.currentTarget.style.fontWeight = 'bold';

        await fetch(`https://shopbeta-api.onrender.com/user/${user._id}/unfollow/${me}`, {
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

    const handleSubmit = () => {
        initiateChat()
    }
    return  (
                <div className="dib w-100 pa2">
                    <div className="tc b--black br3 pa3">
                            <div className="br4">
                                <img src={`https://shopbeta-api.onrender.com/users/${user._id}/avatar`} alt="avatar" className="br-100 b--white" width="250px" height="250px"></img>
                                <div className="tr">
                                <h5 className="f3 fw5 tc">
                                    {user.username}
                                </h5>
                                <p className="tc pa2 f6 fw5">
                                    {user.location}
                                    <small className="icon-location-pin ph2"></small>
                                </p>
                            </div>
                        </div>
                    <div>
                        <p>
                            <span className="icon-heart ph3 f4 orange">
                                <small className="ph2 black code">{user.hearts}</small>
                            </span>
                            <span className="f3 ph2">
                                {followers.length}
                                <small className="ph2">followers</small>
                                <small className="ph2">.</small>
                            </span>
                            <span className="f3">
                                {following.length}
                                <small className="ph2">following</small>
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
                    <div>
                        <span className="b">
                            <Link className="link black" to={"/assets/Messages"}>
                                <button onClick={handleSubmit} className="bg-transparent f6 ba hover-bg-mid-gray pointer pa2 tc br-pill ph5 ma1 grow b fw6">Message</button>
                            </Link>
                        </span>
                        <span className="b">
                            <button onClick={followClick} className="bg-transparent f6 pointer ba hover-bg-mid-gray pa2 tc br-pill ph5 ma1 grow b fw6">Follow</button>
                        </span>
                        <span className="b">
                            <small onClick={heartClick} title="Recommend" className="icon-heart fw5 pointer br3 f3 hover-bg-light-blue pa2 ph3 grow"></small>
                        </span>
                        <span className="b">
                            <small onClick={unfollowClick} title="Unfollow" className="icon-user-unfollow pointer fw5 hover-bg-light-blue br3 f3 pa2 ph3 grow"></small>
                        </span>
                    </div>
                </div>
            </div>
    )
}

export default User;