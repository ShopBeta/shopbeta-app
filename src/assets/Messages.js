import React, { useRef } from "react";
import './Home.css'
import { useState, useEffect } from "react";
// import img from '../images/tst-image3.jpg'
// import img1 from '../images/space scenery.jpg'
import { Link } from "react-router-dom";
import Preloader from "../components/Preloader";
import { MessageList } from "../containers/ChatLists";


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
            .then((data) => setChats(data))
            .catch((err) => {
                console.log(err.message)
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
                                <small title="mute chatroom" className="f3 fw5 hover-orange pointer grow br3 pa2 icon-bell"></small>
                                <small className="f3 fw5 hover-orange pointer grow br3 pa2 icon-settings ph4"></small>
                                <Link className="black link" to={"/assets/Chats"}>
                                    <small onClick={deleteChatRoom} title="delete your entire conversation" className="f3 fw5 hover-orange pointer grow br3 icon-trash"></small>
                                </Link>
                            </div>
                            <div className="f3 pa2 tl fw6 code">{user.username}<p className="f4 code ph3 icon-phone">{user.phonenumber}</p></div>
                        </div>
                    </div>
                    <div style={{overflowY: 'auto', height: '451px', width: '370px'}} className="dib messages tc">
                        <div className="br3 pa2 b--black">
                            <div  className="br3 pa2 w-100">
                                <Link className="link black" to={"/assets/vendor/User"}>
                                    <div onClick={() => {window.localStorage.setItem("userId", user._id)}} className="pv2 pointer">
                                        <img src={`https://shopbeta-api.onrender.com/users/${user._id}/avatar`} alt="Accessories..." className="br-100" width="65px" height="65px" />
                                        <div className="pa2 fw5 f5">
                                            {user.username}
                                            <p className="f6 pa1 code orange fw3"><small className="icon-location-pin pr2"></small>{user.location}</p>
                                        </div>
                                    </div>
                                </Link>
                                <div className="pb2">
                                    <div className="pa3 f6 br4">
                                        Welcome to ShopBeta! <br/>Send a message to start a conversation. We strongly encourage constructive conversations to improve your social shopping experience.
                                    </div>
                                </div>
                                  <MessageList chats={chats} />
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
                            <input name="message" type="text" className="input pa3 ba f4 br-pill w-80 message" placeholder="Type your message..." required autoComplete="off"/>
                            <small onClick={handleSubmit} className="button icon-paper-plane hover-orange pointer grow blue f3 pa2"></small>
                            <small className="icon-picture pointer grow blue f3 pa2"></small>
                        </span>
                    </div> 
                </div>
        );
}

export default Messages;