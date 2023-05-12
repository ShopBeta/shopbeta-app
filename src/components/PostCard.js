import React from "react";
import { useState, useEffect } from "react";
import 'tachyons';
import moment from "moment";
import './simple-line-icons/css/simple-line-icons.css';
import { Link } from "react-router-dom";


const TextPost = ({ name, id, owner, media, text, hearts, time}) => {

    const token = localStorage.getItem("token")
    const me = localStorage.getItem("meId")
    console.log(me)
    console.log(owner)
    console.log(time)

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

    const [comment, setComment] = useState({})
    useEffect(() => {
        fetch(`https://shopbeta-api.onrender.com/feed/${id}/comments`, {
            method: "GET",
            headers: {
                'Accept' : 'application/json, text/plain',
                'Content-Type' : 'application/json'
            },
        })
        .then((res) => res.json())
        .then((data) => setComment(data))
        .catch((err) => {
            console.log(err.message)
        })
    }, [id])

    const buttonClick = async event => {

        event.currentTarget.style.fontWeight = 'bold';
        event.currentTarget.innerHTML = 'following';

           await fetch(`https://shopbeta-api.onrender.com/user/${user._id}/follow/${me}`, {
                method: "POST",
                headers: {
                    'Content-Type' : 'application/json'
                },
            })
            .then((res) => res.json())
            .then((data) => console.log(data))
            .catch((err) => {
                console.log(err.message)
            })

    }

    const heartClick = async event => {
            event.currentTarget.style.color = 'orange';
            event.currentTarget.style.fontWeight = 'bold';

            const count = {
                hearts: hearts + 1
            }

            await fetch(`https://shopbeta-api.onrender.com/feed/${id}/hearts`, {
                method: "POST",
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
    
    return(
        <div style={{width: '360px'}} className="dib pa2">
            <div className="bg-white b--black br3 ma2 pa2 bw2 shadow-5">
                <div className="tj flex f4 flex-wrap">
                    <span>
                        <Link onClick={() => {window.localStorage.setItem("userId", owner)}} className="link black" to={"/assets/vendor/User"}>
                            <img src={`https://shopbeta-api.onrender.com/users/${owner}/avatar`} alt="avatar" className="br-100" width="55px" height="55px" />
                        </Link>
                    </span>
                    <span className="pa2 f5 pointer fw5">
                        <Link onClick={() => {window.localStorage.setItem("userId", owner)}} className="link black" to={"/assets/vendor/User"}>
                            <span>{user.username}</span>
                        </Link>
                        <p className="f6 fw4">{user.location}.<small className="icon-globe ph1"></small></p>
                        <p className="f6 pa1 fw4">
                            {moment(time).from()}
                            <span class="ph2">{moment(time).format('h:mm a')}</span>
                        </p>
                    </span>
                    <span className="tr">
                        <small onClick={buttonClick} className="bg-transparent f5 pointer hover-mid-gray pa2 orange pl4 grow b fw6">Follow</small>
                    </span>
                </div>
                <div className="pa2">
                <div style={{ height: 'auto', textAlign: 'justify'}} className="pa2">
                    <Link onClick={() => {window.localStorage.setItem("feedId", id)}} className="link black" to={"/assets/vendor/FeedPost"}>
                        <p style={{lineHeight: "20px"}} className="f5">
                            {text}
                        </p>
                    </Link>
                </div>
                </div>
                <div className="side2">
                    <Link onClick={() => {window.localStorage.setItem("feedId", id)}} className="link black" to={"/assets/vendor/FeedPost"}>
                        <img src={`https://shopbeta-api.onrender.com/feed/${id}/media`} alt="post..." className="br4"  />
                    </Link>
                    <div className="pa2">
                        <span onClick={heartClick} className="pa2 fw5 ph2 icon-heart pointer f4 grow">
                            <small id="increment" className="pa1 code">{hearts}</small>
                        </span>
                        <Link onClick={() => {window.localStorage.setItem("feedId", id)}} className="link black" to={"/assets/vendor/FeedPost"}>
                            <span className="pa2 pointer f4 fw5 grow icon-bubble">
                                <small className="pa1 code">{comment.length}</small>
                            </span>
                        </Link>
                        <Link onClick={() => {window.localStorage.setItem("feedId", id)}} className="link black" to={"/assets/vendor/FeedPost"}>
                            <span>
                                <input type="text" className="pa3 br-pill b--black-50 ba w-70" placeholder="Comment here..." />
                            </span>
                        </Link>
                    </div>
                </div>
                </div>
            </div>
    )
}

const VideoPost = ({ id, owner, media, text, hearts, views, time}) => {

    const token = localStorage.getItem("token")
    const me = localStorage.getItem("meId")
    console.log(me)
    console.log(owner)
    console.log(time)

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

    const [comment, setComment] = useState({})
    useEffect(() => {
        fetch(`https://shopbeta-api.onrender.com/video/${id}/comments`, {
            method: "GET",
            headers: {
                'Accept' : 'application/json, text/plain',
                'Content-Type' : 'application/json'
            },
        })
        .then((res) => res.json())
        .then((data) => setComment(data))
        .catch((err) => {
            console.log(err.message)
        })
    }, [id])

    const buttonClick = async event => {

        event.currentTarget.style.backgroundColor = 'transparent';
        event.currentTarget.style.color = 'orange';
        event.currentTarget.style.fontWeight = 'bold';
        event.currentTarget.innerHTML = 'following';

           await fetch(`https://shopbeta-api.onrender.com/user/${user._id}/follow/${me}`, {
                method: "POST",
                headers: {
                    'Content-Type' : 'application/json'
                },
            })
            .then((res) => res.json())
            .then((data) => console.log(data))
            .catch((err) => {
                console.log(err.message)
            })

    }

    const heartClick = async event => {
            event.currentTarget.style.color = 'orange';
            event.currentTarget.style.fontWeight = 'bold';

            const count = {
                hearts: hearts + 1
            }

            await fetch(`https://shopbeta-api.onrender.com/video/${id}/hearts`, {
                method: "POST",
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

    const viewClick = async event => {
        event.currentTarget.style.color = 'orange';
        event.currentTarget.style.fontWeight = 'bold';

        const count = {
            views: views + 1
        }

        await fetch(`https://shopbeta-api.onrender.com/video/${id}/views`, {
            method: "POST",
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
    
    return(
            <div style={{Height: '580px', width: '360px'}} className="dib pa2">
                    <div className="bg-white b--black br3 ma2 pa2 bw2 shadow-5">
                        <div className="side2">
                            <video onClick={viewClick} style={{Height: 'auto', width: '100%'}} className="br4" controls>
                                <source src={`https://shopbeta-api.onrender.com/video/${id}/video`} type="video/mp4"></source>
                            </video>
                            <div className="f4">
                                <span className="icon-eye pr2"></span>
                                <span className="pr6"> 
                                    <small class="opacity-6 code">
                                        <i class=""></i>
                                        {views} | Views
                                    </small>
                                </span>
                                <span className="f6 pa1 code fw3">
                                    {moment(time).from()}
                                    {/* <span class="ph2">{moment(time).format('h:mm a')}</span> */}
                                </span>
                            </div>
                          <div className="">
                            <div className="pa2">
                                <div style={{ height: 'auto', textAlign: 'justify'}} className="pa2">
                                    <Link onClick={() => {window.localStorage.setItem("videoId", id)}} className="link black" to={"/assets/vendor/VideoPost"}>
                                        <div style={{lineHeight: "18px"}} className="f6">
                                            {text}
                                        </div>
                                    </Link>
                                    <div className="pa2 tr">
                                            <p onClick={heartClick} className="pa2 fw5 pointer icon-heart pointer f3">
                                                <small id="increment" className="pa1 code">{hearts}</small>
                                            </p>
                                            <Link onClick={() => {window.localStorage.setItem("videoId", id)}} className="link black" to={"/assets/vendor/VideoPost"}>
                                                <p className="pa2 pointer f3 fw5 icon-bubble">
                                                    <small className="pa1 f5 code">{comment.length}</small>
                                                </p>
                                            </Link>
                                            <p className="tr">  
                                                <Link onClick={() => {window.localStorage.setItem("userId", owner)}} className="link black" to={"/assets/vendor/User"}>
                                                    <img src={`https://shopbeta-api.onrender.com/users/${owner}/avatar`} alt="avatar" className="br-100 pointer" width="55px" height="55px" />
                                                </Link>
                                                <Link onClick={() => {window.localStorage.setItem("userId", owner)}} className="link black" to={"/assets/vendor/User"}>
                                                    <p className="pa2 pointer fw5">
                                                        <p>{user.username}</p>
                                                    </p>
                                                </Link>
                                                <p onClick={buttonClick} className="f5 pointer hover-orange tr hover-mid-gray orange ph2 b fw6">
                                                    Follow
                                                </p>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    )
}

export { VideoPost, TextPost};