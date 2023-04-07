import React from "react";
import { useState, useEffect } from "react";
import 'tachyons';
import moment from "moment";
import '../../components/simple-line-icons/css/simple-line-icons.css';
import CommentModal from "../../containers/CommentModal";
import { Link } from "react-router-dom";

const VideoPost = ({ id, owner, media, text, hearts, time}) => {

    const token = localStorage.getItem("token")
    const me = localStorage.getItem("meId")
    console.log(me)

    const [user, setUser] = useState({})
    useEffect(() => {
        fetch(`http://localhost:3000/users/${owner}`, {
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
        fetch(`http://localhost:3000/video/${id}/comments`, {
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
                hearts: hearts + 1
            }

            await fetch(`https://shopbeta-app.herokuapp.com/video/${id}/hearts`, {
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

    const [show, setShow] = useState(false)

    //functon to handle payment modal close
    const handleShut= () => {
        setShow(false)
    }

     //functon to handle payment modal open
    const handleShow = () => {
        setShow(true)
    } 
    
    return(
            <div style={{Height: '580px', width: '360px'}} className="dib tc">
                <CommentModal handleShow={show} handleShut={handleShut} />
                    <div className="bg-white b--black br3 ma3 pa2 bw2 shadow-5">
                        <div className="side2">
                            <video style={{Height: 'auto', width: '100%'}} className="br4" controls>
                                <source src={`http://localhost:3000/video/${id}/video`} type="video/mp4"></source>
                            </video>
                            <div className="f4">
                                <span className="icon-eye pr2"></span>
                                <span className="pr6"> 
                                    <small class="opacity-6 code">
                                        <i class=""></i>
                                        2K | Views
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
                                    <div style={{lineHeight: "18px"}} className="f6">
                                        {text}
                                    </div>
                                    <div className="pa2 tr">
                                            <p onClick={heartClick} className="pa2 fw5 ph3 pointer icon-heart pointer f3">
                                                <small id="increment" className="pa1 code">{hearts}</small>
                                            </p>
                                            <p onClick={() => {window.history.pushState(null, "", id)}} className="pa2 pointer f3 fw5 icon-bubble">
                                                <small onClick={handleShow} className="pa1 f5 code">{comment.length}</small>
                                            </p>
                                            <p className="tr">  
                                                <Link onClick={() => {window.localStorage.setItem("userId", owner)}} className="link black" to={"/assets/vendor/User"}>
                                                    <img src={`http://localhost:3000/users/${owner}/avatar`} alt="avatar" className="br-100 pointer" width="55px" height="55px" />
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

export default VideoPost