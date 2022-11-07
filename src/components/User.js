import React from "react";
import { useState, useEffect } from "react";
import 'tachyons';
import { SuggCard1, SuggCard2, SuggCard5 } from "./SuggCard";
import CardList from "../containers/CardList";
import { Link } from "react-router-dom";
import MessageModal from "../containers/MessageModal";

const User = () => { 
    
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


    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch("https://shopbeta-app.herokuapp.com/products/me", {
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

    const logout = async () => {
        await fetch("https://shopbeta-app.herokuapp.com/users/logout", {
            method: 'POST',
            headers: {
                'Authorization' : 'Bearer ' + token,
                'Accept' : 'application/json, text/plain',
                'Content-Type' : 'application/json'
            }
        })
        .catch((err) => {
            console.log(err.message)
        })
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
        <div style={{ overflowY: 'scroll', height: '540px'}} className="dib w-100">
            <MessageModal handleShow={open} handleShut={handleShut} />
              <p className="f5 fw6 orange code">
                    Account Profile
                </p>
              <div className="tc b--black br3 pa3">
                    <div className="br4">
                        <img src={`https://shopbeta-app.herokuapp.com/users/${user._id}/avatar`} alt="avatar" className="br-100 b--white" width="320px" height="320px"></img>
                        <div className="tr">
                        <Link to={"/assets/Vendor/Settings"} className="link black"><span title="Edit profile" className="icon-settings f4 ph2 pointer fw5 hover-bg-light-blue br3 pa2 grow"></span></Link>
                        <Link to={"#"} className="link"><span title="Logout" onClick={logout} className="icon-logout ph3 fw5 f4 hover-bg-light-blue br3 pa2 pointer grow"></span></Link>
                        <h5 className="f3 fw5 tc">
                            {user.username}
                            </h5>
                        <p className="tc pa2 f6 fw5">
                            <small className="icon-location-pin pr2"></small>
                            {user.location}
                        </p>
                    </div>
                </div>
            <span className="">
            <div className="pv2">
                <p className="f3 orange">
                    {user.followers}
                    {/* {user.followers.length} */}
                    <small className="ph2">followers</small>
                    <small className="icon-user"></small></p>
                <p className="pv3 f4">
                    <p className="tj">
                        {user.bio}
                    </p>
                </p>
                <p className="pv3 fw5 f4">
                    <p>
                        <small className="icon-phone pr2"></small>
                        {user.phonenumber}
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
            </div>
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
            </span>
            </div>
            <div className="tc">
                <SuggCard1/>
                <SuggCard2 />
                <SuggCard5 />
            </div>
            <div className="tc">
                <p className="fw6 f4 pv3">Best rated from <small className="code ph2 f4">
                    {user.username}
                    </small></p>
                <CardList product={product} />
            </div>
        </div>
    )
}

export default User;