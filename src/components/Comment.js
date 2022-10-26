import React from 'react'
import { useState, useEffect } from 'react';


const Comment = ({ text, file, owner, time }) => {

    const [user, setUser] = useState({})
    useEffect(() => {
        fetch(`https://shopbeta-app.herokuapp.com/users/${owner}`, {
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
            <div>
                <div class="chat-wrapper">
                            <div className="">
                                <div>
                                    <div className="tj flex flex-wrap">
                                        <img src={user.avatar} alt="avatar" className="br-100" width="50px" height="50px" />
                                        <span className="pa2 fw5 f5">
                                            {user.username}
                                            <p className="f6 code fw3">
                                                {user.location}
                                            </p>
                                        </span>
                                            </div>
                                                </div>
                                                    <div className="pv2">
                                                        <div className="bg-light-blue pa3 br4">
                                                            {text}
                                                        </div>
                                                        <small class="opacity-6 code">
                                                            <i class="pr2"></i>
                                                            {time}
                                                            11:01 AM | Yesterday
                                                        </small>
                                                    </div>
                                                </div>
                                            </div> 
            </div>
    )
}

export default Comment; 