import React from "react";
import { useState, useEffect } from "react";
import 'tachyons';
import moment from "moment";
import '../../components/simple-line-icons/css/simple-line-icons.css';
import { Link } from "react-router-dom";


const TextPost = () => {

    const token = localStorage.getItem("token")
    const me = localStorage.getItem("meId")
    const feedId = localStorage.getItem('feedId')
    console.log(feedId)

    const [feed, setFeed] = useState({})
    useEffect(() => {
        fetch(`http://localhost:3000/feed/${feedId}`, {
            method: "GET",
            headers: {
                'Accept' : 'application/json, text/plain',
                'Content-Type' : 'application/json'
            },
        })
        .then((res) => res.json())
        .then((data) => setFeed(data))
        .catch((err) => {
            console.log(err.message)
        })
    }, [])

    console.log(feed.owner)

    const [user, setUser] = useState({})
    useEffect(() => {
        fetch(`http://localhost:3000/users/${feed.owner}`, {
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
    }, [feed.owner])

    const [comment, setComment] = useState({})
    useEffect(() => {
        fetch(`http://localhost:3000/feed/${feedId}/comments`, {
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
    }, [feedId])

    const buttonClick = async event => {

        event.currentTarget.style.fontWeight = 'bold';
        event.currentTarget.innerHTML = 'following';

           await fetch(`https://shopbeta-app.herokuapp.com/user/${user._id}/follow/${me}`, {
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
                hearts: feed.hearts + 1
            }

            await fetch(`https://shopbeta-app.herokuapp.com/feed/${feedId}/hearts`, {
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
        <div style={{width: '360px'}} className="dib">
            <div className="ma3 pa2 bw2">
                <div className="tj flex f4 flex-wrap">
                    <span onClick={() => {window.history.pushState(null, "", feedId)}}>
                        <Link onClick={() => {window.localStorage.setItem("userId", feed.owner)}} className="link black" to={"/assets/vendor/User"}>
                            <img src={`http://localhost:3000/users/${feed.owner}/avatar`} alt="avatar" className="br-100" width="55px" height="55px" />
                        </Link>
                    </span>
                    <span onClick={() => {window.history.pushState(null, "", feed._id)}} className="pa2 f5 pointer fw5">
                        <Link onClick={() => {window.localStorage.setItem("userId", feed.owner)}} className="link black" to={"/assets/vendor/User"}>
                            <span>{user.username}</span>
                        </Link>
                        <p className="f6 fw4">{user.location}.<small className="icon-globe ph1"></small></p>
                        <p className="f6 pa1 fw4">
                            {moment(feed.time).from()}
                            <span class="ph2">{moment(feed.time).format('h:mm a')}</span>
                        </p>
                    </span>
                    <span className="tr">
                        <small onClick={buttonClick} className="bg-transparent f5 pointer hover-mid-gray pa2 orange pl4 grow b fw6">Follow</small>
                    </span>
                </div>
                <div className="pa2">
                <div style={{ height: 'auto', textAlign: 'justify'}} className="pa2">
                    <p style={{lineHeight: "20px"}} className="f5">
                        {feed.text}
                    </p>
                </div>
                </div>
                <div className="side2">
                    <img src={`http://localhost:3000/feed/${feedId}/media`} alt="post..." className="br4"  />
                    <div className="pa2">
                        <span onClick={heartClick} className="pa2 fw5 ph2 icon-heart pointer f4 grow">
                            <small id="increment" className="pa1 code">{feed.hearts}</small>
                        </span>
                        <span className="pa2 pointer f4 fw5 grow icon-bubble">
                            <small className="pa1 code">{comment.length}</small>
                        </span>
                        <span>
                            <input type="text" className="pa3 br-pill b--black-50 ba w-70" placeholder="Comment here..." />
                        </span>
                    </div>
                </div>
                </div>
            </div>
    )
}

export default TextPost;