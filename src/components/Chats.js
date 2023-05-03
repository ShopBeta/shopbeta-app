import React from "react";
import '../assets/Home.css'
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import moment from "moment";

const Chatrooms = ({ roomId, userId, createdAt }) => {
    const token = localStorage.getItem("token")
    const me = localStorage.getItem("meId")

    const [user, setUser] = useState({})
    useEffect(() => {
        fetch(`https://shopbeta-api.onrender.com/users/${userId}`, {
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
    }, [userId])

    console.log(roomId)
    console.log(user._id)
    console.log(me)
    console.log(token)

    const markread = async () => {

        await fetch(`https://shopbeta-api.onrender.com/chat/${roomId}/mark-read/${me}`, {
           method: "PUT",
           headers: {
               'Content-type': "application/json",
               'Accept' : 'application/json, text/plain'
           },     
       })
       .then((res) => res.json())
       .then((data) => console.log(data))
       .catch((err) => {
           console.log(`Couldn't mark your message as read`)
       })
    }

        return(
               <div className="tc">
                    <div className="dib tc w-100 b--black">
                        <div id="messages" onClick={window.localStorage.setItem("chatroom", roomId)} className="pv2 br3 b-black pointer tj flex flex-wrap">
                            <div className="pa2">
                                <img src={`https://shopbeta-api.onrender.com/users/${userId}/avatar`} alt="avatar" className="br-100" width="50px" height="50px" />
                            </div>
                            <Link className="link black" to={"/assets/Messages"}>
                                <div onClick={markread} className="grow">
                                    <div className="pa3 br4">
                                        <p className="orange">{user.username}</p>
                                        <p className="pt2">Click to view recent conversations.....</p>
                                    </div>
                                    <small class="opacity-6 pl5 code">
                                        <i class="pl6 pr3">last seen</i>
                                        {moment(createdAt).format('h:mm a')}
                                    </small>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>                
        );
}

const Messages = ({ id, roomid, time, message, user}) => {

    const [users, setUsers] = useState({})
    useEffect(() => {
        fetch(`https://shopbeta-api.onrender.com/users/${user}`, {
            method: "GET",
            headers: {
                'Accept' : 'application/json, text/plain',
                'Content-Type' : 'application/json'
            },
        })
        .then((res) => res.json())
        .then((data) => setUsers(data))
        .catch((err) => {
            console.log(err.message)
        })
    }, [user])
    console.log(user)

        return(
                <div>
                    <div id="messages" className="pv2 pointer tj flex flex-wrap">
                        <Link onClick={() => {window.localStorage.setItem("userId", user)}} className="link black" to={"/assets/vendor/User"}>
                            <img src={`https://shopbeta-api.onrender.com/users/${user}/avatar`} alt="avatar" className="br-100 ph2 pa3" width="55px" height="55px" />
                        </Link>
                        <div className="pv2">
                            <small class="opacity-6 ph2 fw5 code">
                                <b>{users.username}</b>
                            </small>
                            <div style={{width: '260px'}} className="tj bg-light-gray pa3 br4">
                                {message}
                            </div>
                            <div className="tr">
                                <small class="opacity-6 code">
                                    {moment(time).fromNow()}
                                    <i class="ph2">{moment(time).format('h:mm a')}</i>
                                </small>
                            </div>
                        </div>
                    </div>
                </div>
        );

}

export { Chatrooms, Messages};