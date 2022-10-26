import React from "react";
import 'tachyons'
import '../Home.css'
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import MainCat from '../../components/MainCat';
import Preloader from "../../components/Preloader";
import FollowCardList from "../../containers/FollowCardList";


const Welcome = () => {

        const querystring = window.location.search.substr(1)
        const path = querystring.split('=')
        const main = path[1].split('%') 
        const rest = path[1].split('40')
        const best = rest[1].split('&')
        const email = main[0] +'@'+ best[0]
        const password = path[2]
        console.log(email)
        
        const User = {
            email: email,
            password: password
        }


        fetch("https://shopbeta-app.herokuapp.com/users/login", {
            method: 'POST',
            headers: {
                'Content-type': "application/json",
                'Accept' : 'application/json, text/plain'
            },
            body: JSON.stringify(User)
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            window.localStorage.setItem("token", data.token)
        })
        .catch((err) => {
            console.log(err.message)
        })


    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch("https://shopbeta-app.herokuapp.com/users", {
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

    const token = localStorage.getItem("token")
    console.log(token)
  
    const [user, setUser] = useState({})
    useEffect(() => {
        fetch(`https://shopbeta-app.herokuapp.com/users/me`, {
            method: "GET",
            headers: {
                'Authorization' : 'Bearer ' + token,
                'Accept' : 'application/json, text/plain',
                'Content-Type' : 'application/json'
            },
        })
        .then((res) => res.json())
        .then((data) => setUser(data))
        .catch((err) => {
            console.log(err.message)
        })
    }, [token])

        return(
            <div className="bg-white">
                <div className="home pa2">
                <Preloader />
                    <div className="dt dt--fixed">
                        <div className="pa2">
                            <h3 className="code fw5 f2 pa3">
                                <span className=" orange">Welcome Back </span>
                                <span className="f3 black ph3">{user.username}</span>
                            </h3>
                            <div style={{ overflowY: 'scroll', height: '540px'}}>
                                <MainCat />
                            </div>
                        </div>
                           <div className="sidebar w-30 pr2 dtc">
                                <div style={{ overflowY: 'scroll', height: '220px'}} className="br4">
                                    <div className="tc">
                                    <div className="tc b--black br3 pa3">
                                        <div className="tc">
                                            <h5 className="f3 fw5 tc">
                                                {user.username}
                                                </h5>
                                            <p className="tc pa2 f6 fw5">
                                                {user.location}
                                                <small className="icon-globe ph2"></small></p>
                                        </div>
                                    </div>
                                        <span className="">
                                        <div className="">
                                            <p className="f3 orange">
                                                {user.followers}
                                                {/* {user.followers.length} */}
                                                <small className="ph2">followers</small>
                                                <small className="icon-user"></small></p>
                                            <p className="pv3 f4">
                                                <p className=""><small className="ph2"></small>
                                                    {user.bio}
                                                </p>
                                            </p>
                                            <p className="pv3 fw5 f4">
                                                <p><small className="ph2"></small>
                                                    {user.phonenumber}
                                                </p>
                                                <p><small className="ph2"></small>
                                                    {user.email}
                                                </p>
                                                <p><small className="ph2"></small><a href={user.website} target={user.website} className="link">{user.website}</a></p>
                                            </p>
                                        </div>
                                        </span>
                                        </div>
                                    </div>
                                <div className="tc pa2">
                                    <Link to={"../"} className="black"><button className="bg-orange white pa3 f6 pointer ba hover-bg-mid-gray pa2 tc br-pill ph6 ma1 grow b fw6">Proceed to Dashboard</button>
                                </Link>
                                </div>
                                    <div className="pa2" style={{ overflowY: 'scroll', height: '300px'}}>
                                        <p className="pv2 f4 orange">Follow other social shoppers</p>
                                        <FollowCardList users={users} />
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
        );
}

export default Welcome;