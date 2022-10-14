import { makeStyles } from "@material-ui/core";
import React from "react";
import { useState, useEffect } from "react";
import 'tachyons';
import { Link } from "react-router-dom";
import { MessageBlank } from "../assets/vendor/Pages";
import img from '../images/1.jpg';
import img2 from '../images/Art painting.jpg';
import img1 from '../images/space scenery.jpg';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: theme.spacing(2)
    }
}))



const Message = ({ handleShut }) => {

    const [data, setData] = useState({})

    useEffect(() => {
        fetch("https://cdnjs.cloudflare.com/ajax/libs/mustache.js/3.0.1/mustache.min.js")
        fetch("https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.22.2/moment.min.js")
        fetch("https://cdnjs.cloudflare.com/ajax/libs/qs/6.6.0/qs.min.js")
        fetch("/socket.io/socket.io.js")
        .then(res => res.json())
        .then((data) => setData(data))
        .catch((err) => {
            console.log(err.message)
        })
    }, [])

//     display

//     const display = () => {
//         const my_div = document.getElementById('hide')
//         my_div.style['display'] = 'none'
//     }
        
//    // create a new list item

//     const newMessage = () => {
        
//         const div = document.createElement("p", {id: 'element', style: {color: ""} , className: ''}) 
//                 div.style.textAlign = 'right'
//                 div.className = 'pv3 pv2 tj pb3 bg-light-blue pa3 br4'

//         const inputValue = document.getElementById("myInput").value

//         const t =  document.createTextNode(inputValue)

//         div.appendChild(t);
    
//         document.getElementById("myUL").appendChild(div);

//         document.getElementById("myInput").value = "";
        
//         const p = document.createElement("p");

//         const Time = new Date()
//         Time.getTime()
//         Time.getDay()
        
//         const txt = document.createTextNode(Time.toLocaleString());
//             p.className = "code pv2 tr f7";
//             p.appendChild(txt);
//             document.getElementById('myUL').appendChild(p);
        
//     }


//     const heartMoji = () => {
//         document.getElementById("myInput").value = "";

//         const p = document.createElement("p");
        
//         const txt = document.createTextNode("");
//             p.className = "icon-heart pv2 pa2 tr red f2";
//             p.appendChild(txt);
//             document.getElementById('myUL').appendChild(p);
//     }

//     const location = () => {
//         const p = document.createElement("p")
//         const icon = document.createElement("p")
        
//         const txt = document.createTextNode("my current location")
//             p.className = "blue code pv3 link tr pb3 w-100 pa3 br4"
//             icon.className = "icon-location-pin green f3 tr"
//             icon.appendChild(p)
//             p.appendChild(txt)
//             document.getElementById('myUL').appendChild(icon)
//             document.getElementById('myUL').appendChild(p)
//     }

// const socket = io()

// // Elements
// const $messageForm = document.querySelector('#message-form')
// const $messageFormInput = $messageForm.querySelector('message-input')
// const $messageFormButton = $messageForm.querySelector('send-message')
// const $sendLocationButton = document.querySelector('#send-location')
// const $messages = document.querySelector('#messages')

// // Templates
// const messageTemplate = document.querySelector('#message-template').innerHTML
// const locationMessageTemplate = document.querySelector('#location-template').innerHTML
// const userbarTemplate = document.querySelector('#userbar-template').innerHTML


// // Options
// const { username, room } = Qs.parse(location.search, { ignoreQueryPrefix: true })

// const autoscroll = () => {
//     // New message element
//     const $newMessage = $messages.lastElementChild

//     // Height of the new message
//     const newMessageStyles = getComputedStyle($newMessage)
//     const newMessageMargin = parseInt(newMessageStyles.marginBottom)
//     const newMessageHeight = $newMessage.offsetHeight + newMessageMargin

//     // Visible height
//     const visibleHeight = $messages.offsetHeight

//     // Height of messages container
//     const containerHeight = $messages.scrollHeight

//     // How far have I scrolled?
//     const scrollOffset = $messages.scrollTop + visibleHeight

//     if (containerHeight - newMessageHeight <= scrollOffset) {
//         $messages.scrollTop = $messages.scrollHeight
//     }
// }

// socket.on('message', (message) => {
//     console.log(message)
//     const html = Mustache.render(messageTemplate, {
//         username: message.username,
//         message: message.text,
//         createdAt: moment(message.createdAt).format('h:mm a')
//     })
//     $messages.insertAdjacentHTML('beforeend', html)
//     autoscroll()
// })

// socket.on('locationMessage', (message) => {
//     console.log(message)
//     const html = Mustache.render(locationMessageTemplate, {
//         username: message.username,
//         url: message.url,
//         createdAt: moment(message.createdAt).format('h:mm a')
//     })
//     $messages.insertAdjacentHTML('beforeend', html)
//     autoscroll()
// })

// socket.on('roomData', ({ room, users }) => {
//     const html = Mustache.render(userbarTemplate, {
//         room,
//         users
//     })
//     document.querySelector('#userbar').innerHTML = html
// })

// $messageForm.addEventListener('submit', (e) => {
//     e.preventDefault()

//     $messageFormButton.setAttribute('disabled', 'disabled')

//     const message = e.target.elements.message.value

//     socket.emit('sendMessage', message, (error) => {
//         $messageFormButton.removeAttribute('disabled')
//         $messageFormInput.value = ''
//         $messageFormInput.focus()

//         if (error) {
//             return console.log(error)
//         }

//         console.log('Message delivered!')
//     })
// })

// $sendLocationButton.addEventListener('click', () => {
//     if (!navigator.geolocation) {
//         return alert('Geolocation is not supported by your browser.')
//     }

//     $sendLocationButton.setAttribute('disabled', 'disabled')

//     navigator.geolocation.getCurrentPosition((position) => {
//         socket.emit('sendLocation', {
//             latitude: position.coords.latitude,
//             longitude: position.coords.longitude
//         }, () => {
//             $sendLocationButton.removeAttribute('disabled')
//             console.log('Location shared!')  
//         })
//     })
// })

// socket.emit('join', { username, room }, (error) => {
//     if (error) {
//         alert(error)
//         Location.href = '/'
//     }
// })

    const classes = useStyles()
    const handleSubmit1 = e => {
        e.preventDefault()
        handleShut()
    }
    
    return(
            <div className={classes.root} onSubmit={handleSubmit1}>
                <div className="tr pb2">
                    <small onClick={handleShut} className="icon-close f3 hover-red"></small>
                </div>
                <script id="userbar" className="pb2" type="text/html">
                <div id="userbar-template" className="tj flex flex-wrap">
                    <Link to={"/Assets/Vendor/Profile"} className="link black">
                        <img src={img} alt="Accessories..." className="br-100" width="50px" height="50px" />
                        </Link>
                        <span className="pa2 fw5 f5">
                            <Link to={"/Assets/Vendor/Profile"} className="link black">
                                Mary Jane
                                {/* {{username}} */}
                            </Link>
                            <p className="f6 pa2 code fw3">12min ago</p>
                        </span>
                    </div>
                </script>
                <div id="messages">
                <div id="myUL" style={{ overflowY: 'auto', height: '350px'}} className="pa3 pv3 tj">
                    <div id="hide" style={{ display: 'contents'}}>
                        <MessageBlank />
                    </div>
                                        <script id="message-template" className="pv2" type="text/html">
                                            <div>
                                                <div className="">
                                                    <span>
                                                        <img src={img} alt="avatar" className="br-100" width="50px" height="50px" />
                                                        </span>
                                                    </div>
                                            </div>
                                            <div className="pv1">
                                                <div className="tj pb3 bg-light-blue pa3 br4">
                                                    But I must explain to you how all this mistaken
                                                    idea of denouncing pleasure and praising pain was born and I will
                                                    give you a complete account of the system.
                                                    {/* {{message}} */}
                                                </div>
                                                <small class="opacity-6 pv2 tc f7 code">
                                                    <i class="pr2"></i>
                                                    11:01 AM | Yesterday
                                                    {/* {{createdAt}} */}
                                                </small>
                                            </div>
                                        </script>   
                                    <script id="location-template" class="chat-wrapper" type="text/html">
                                    <div className="tr pv2">
                                        <a href="{{url}}" rel="noreferrer" target="_blank" className="pv2 hover-orange tr blue code pointer pv3 link tr pb3 w-100 pa3 br">
                                            My current location
                                        </a>
                                    </div>
                                        <div className="tr">
                                                <small class="opacity-6 pv2 f7 code">
                                                    <i class="pr2 black"></i>
                                                    11:01 AM | Yesterday
                                                    {/* {{createdAt}} */}
                                                </small>
                                                </div>
                                    </script>
                                    <script id="media-template" type="text/html">
                                        <div id="media-template" className="pv2 tr">
                                                    <img src={img1} alt="avatar" className="br4" width="200px" height="200px" />
                                            </div>
                                            <div className="tr">
                                                    <small class="opacity-6 pv2 f7 code">
                                                    11:01 AM | Yesterday
                                                    {/* {{createdAt}} */}
                                                    </small>
                                                    </div>
                                    </script>
                                  <script type="text/html">
                                    <div className="">
                                        <span>
                                            <img src={img} alt="avatar" className="br-100" width="50px" height="50px" />
                                        </span>
                                    </div>
                                            <div className="pa2">
                                                <img src={img2} alt="avatar" className="br4" width="200px" height="200px" />
                                            </div>
                                            <div className="tl">
                                                    <small class="opacity-6 pb2 f7 code">
                                                        <i class="pr2"></i>
                                                        11:01 AM | Yesterday
                                                        {/* {{createdAt}} */}
                                                    </small>
                                                    </div>
                                                    
                                            </script>
                                    </div>
                                    </div>
                            <div className="pa2 tc">
                                <span id="message-form" className="pv2">
                                <input name="message" id="message-input" type="text" className="pa3 ba br-pill w-70" placeholder="Type your message..." required autoComplete="off"/>
                                <small id="send-message" className="icon-paper-plane pointer blue f3 pa2"></small>
                                <small className="icon-heart red pointer f3 pa2"></small>
                                <small type="file" title="send media file" className="icon-camera pointer f3 pa2"></small>
                                <small id="send-location" type="file" title="send location" className="icon-location-pin pointer f3 blue"></small>
                                </span>
                            </div>
            </div>
    )
}

export default Message;