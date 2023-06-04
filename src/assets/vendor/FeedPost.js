import React from "react";
import { useState, useEffect } from "react";
import 'tachyons';
import moment from "moment";
import '../../components/simple-line-icons/css/simple-line-icons.css';
import { Link } from "react-router-dom";
import CommentList from "../../containers/CommentList";
import { UserError, NetworkError } from "../indexes/ErrorPages";


const FeedPost = ({ text, file }) => {

    const token = localStorage.getItem("token")
    const me = localStorage.getItem("meId")
    const feedId = localStorage.getItem('feedId')
    console.log(feedId)

    const [feed, setFeed] = useState({})
    useEffect(() => {
        fetch(`https://shopbeta-api.onrender.com/feed/${feedId}`, {
            method: "GET",
            headers: {
                'Accept' : 'application/json, text/plain',
                'Content-Type' : 'application/json'
            },
        })
        .then((res) => res.json())
        .then((data) => {
            setFeed(data)

            const error = document.getElementById('error')
            error.style['display'] = 'none'
        })
        .catch((err) => {
            console.log(err.message)

            const error = document.getElementById('error')
            error.style['display'] = 'contents'
        })
    }, [feedId])

    console.log(feed.owner)

    const [user, setUser] = useState({})
    useEffect(() => {
        fetch(`https://shopbeta-api.onrender.com/users/${feed.owner}`, {
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

    const [comment, setComment] = useState([])
    useEffect(() => {
        setInterval(function() {
            fetch(`https://shopbeta-api.onrender.com/feed/${feedId}/comments`, {
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
    }, [feedId])


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

        await fetch(`https://shopbeta-api.onrender.com/feed/${feedId}/comments`, {
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
                hearts: feed.hearts + 1
            }

            await fetch(`https://shopbeta-api.onrender.com/feed/${feedId}/hearts`, {
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
                <div className="tj flex f4 flex-wrap">
                    <span>
                        <Link onClick={() => {window.localStorage.setItem("userId", feed.owner)}} className="link black" to={"/assets/vendor/User"}>
                            <img src={`https://shopbeta-api.onrender.com/users/${feed.owner}/avatar`} alt="avatar" className="br-100" width="55px" height="55px" />
                        </Link>
                    </span>
                    <span className="pa2 f5 pointer fw5">
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
                    <img src={`https://shopbeta-api.onrender.com/feed/${feedId}/media`} alt="post..." className="br4"  />
                    <div className="pa2">
                        <span onClick={heartClick} className="pa2 fw5 ph4 icon-heart pointer f4 grow">
                            <small id="increment" className="pa1 code">{feed.hearts}</small>
                        </span>
                        <span className="pa2 pointer ph4 f4 fw5 grow icon-bubble">
                            <small className="pa1 code">{comment.length}</small>
                        </span>
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
                        <p className="pv2 tc fw6 f5">No comments yet <br/>Be the first to drop a comment.</p>
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

export default FeedPost;