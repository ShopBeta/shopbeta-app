import React from "react";
import { useState, useEffect } from "react";
import 'tachyons';
// import img from '../images/avatar6.png'
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
        event.currentTarget.innerHTML = 'Liked';
    }

    const handleSubmit = () => {
        initiateChat()
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

    return  (
         <div className="">
            <div id="user" className="w-100">
             <div className="dib pa2">
                 <div className="tr fw5 bg-white navbar pa2">
                     <span>
                        <Link to={"/assets/Chats"} className="link black">
                            <button onClick={handleSubmit} className="bg-white f5 pointer ba hover-bg-mid-gray pa2 tc br-pill grow ph4 ma1 fw6"><small className="icon-bubbles f6 pr2"></small>Message</button>
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
                         <p className="f4 code pv2 pl2 tl">
                             {intFollowers}
                             <small className="pl2 fw4">followers</small>
                         </p>
                         <div className="tr">
                            <span><strong className="icon-heart f4 pa2"><small className="ph2 f4 fw4">{intHearts}</small></strong></span>
                        </div> 
                     </span>
                 </div> 
                 <div className="tr" onClick={heartClick}>
                        <button onClick={heartText} className="bg-white f5 pointer ba pa2 tc br-pill grow ph4 code ma1 fw6"><small className="icon-like fw6 f6 pr2"></small>Like</button>
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
                 <div className="tc pv2">
                    <button onClick={followClick} className="bg-orange f5 pointer w-100 ba pa3 white tc br-pill ma1 fw6">Follow<strong className="icon-follow ph2"></strong></button>
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