import React from "react";
import { useState, useEffect } from "react";
import 'tachyons';
import img2 from '../images/images-1.jpg'
import { Link } from "react-router-dom";
import UserError from "../assets/indexes/UserError";

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
       <div>
         <div id="user" className="tc w-100">
            <div style={{width: '360px'}} className="dib pa3">
              <div className="">
                  <img src={`https://shopbeta-api.onrender.com/users/${userId}/avatar`} alt="avatar" className="br-100 b--white" width="250px" height="250px"></img>
                  <div className="tr">
                        <span onClick={heartClick} title="Like profile" className="icon-heart f3 orange ph2 pointer fw6 hover-mid-gray br3 pa2 grow"></span>
                        <span onClick={unfollowClick} title="Unfollow profile" className="icon-user-unfollow f3 orange ph3 pointer fw6 hover-mid-gray br3 pa2 grow"></span>
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
                  <Link to={"/assets/Message"}>
                      <button onClick={handleSubmit} className="index-button f5 pointer ba hover-bg-mid-gray pa3 tc br-pill ph4 ma1 grow b fw6"><small className="icon-bubbles pr2"></small>Message</button>
                  </Link>
              </span>
              <span> 
                  <button onClick={followClick} className="index-button f5 pointer ba hover-bg-mid-gray pa3 tc br-pill ph4 ma1 grow b fw6">Follow<small className="icon-user-follow pl2"></small></button>
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