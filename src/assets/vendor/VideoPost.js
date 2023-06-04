import React from "react";
import { useState, useEffect } from "react";
import 'tachyons';
import moment from "moment";
import '../../components/simple-line-icons/css/simple-line-icons.css';
import { Link } from "react-router-dom";
import CommentList from "../../containers/CommentList";
import { NetworkError, UserError } from "../indexes/ErrorPages";


const VideoPost = ({ text, file }) => {

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
    useEffect(() => {
        setInterval(function() {
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
        }, 2000); // every 5 minutes (100000)
    }, [videoId])

    const addComment = async () => {

        const comment = {
            text: document.querySelector('#text').value,
            file: document.querySelector('.file').value,
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
    }


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
                <div style={{width: '360px'}} className="dib pa2 bw2">
                    <div className="side2">
                        <video style={{Height: 'auto', width: '100%'}} className="br4" controls>
                            <source src={`https://shopbeta-api.onrender.com/video/${videoId}/video`} type="video/mp4"></source>
                        </video>
                    <div className="f4">
                        <span className="icon-eye pr2"></span>
                        <span className="pr6"> 
                            <small class="opacity-6 code">
                                <i class=""></i>
                                {video.hearts} | Views
                            </small>
                        </span>
                        <span className="f6 pa1 code fw3">
                            {moment(video.time).from()}
                            {/* <span class="ph2">{moment(time).format('h:mm a')}</span> */}
                        </span>
                    </div>
                    <div className="pa2">
                        <div style={{ height: 'auto', textAlign: 'justify'}} className="pa2">
                            <div style={{lineHeight: "18px"}} className="f6">
                                {video.text}
                            </div>
                        <div className="pa2 tr">
                            <p onClick={heartClick} className="pa2 fw5 pointer icon-heart pointer f3">
                                <small id="increment" className="pa1 code">{video.hearts}</small>
                            </p>
                            <p className="pa2 pointer f3 fw5 icon-bubble">
                                <small className="pa1 f5 code">{comment.length}</small>
                            </p>
                            <p className="tr">  
                                <Link onClick={() => {window.localStorage.setItem("userId", video.owner)}} className="link black" to={"/assets/vendor/User"}>
                                    <img src={`https://shopbeta-api.onrender.com/users/${video.owner}/avatar`} alt="avatar" className="br-100 pointer" width="55px" height="55px" />
                                </Link>
                                <Link onClick={() => {window.localStorage.setItem("userId", video.owner)}} className="link black" to={"/assets/vendor/User"}>
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
        <div style={{width: '360px'}} className="dib">
            <div style={{ overflowY: 'auto', height: '550px'}} className="f5 pv3 tj">
                <div className="tc pv2">
                    <p className="f5 b pv2">Comment here to join the conversation</p>
                </div>
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
            <div className="tc">
                <form onSubmit={handleSubmit}>
                    <span className="pv2">
                        <input id="text" name="text" value={text} type="text" className="text input pa3 br-pill b--black-50 ba w-80" placeholder="Comment here..." />
                    </span>
                    <span className="ph1">
                        <button type="submit" className="icon-paper-plane bg-transparent b--transparent pointer f3 orange"></button>
                    </span>
                    <span className="ph1">
                        <small type='file' value={file} name="file" className="file icon-camera pointer f3 orange"></small>
                    </span>
                </form>
            </div>
        </div>
    </div>
    )
}

export default VideoPost;