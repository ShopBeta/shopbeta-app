import React from "react";
import { useState, useEffect } from "react";
import 'tachyons';
import moment from "moment";
import '../../components/simple-line-icons/css/simple-line-icons.css';
import { Link } from "react-router-dom";
import CommentList from "../../containers/CommentList";


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
        .then((data) => setVideo(data))
        .catch((err) => {
            console.log(err.message)
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
            .then((data) => setComment(data))
            .catch((err) => {
                console.log(err.message)
            })
        }, 2000); // every 5 minutes (100000)
    }, [videoId])

    const addComment = async () => {

        const comment = {
            text: document.querySelector('#text').value,
            file: document.querySelector('.file').value,
            owner: me
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
            <div className="tc pv3">
                <div style={{width: '360px'}} className="ma3 dib pa2 bw2">
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
        <div style={{width: '360px'}} className="dib ma3">
            <div style={{ overflowY: 'auto', height: '760px'}} className="f5 pv3 tj">
                <div className="tc pv2">
                    <p className="f5 b pv2">Comment here to join the conversation</p>
                </div>
                <div className="tc f5">
                    <div className="pa4 ph5">
                        <p className="icon-bubbles mid-gray tc f1"></p>
                        <p className="pv2 orange f5">"Type to a send a comment"</p>
                    </div>
                </div>  
            <div>
            <CommentList comment={comment}/>
            </div>
            </div>
            <div className="tc">
                <form onSubmit={handleSubmit}>
                    <span className="pv2">
                        <input id="text" name="text" value={text} type="text" className="text input pa3 br-pill b--black-50 ba w-75" placeholder="Comment here..." />
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