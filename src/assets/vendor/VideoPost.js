import React from "react";
import { useState, useEffect } from "react";
import 'tachyons';
import moment from "moment";
import '../../components/simple-line-icons/css/simple-line-icons.css';
import { Link } from "react-router-dom";
import CommentList from "../../containers/CommentList";
import { NetworkError, UserError } from "../indexes/ErrorPages";


const VideoPost = ({ text }) => {

    const token = localStorage.getItem("token")
    const me = localStorage.getItem("meId")
    const videoId = localStorage.getItem('videoId')
    console.log(videoId)

    const [video, setVideo] = useState({})
    useEffect(() => {
        fetch(`https://shopbeta-api.onrender.com/video/${videoId}`, {
            method: "GET",
            headers: {
                'Accept' : 'application/json, text/plain',
                'Content-Type' : 'application/json'
            },
        })
        .then((res) => res.json())
        .then((data) => {
            setVideo(data)

            const error = document.getElementById('error')
            error.style['display'] = 'none'
        })
        .catch((err) => {
            console.log(err.message)
            
            const error = document.getElementById('error')
            error.style['display'] = 'contents'
        })
    }, [videoId])

    console.log(video)

    const [user, setUser] = useState({})
    useEffect(() => {
        fetch(`https://shopbeta-api.onrender.com/users/${video.owner}`, {
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
    }, [video.owner])

    const [comment, setComment] = useState([])
    const getComments = () => {
        fetch(`https://shopbeta-api.onrender.com/video/${videoId}/comments`, {
            method: "GET",
            headers: {
                'Accept' : 'application/json, text/plain',
                'Content-Type' : 'application/json' 
                },
            })
            .then((res) => res.json())
            .then((data) => {
                setComment(data)
    
                const load = document.getElementById('load')
                load.style['display'] = 'none'
            })
            .catch((err) => {
                console.log(err.message)
    
                const load = document.getElementById('load')
                load.innerHTML = 'Failed to load comments!'
    
                const blank = document.getElementById('blank')
                blank.style['display'] = 'none'
            })
    }

    window.onclick = () => {
        getComments();
    }

    const addComment = async () => {

        const comment = {
            text: document.querySelector('.text').value,
            owner: me
        }

        if (comment.text.trim() === "") {

            return false
        }

        const commentFormInput = document.querySelector('input')
        commentFormInput.value = ''
        commentFormInput.focus()

        await fetch(`https://shopbeta-api.onrender.com/video/${videoId}/comments`, {
            method: "POST",
            headers: {
                'Authorization' : 'Bearer ' + token,
                'Accept' : 'application/json, text/plain',
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(comment)
        })
        .catch((err) => {
            console.log(err.message)

            const userError = document.getElementById('user-error')
            userError.style['display'] = 'contents'

            const networkError = document.getElementById('error')
            networkError.style['display'] = 'none'

            const comment = document.getElementById('comment')
            comment.style['display'] = 'none'
        })

        getComments();
    }

    const heartClick = async event => {
            event.currentTarget.style.color = 'orange';
            event.currentTarget.style.fontWeight = 'bold';

            const count = {
                hearts: video.hearts + 1
            }

            await fetch(`https://shopbeta-api.onrender.com/video/${videoId}/hearts`, {
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

    const handleSubmit = e => {
        e.preventDefault()
        addComment()
    }
    
    return(
            <div className="tc w-100 pv3">
                <div style={{width: '360px'}} className="dib pa2 pb2 bw2">
                    <div className="side2">
                        <video style={{Height: 'auto', width: '100%'}} className="br4" controls>
                            <source src={`https://shopbeta-api.onrender.com/video/${videoId}/video`} type="video/mp4"></source>
                        </video>
                        <div className="tl pv2">
                                <span className="icon-eye pl2 f6"></span>
                                <span className="pa2 fw5 ph2 pointer">
                                    {video.views}
                                    <small id="increment" className="pa1 code">views</small>
                                </span>
                                <span className="pa2 fw5 ph2 pointer">
                                    {video.hearts}
                                    <small id="increment" className="pa1 code">hearts</small>
                                </span>
                                <span className="pa2 fw5 ph2 pointer">
                                    {comment.length}
                                    <small className="pa1 code">comments</small>
                                </span>
                            </div>
                            <div className="tr ph2">
                                <small>
                                    {moment(video.time).from()}:
                                    <span class="ph1">{moment(video.time).format('h:mm a')}</span>
                                </small>
                            </div>
                            <div className="">
                                <div className="pa2">
                                    <div style={{ height: 'auto', textAlign: 'justify'}} className="pa2">
                                        <div className="pa2 tj flex f4 flex-wrap">
                                            <span className="">
                                                <Link onClick={() => {window.localStorage.setItem("userId", video.owner)}} className="link black" to={"/assets/vendor/User"}>
                                                    <img src={`https://shopbeta-api.onrender.com/users/${video.owner}/avatar`} alt="avatar" className="br-100 pointer" width="50px" height="50px" />
                                                </Link>
                                            </span>
                                            <span className="ph2">
                                                <Link onClick={() => {window.localStorage.setItem("userId", video.owner)}} className="link f5 black" to={"/assets/vendor/User"}>
                                                    <span className="orange">
                                                        {user.username}
                                                    </span>
                                                </Link>
                                                <Link className="link black" to={"/assets/vendor/VideoPost"}>
                                                    <div style={{lineHeight: "18px"}} className="f5 pa1">
                                                        {video.text}
                                                    </div>
                                                </Link>
                                            </span>
                                            <div className="pt4">
                                                <span onClick={heartClick} className="pa2 fw5 ph3 icon-heart pointer f4 grow">
                                                    <small id="increment" className="pa1 code">like</small>
                                                </span>
                                                <Link className="link ph4 black" to={"/assets/vendor/VideoPost"}>
                                                    <span className="pa2 pointer f4 fw5 grow icon-bubble">
                                                        <small className="pa1 code">comment</small>
                                                    </span>
                                                </Link>
                                                <Link className="link black" to={"#"}>
                                                    <span className="pa2 pointer f4 fw5 grow icon-share-alt">
                                                        <small className="pa1 code">share</small>
                                                    </span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div className="dib pv3">
                        <div className="f5 tj">
                            {comment.length === 0 && <div id="blank" className="tc">
                                <p style={{fontSize: '100px', fontWeight: '510'}} className="icon-bubbles pt6 mid-gray"></p>
                                <p className="pv2 tc fw6 f5">No comments yets <br/>Be the first to drop a comment.</p>
                            </div>}
                            <div id="comment">
                                <CommentList comment={comment}/>
                            </div>
                            <div id="error" style={{display: 'none'}} className="tc">
                                <NetworkError />
                            </div>
                            <div id="user-error" style={{display: 'none'}} className="tc">
                                <UserError />
                            </div>
                            <p id="load" className="tc code orange fw6 f4">Loading comments...</p>
                        </div>
                    </div>
                </div>
                <div style={{position: 'fixed', width: '100%', backgroundColor: '#ffffff', bottom: '0', left: '0', marginTop: '1rem', padding: '1rem'}} className="tc">
                    <form onSubmit={handleSubmit}>
                        <span className="pv2">
                            <input id="text" name="text" value={text} type="text" className="text input pa3 br-pill b--black-50 ba w-80" placeholder="Comment here..." />
                        </span>
                        <span className="ph1">
                            <button type="file" className="icon-picture bg-transparent b--transparent pointer f3 orange"></button>
                        </span>
                        <span className="ph1">
                            <button type="submit" className="icon-paper-plane bg-transparent b--transparent pointer f3 orange"></button>
                        </span>
                    </form>
                </div>
            </div>
    )
}

export default VideoPost;