import React, { useRef } from "react";
import './Home.css'
import { useState, useEffect } from "react";
// import img from '../images/tst-image3.jpg'
import { Link } from "react-router-dom";
import Preloader from "../components/Preloader";
import { MessageList } from "../containers/ChatLists";
import { MessagesBlank } from "./indexes/BlankPage";
import { NetworkError } from "./indexes/ErrorPages"


const Messages = () => {
    
    const roomId = localStorage.getItem("chatroom")
    console.log(roomId)
    const token = localStorage.getItem("token")
    const userId = localStorage.getItem("room-user")
    const me = localStorage.getItem("meId")

    const [user, setUser] = useState({})
    useEffect(() => {
        fetch(`https://shopbeta-api.onrender.com/users/${userId}`, {
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
    }, [userId])

    const [messages, setMessages] = useState([])
    const getMessages = () => {
        fetch(`https://shopbeta-api.onrender.com/chat/messages/${roomId}`, {
            method: "GET",
            headers: {
                'Accept' : 'application/json, text/plain',
                'Content-Type' : 'application/json' 
            },
        })
        .then((res) => res.json())
        .then((data) => {
            setMessages(data)
    
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
    
            const blank = document.getElementById('blank')
            blank.style['display'] = 'none'
        })
    }

    window.onclick = () => {
        getMessages();
    }

    console.log(messages)
    console.log(user)
    console.log(me)
    console.log(token)
    console.log(roomId)

    const postMessage = async () => {
   
        const message = {
            messageText : document.querySelector('.message').value
        }

        if (message.messageText.trim() === "") {
            return false
        }

        const messageFormInput = document.querySelector('input')

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

       getMessages();
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
                    <Preloader />
                    <div className="tc">
                        <div className="pa3 w-100">
                            <div className="tr">
                                <small className="f3 fw5 hover-orange pointer grow br3 icon-refresh ph4"></small>
                                <Link className="black link" to={"/assets/Chats"}>
                                    <small onClick={deleteChatRoom} title="delete your entire conversation" className="f3 fw5 hover-orange pointer grow br3 icon-trash"></small>
                                </Link>
                            </div>
                            <div className="tj flex f4 flex-wrap">
                                <span>
                                    <img src={`https://shopbeta-api.onrender.com/users/${userId}/avatar`} alt="avatar" className="br-100" width="55px" height="55px" />
                                </span>
                                <span className="pa2 f5 pointer fw5">
                                    <span className="f5 fw7">{user.username}</span>
                                    <p className="f6 fw4">{user.location}.<small className="icon-globe ph1"></small></p>
                                    <p className="f6 pa1 fw4">{user.phonenumber}</p>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div style={{width: '360px'}} className="dib messages tc">
                        <div className="br3 pa2 b--black">
                            <div className="br3 w-100">
                                <div className="pb2">
                                    <div className="pa3 f6 orange br4">
                                        Welcome to ShopBeta! <br/>Send a message to start a conversation. We strongly encourage constructive conversations to improve your social shopping experience.
                                    </div>
                                </div>
                                {messages.length === 0 && <div id="blank" className="tc">
                                    <MessagesBlank />
                                    <button onClick={getMessages} className="pa3 br-pill pointer f6 white ph4 grow ba bg-orange hover-bg-mid-gray fw6">view messages<small className="icon-eye f6 pl2"></small></button>
                                </div>}
                                <div className="pb5">
                                    <MessageList messages={messages} />
                                </div>
                                <div id="load" className="tc">
                                    <div className="spinner">
                                        <span className="spinner-rotate">
                                        </span>
                                    </div>
                                </div>
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
                    <div className="bg-white pv1 tc" style={{position: 'fixed', width: '100%', backgroundColor: '#ffffff', borderBottom: '1px thin black', bottom: '0', left: '0', marginTop: '1rem', padding: '1rem'}}>
                        <span id="message-form" className="pv2">
                            <input name="message" type="text" className="input pa3 ba br-pill w-80 message" placeholder="Type your message..." required autoComplete="off"/>
                            <small className="icon-picture pointer grow hover-blue orange f3 pa2"></small>
                            <small onClick={handleSubmit} className="button icon-paper-plane orange pointer grow hover-blue f3 pa2"></small>
                        </span>
                    </div> 
                </div>
        );
}

export default Messages;