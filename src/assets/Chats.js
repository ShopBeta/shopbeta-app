import React from "react";
import './Home.css'
import img from '../images/shopbeta logo.png'
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Header from '../components/Header'
import Preloader from "../components/Preloader";
import BlankPage from "./indexes/BlankPage";
import { ChatRoomList } from "../containers/ChatLists"
import { NetworkError } from "./indexes/ErrorPages"


const Chats = () => {
    
    const token = localStorage.getItem("token")
    const me = localStorage.getItem("meId")
    console.log(me)

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
                <div className="tc">
                    <Preloader />
                    <Header />
                    <div>
                        <div className="pt5 tc pa1">
                            <div className="pt3">
                                <span style={{color: 'black', fontSize: '29px', fontWeight: '500', letterSpacing: '-2px'}} className="tl pr2 tj code">Chats</span>
                                <span className="tc">
                                    <input style={{backgroundColor: 'white'}} className="pa2 icon-magnifier ph4 code f4 br-pill ba" type="search" placeholder="Search chats...." searchChange={onSearchChange} onChange={onSearchChange}/>
                                </span>
                            </div>
                        </div>
                        <div className="dib tc">
                            <div className="br3 pa2 w-100 b--black">
                                <div className="pv2 br3 b-black tj flex flex-wrap">
                                    <div className="pa2">
                                        <img src={img} alt="Accessories..." className="br-100" width="50px" height="50px" />
                                    </div>
                                    <div className="">
                                        <div className="pa1 br4">
                                            <p className="orange fw6">ShopBeta Team</p>
                                            <p className="pt2">Contact us at shopbeta22@gmail.com</p>
                                        </div>
                                        <small class="opacity-6 pl5 code">
                                            <i class="pl6 icon-location-pin"></i>
                                            <i class="ph2">Abuja, Nigeria.</i>
                                        </small>
                                    </div>
                                </div>
                                <div id="error" style={{display: 'none'}} className="tc">
                                    <NetworkError />
                                </div>
                                {rooms.length === 0 &&  <div id="blank" className="tc">
                                    <BlankPage />
                                    <div className="tc">
                                        <p className="pv4 fw6 ph5">
                                            <small className="green f4">You don't have any chats yet</small>
                                        </p>
                                    </div>
                                </div>}
                                <ChatRoomList rooms={rooms}  users={filteredChats}  />
                                <p id="load" className="tc code orange fw6 f4">Loading chats...</p>
                            </div>
                        </div>
                    </div> 
                    <Navbar />          
                <div>
            </div>
        </div>
    </div>
    );
}

export default Chats;