import React from "react";
import './Home.css'
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Preloader from "../components/Preloader";
import { ChatsBlank } from "./indexes/BlankPage";
import logo from '../images/shopbeta logo.png'
// import img2 from '../images/tst-image3.jpg'
import { ChatRoomList } from "../containers/ChatLists"
import { NetworkError } from "./indexes/ErrorPages"


const Chats = () => {
    
    const token = localStorage.getItem("token")
    const me = localStorage.getItem("meId")
    console.log(me)

    const user = document.getElementById('user')
    me === "" ?  user.style['display'] = 'none' : user.style['display'] = 'contents'

    const [rooms, setRooms] = useState([])
    useEffect(() => {
        fetch(`https://shopbeta-api.onrender.com/chat/${me}`, {
            method: "GET",
            headers: {
                'Accept' : 'application/json, text/plain',
                'Content-Type' : 'application/json' 
            },
        })
        .then((res) => res.json())
        .then((data) => {
            setRooms(data)
            
            const load = document.getElementById('load')
            load.style['display'] = 'none'

            const error = document.getElementById('error')
            error.style['display'] = 'none'
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
    }, [me])

    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch("https://shopbeta-api.onrender.com/users", {
            method: "GET",
            headers: {
                'Accept' : 'application/json, text/plain',
                'Content-Type' : 'application/json'
            },
        })
        .then((res) => res.json())
        .then((data) => setUsers(data))
        .catch((err) => {
            console.log(err.message)
        })
    }, [])

    console.log(rooms)
    console.log(me)
    console.log(token)
    
    const [searchField, setSearchField] = useState("")

    const onSearchChange = e => {
        setSearchField(e.target.value)
    }

    const filteredChats = users.filter(
        users => {
            return (
                users
                .username
                .toLowerCase()
                .includes(searchField.toLowerCase())
            )
        }
    )

        return(
               <div className="tc">
                    <Preloader />
                    <div>
                        <nav className="bg-white fw5 navbar navbar-expand-lg tc pv1" style={{position: 'fixed', width: '100%', borderBottom: '1px thin black'}}>
                            <div style={{fontSize: '29px'}} className="ph2 container">
                                <span className='navbar-brand' style={{fontSize: '12px', fontWeight: '500'}}>
                                    <img src={logo} alt="logo" className="" width="50px" height="50px" />
                                </span>  
                                <span className="navbar-brand">
                                    <h3 className="code">Chats</h3>
                                </span>
                                <span id="user" className="navbar-brand">
                                    <Link to={"../assets/vendor/Profile"} title="profile">
                                        <img src={`https://shopbeta-api.onrender.com/users/${me}/avatar`} alt="user" className="br4 pointer" width="45px" height="45px" />
                                    </Link>
                                </span>
                                {me === '' &&  <span className="navbar-brand">
                                    <Link to={"../assets/indexes/Login"} className="pointer">
                                        <small className="f3 orange hover-blue">Login</small>
                                    </Link>
                                </span>}
                            </div>
                        </nav>
                    </div>
                    <div className="">
                        <div className="pt5 tc pa1">
                            <div className="">
                                <div className="pv3 navbar navbar-expand-lg" style={{position: 'fixed', backgroundColor: '#ffffff', width: '100%', borderBottom: '1px thin black'}}>
                                    <div class="container">
                                        <input type="search" className="form-control navbar-brand pa2 ba br-pill w-100" id="search" placeholder="Search chats..." searchChange={onSearchChange} onChange={onSearchChange} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="dib tc">
                            <div className="pa2 pt5 w-100">
                                <div className="pv2 br3 b-black pointer tj flex flex-wrap">
                                    <div className="pa2">
                                        <img src={logo} alt="avatar" className="br-100" width="50px" height="50px" />
                                    </div>
                                    <div className="grow">
                                        <div className="pa3 br4">
                                            <p className="orange">ShopBeta Support Team</p>
                                            <p className="pt2">contact us at shopbeta22@gmail.com</p>
                                        </div>
                                    </div>
                                </div>
                                <div id="error" style={{display: 'none'}} className="tc">
                                    <NetworkError />
                                </div>
                                {rooms.length === 0 &&  <div id="blank" className="tc">
                                    <ChatsBlank/>
                                </div>}
                                <div className="pv2">
                                    <ChatRoomList rooms={rooms}  users={filteredChats}  />
                                </div>
                                <div id="load" className="tc">
                                    <div className="spinner">
                                        <span className="spinner-rotate">
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                    <Navbar />          
                <div>
            </div>
        </div>
    );
}

export default Chats;