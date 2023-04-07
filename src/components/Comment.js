import React from 'react'
import { useState, useEffect } from 'react';
import moment from "moment";
import { Link } from "react-router-dom";


const Comment = ({ text, file, owner, time }) => {

    const [user, setUser] = useState({})
    useEffect(() => {
        fetch(`https://shopbeta-api.onrender.com/users/${owner}`, {
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
    }, [owner])

    return(
                <div class="chat-wrapper">
                            <div className="">
                                <div>
                                    <div className="tj flex flex-wrap">
                                        <Link onClick={() => {window.localStorage.setItem("userId", user)}} className="link black" to={"/assets/vendor/User"}>
                                            <img src={`https://shopbeta-api.onrender.com/users/${user._id}/avatar`} alt="avatar" className="br-100 pv3 ph2" width="50px" height="50px" />
                                        </Link>
                                        <div className="pv2">
                                            <small class="opacity-6 code">
                                                <i class="ph2">{user.username}</i>
                                            </small>
                                            <div style={{width: '200px'}} className="bg-light-blue pa3 br4">
                                                {text}
                                            </div>
                                            <div class="opacity-6 tr code">
                                                <small>
                                                    <i class="ph2"></i>
                                                    {moment(time).format('h:mm a')}
                                                </small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                        </div>                       
    )
}

export default Comment; 