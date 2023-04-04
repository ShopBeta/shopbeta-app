import React from "react";
import './Home.css'
import img from '../images/shopbeta logo.png'
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Preloader from "../components/Preloader";
import { ChatRoomList } from "../containers/ChatLists"


const Chats = () => {
    const token = localStorage.getItem("token")
    const me = localStorage.getItem("meId")

    const [rooms, setRooms] = useState([])
    useEffect(() => {
        fetch(`http://localhost:3200/chat/${me}`, {
            method: "GET",
            headers: {
                'Accept' : 'application/json, text/plain',
                'Content-Type' : 'application/json' 
            },
        })
        .then((res) => res.json())
        .then((data) => setRooms(data))
        .catch((err) => {
            console.log(err.message)
        })
    }, [me])

    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch("http://localhost:3200/users", {
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
                <div>
                    <Preloader />
                    <Navbar />

                    <div className="pt6 tc pa1">
                        <span style={{color: 'black', fontSize: '29px', fontWeight: '500', letterSpacing: '-2px'}} className="tl pr4 tj code">Chats</span>
                        <span className="tc">
                            <input style={{backgroundColor: 'white'}} className="pa2 icon-magnifier ph4 code f4 br-pill ba" type="search" placeholder="Search chats...." searchChange={onSearchChange} onChange={onSearchChange}/>
                        </span>
                    </div>
                    <div style={{overflowY: 'auto', height: '770px', width: '370px'}} className="dib tc">
                        <div className="dib tc br3 pa2 w-100 b--black">
                            <div className="pv2 br3 b-black tj flex flex-wrap">
                                <div className="pa2">
                                    <img src={img} alt="Accessories..." className="br-100" width="50px" height="50px" />
                                </div>
                                <div className="">
                                    <div className="pa1 br4">
                                        <p className="orange fw6 code">ShopBeta, Inc</p>
                                        <p className="pt2">Support at shopbeta22@gmail.com</p>
                                    </div>
                                    <small class="opacity-6 pl5 code">
                                        <i class="pl6 icon-location-pin"></i>
                                        <i class="ph2">Abuja, Nigeria.</i>
                                    </small>
                                </div>
                            </div>
                            <ChatRoomList rooms={rooms}  users={filteredChats}  />
                        </div>
                    </div>                
                <div>
            </div>
        </div>
    </div>
    );
}

export default Chats;