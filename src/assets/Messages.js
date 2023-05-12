import React, { useRef } from "react";
import './Home.css'
import { useState, useEffect } from "react";
import img from '../images/tst-image3.jpg'
import { Link } from "react-router-dom";
import Preloader from "../components/Preloader";
import { MessageList } from "../containers/ChatLists";
import NetworkError from "./indexes/NetworkError"


const Messages = () => {
    
    const roomId = localStorage.getItem("chatroom")
    const token = localStorage.getItem("token")
    const me = localStorage.getItem("meId")

    const [user, setUser] = useState([])
    useEffect(() => {
        fetch(`https://shopbeta-api.onrender.com/chat/${roomId}/users`, {
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
    }, [roomId])

    const [chats, setChats] = useState([])
    useEffect(() => {    
        setInterval(function() {
            fetch(`https://shopbeta-api.onrender.com/chat/messages/${roomId}`, {
                method: "GET",
                headers: {
                    'Accept' : 'application/json, text/plain',
                    'Content-Type' : 'application/json' 
                },
            })
            .then((res) => res.json())
            .then((data) => {
                setChats(data)

                const error = document.getElementById('error')
                error.style['display'] = 'none'
                
                const load = document.getElementById('load')
                load.style['display'] = 'none'
            })
            .catch((err) => {
                console.log(err.message)

                const error = document.getElementById('error')
                error.style['display'] = 'contents'
    
                const load = document.getElementById('load')
                load.style['display'] = 'none'
            })
        }, 2000); // every 5 minutes (100000)
    }, [roomId])

    console.log(chats)
    console.log(user)
    console.log(me)
    console.log(token)
    console.log(roomId)

    const postMessage = async () => {

        const message = {
            messageText : document.querySelector('.message').value
        }

        const messageForm = document.querySelector('#message-form')
        const messageFormInput = document.querySelector('input')
        const messageFormButton = document.querySelector('button')

        // messageFormButton.setAttribute('disabled', 'disabled')

        // messageFormButton.removeAttribute('disabled')
        messageFormInput.value = ''
        messageFormInput.focus()

        await fetch(`https://shopbeta-api.onrender.com/chat/${roomId}/message/${me}`, {
           method: "POST",
           headers: {
               'Content-type': "application/json",
               'Accept' : 'application/json, text/plain'
           },
           body: JSON.stringify(message)       
       })
       .then((res) => res.json())
       .then((data) => console.log(data))
       .catch((err) => {
           console.log(`Couldn't post your message`)
       })
    }

    const deleteChatRoom = async () => {

        await fetch(`https://shopbeta-api.onrender.com/room/${roomId}/`, {
           method: "DELETE",
           headers: {
               'Content-type': "application/json",
               'Accept' : 'application/json, text/plain'
           },     
       })
       .then((res) => res.json())
       .then((data) => console.log(data))
       .catch((err) => {
           console.log(`Couldn't delete your message`)
       })
    }

    const chatEndRef = useRef(null)

    const scrollToBottom = () => {
        chatEndRef.current.scrollIntoView({ behavior: "smooth"})
    }
    
    useEffect(() => {
        scrollToBottom()
    })

    const handleSubmit = () => {
        postMessage()
    }
    
          return(
               <div className="tc">
                <div>
                    <Preloader />
                    <div className="tc">
                        <div className="pa3 w-100">
                            <div className="tr">
                                <small className="f3 fw5 hover-orange pointer grow br3 icon-settings ph4"></small>
                                <Link className="black link" to={"/assets/Chats"}>
                                    <small onClick={deleteChatRoom} title="delete your entire conversation" className="f3 fw5 hover-orange pointer grow br3 icon-trash"></small>
                                </Link>
                            </div>
                            <div className="tj flex f4 flex-wrap">
                                <span>
                                    <img src={`https://shopbeta-api.onrender.com/users/${user._id}/avatar`} alt="avatar" className="br-100" width="55px" height="55px" />
                                </span>
                                <span className="pa2 f5 pointer fw5">
                                    <span className="f5 fw7">{user.username}</span>
                                    <p className="f6 fw4">{user.location}.<small className="icon-globe ph1"></small></p>
                                    <p className="f6 pa1 fw4">{user.phonenumber}</p>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div style={{overflowY: 'auto', height: '490px', width: '370px'}} className="dib messages tc">
                        <div className="br3 pa2 b--black">
                            <div className="br3 w-100">
                                <div className="pb2">
                                    <div className="pa3 f6 orange br4">
                                        Welcome to ShopBeta! <br/>Send a message to start a conversation. We strongly encourage constructive conversations to improve your social shopping experience.
                                    </div>
                                </div>
                                  <MessageList chats={chats} />
                                  <p id="load" className="tc code orange ph2 fw6 f4">Loading messages...</p>
                                  <div id="error" style={{display: 'none'}} className="tc">
                                        <NetworkError />
                                    </div>
                                  <div ref={chatEndRef} >
                                        </div>
                                    </div>
                                </div>                
                            <div>
                        </div>
                    </div>
                    </div>
                    <div className="bg-white pv3 tc" style={{position: 'static', width: '100%'}}>
                        <span id="message-form" className="pv2">
                            <input name="message" type="text" className="input pa3 ba br-pill w-80 message" placeholder="Type your message..." required autoComplete="off"/>
                            <small onClick={handleSubmit} className="button icon-paper-plane orange pointer grow hover-blue f3 pa2"></small>
                            <small className="icon-picture pointer grow hover-blue orange f3 pa2"></small>
                        </span>
                    </div> 
                </div>
        );
}

export default Messages;