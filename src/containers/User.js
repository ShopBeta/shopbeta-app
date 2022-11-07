import React from "react";
import { useState, useEffect } from "react";
import 'tachyons';
import img from '../images/avatar3.png';
import { SuggCard2, SuggCard3, SuggCard4 } from "../components/SuggCard";
import CardList from "./CardList";
import { Link } from "react-router-dom";
import MessageModal from "./MessageModal";
import Map from "./Map";

const User = ({ handleClose }) => { 
    
    const token = localStorage.getItem("token")
    console.log(token)
    const pathname = window.location.pathname.split('/')
    const path = pathname[1]
    console.log(path)
  
    const [user, setUser] = useState({})
    useEffect(() => {
        fetch(`https://shopbeta-app.herokuapp.com/users/${path}`, {
            method: 'GET',
        })
        .then((res) => res.json())
        .then((data) => setUser(data))
        .catch((err) => {
            console.log(err.message)
        })
        
    }, [path])

    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch("https://shopbeta-app.herokuapp.com/products", {
            method: "GET",
            headers: {
                'Authorization' : 'Bearer ' + token,
                'Accept' : 'application/json, text/plain',
                'Content-Type' : 'application/json'
            },
        })
        .then((res) => res.json())
        .then((data) => setProduct(data))
        .catch((err) => {
            console.log(err.message)
        })
    }, [token])

    const [open, setOpen] = useState(false)

    const handleShut= () => {
        setOpen(false)
    }

    const handleShow = () => {
        setOpen(true)
    }

    const followClick = async event => {
        event.currentTarget.innerHTML = 'following';

        const userDetails = {
            user,
        }

        await fetch(`https://shopbeta-app.herokuapp.com/user/${user._id}/follow`, {
            method: 'POST',
            headers: {
                'Authorization' : 'Bearer ' + token,
                'Accept' : 'application/json, text/plain',
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(userDetails)
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch((err) => {
            console.log(err.message)
        })
    }

    const unfollowClick = async event => {
        event.currentTarget.style.color = 'orange';
        event.currentTarget.style.fontWeight = 'bold';

        const userDetails = {
            user,
         }

        await fetch(`https://shopbeta-app.herokuapp.com/user/${user._id}/unfollow`, {
            method: 'POST',
            headers: {
                'Authorization' : 'Bearer ' + token,
                'Accept' : 'application/json, text/plain',
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(userDetails)
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch((err) => {
            console.log(err.message)
        })
    }

    const heartClick = async event => {
        event.currentTarget.style.color = 'orange';
        event.currentTarget.style.fontWeight = 'bold';

        const count = {
            hearts: user.hearts + 1
        }

        await fetch(`https://shopbeta-app.herokuapp.com/users/${user._id}/hearts`, {
            method: 'POST',
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

    return (
            <div>
                <MessageModal handleShow={open} handleShut={handleShut} />
                <div className="tr pv2 pb2">
                    <small onClick={handleClose} className="icon-close pa3 f3 hover-red"></small>
                </div>
                <div style={{ overflowY: 'scroll', height: '450px'}} className="dib pv3 w-100 pa2">
                <div className="tc b--black br3 pa2">
                        <div className="br4 tj flex flex-wrap">
                            <span>
                                <img src={img} alt="avatar" className="br-100 b--white" width="220px" height="220px"></img>
                            </span>
                            <span className="pa4">
                            <h5 className="f3 fw5">
                                {user.username}
                                </h5>
                            <p className="pv2 f6 fw5">
                                <small className="icon-location-pin pr2"></small>
                                FTC, Abuja, Nigeria
                                {user.location}.
                            </p>
                            <p className="f3 orange">
                                {user.followers}
                                {/* {user.followers.length} */}
                                <small className="ph2">followers</small>
                            </p>
                            <p className="pv3 f5">
                                <p className="tj">
                                    <small className="icon-check f5 yellow pr2"></small>
                                    Recommended by the ShopBeta team
                                </p>
                            </p>
                            <p className="pv1 fw5 f5">
                                <p>
                                <small className="icon-phone pr2"></small>
                                    +234{user.phonenumber}
                                </p>
                                <p>
                                <small className="icon-envelope pr2"></small>
                                    {user.email}
                                </p>
                                <p>
                                    <small className="icon-globe pr2"></small>
                                    <a href={user.website} target={user.website} className="link">
                                        {user.website}
                                    </a>
                                </p>
                            </p>
                        </span>
                    </div>
                   <div className="pv1">
                   <p className="pv3 f5">
                        <p className="tc ph5"> 
                            {user.bio}
                        </p>
                    </p>
                    <span className="b">
                            <button onClick={handleShow} className="bg-transparent f6 ba hover-bg-mid-gray pointer pa2 tc br-pill ph5 ma1 grow b fw6">Message</button>
                        </span>
                        <span className="b">
                            <button onClick={followClick} className="bg-transparent f6 pointer ba hover-bg-mid-gray pa2 tc br-pill ph5 ma1 grow b fw6">Follow</button>
                        </span>
                        <span className="b">
                            <small onClick={heartClick} title="Recommend" className="icon-heart fw5 pointer hover-bg-light-blue br3 f4 pa2 ph3 grow fw5"><small className="ph2 code">{user.hearts}</small></small>
                        </span>
                        <span className="b">
                            <small onClick={unfollowClick} title="Unfollow" className="icon-user-unfollow pointer fw5 hover-bg-light-blue br3 f4 pa2 ph3 grow fw5"></small>
                        </span>
                        <span className="b">
                            <Link to={"../Assets/Adbillboard"} className="link black">
                                <small title="Share" className="icon-share fw5 hover-bg-light-blue br3 f4 pa2 ph3 grow fw5"></small>
                            </Link>
                        </span>
                   </div>
                </div>
                <div className="tc">
                    <SuggCard4/>
                    <SuggCard2 />
                    <SuggCard3 />
                </div>
                <div className="tc">
                    <p className="fw6 f4 ">check out the best rated from <small className="code ph2 f4">
                        {user.username}
                        </small></p>
                    <CardList product={product} />
                </div>
                </div>
                <p className="pa3 f4">
                    <span className="orange fw6 bg-light-blue pa2 br4 ph2 code">{user.username}</span> is located at <span className="orange">{user.location}</span>
                </p>
        </div>
    )
}

export default User;