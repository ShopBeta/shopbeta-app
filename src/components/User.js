import React from "react";
import { useState, useEffect } from "react";
import 'tachyons';
import img from '../images/avatar3.png';
import { SuggCard2, SuggCard3, SuggCard4 } from "./SuggCard";
import CardList from "../containers/CardList";
import { users } from "../containers/Users";
import { Link } from "react-router-dom";
import MessageModal from "../containers/MessageModal";

const User = () => { 

    const [data, setData] = useState({})

    const token = localStorage.getItem("token")

    useEffect(() => {
        fetch("http://localhost:3000/users/me", {
            method: "GET",
            headers: {
                'Authorization' : 'Bearer ' + token,
                'Accept' : 'application/json, text/plain',
                'Content-Type' : 'application/json'
            },
        })
        .then((res) => res.json())
        .then((data) => setData(data))
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

    const submit = async () => {
        const user = {
            email: 'ronelmichael14@gmail.com',
            password: '47723532'
        }

        await fetch("http://localhost:3000/users/login", {
            method: 'POST',
            headers: {
            'Content-type': "application/json",
            },
            body: JSON.stringify(user)
    })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => {
        console.log(err.message)
    })
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

        await fetch(`http://localhost:3000/user/${data._id}/follow`, {
            method: 'POST',
            'Authorization' : 'Bearer ' + token,
            'Accept' : 'application/json, text/plain',
            'Content-Type' : 'application/json'
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

        await fetch(`https://shopbeta-app.herokuapp.com/user/${data._id}/unfollow`, {
            method: 'POST',
            'Authorization' : 'Bearer ' + token,
            'Accept' : 'application/json, text/plain',
            'Content-Type' : 'application/json'
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
            hearts: data.hearts + 1
        }

        await fetch(`http://localhost:3000/users/${data._id}/hearts`, {
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
        <div style={{ overflowY: 'scroll', height: '540px'}} className="dib tl w-90">
            <MessageModal handleShow={open} handleShut={handleShut} />
              <p className="f5 fw6 orange code">
                    Account Profile
                </p>
              <div className="tc b--black br3 pa3">
                    <div className="cover br4">
                        <img src={img} alt="avatar" className="br-100 b--white" width="320px" height="320px"></img>
                        <div className="tr">
                        <Link to={"/assets/Vendor/Settings"} className="link white"><span title="Edit profile" className="icon-settings f4 ph2 pointer fw5 hover-bg-light-blue br3 pa2 grow"></span></Link>
                        <Link to={"#"} className="link white"><span title="Logout" onClick={logout} className="icon-logout ph3 fw5 f4 hover-bg-light-blue br3 pa2 pointer grow"></span></Link>
                        <h5 className="f3 code white fw5 tc">
                            {data.username}
                            </h5>
                        <p className="tc pa2 white code f6 fw6">
                            {data.location}
                            <small className="icon-globe ph2"></small></p>
                    </div>
                </div>
            <span className="">
            <div className="pv2 code fw6">
                <p className="f3 fw5 orange code">
                    {data.followers}
                    <small className="icon-user"></small></p>
                <p className="pv3 f4">
                    <p className="fw5"><small className="ph2"></small>
                        {data.bio}
                    </p>
                </p>
                <p className="pv3 f4">
                    <p><small className="ph2"></small>
                        {data.phonenumber}
                    </p>
                    <p><small className="ph2"></small>
                        {data.email}
                    </p>
                    <p><small className="ph2"></small><a href={data.website} target={data.website} className="link">{data.website}</a></p>
                </p>
            </div>
            <span className="b">
                <button onClick={handleShow} className="bg-transparent f6 ba hover-bg-mid-gray pointer pa2 tc br-pill ph5 ma1 grow b fw6">Message</button>
            </span>
            <span className="b">
                <button onClick={followClick} className="bg-transparent f6 pointer ba hover-bg-mid-gray pa2 tc br-pill ph5 ma1 grow b fw6">Follow</button>
            </span>
            <span className="b">
                <small onClick={heartClick} title="Recommend" className="icon-heart fw5 pointer hover-bg-light-blue br3 f4 pa2 ph3 grow fw5"><small className="ph2 code">{data.hearts}</small></small>
            </span>
            <span className="b">
                <small onClick={unfollowClick} title="Unfollow" className="icon-user-unfollow pointer fw5 hover-bg-light-blue br3 f4 pa2 ph3 grow fw5"></small>
            </span>
            <span className="b">
                <Link to={"../Assets/Adbillboard"} className="link black">
                    <small title="Share" className="icon-share fw5 hover-bg-light-blue br3 f4 pa2 ph3 grow fw5"></small>
                </Link>
            </span>
            <span className="b">
                <small onClick={submit} title="Unfollow" className="icon-home pointer fw5 hover-bg-light-blue br3 f4 pa2 ph3 grow fw5"> test</small>
            </span>
            </span>
            </div>
            <div className="tc">
                <SuggCard4/>
                <SuggCard2 />
                <SuggCard3 />
            </div>
            <div className="tc">
                <p className="fw6 f4 pv3">Best rated from <small className="code ph2 f4">
                    {data.username}
                    </small></p>
                <CardList users={users} />
            </div>
        </div>
    )
}

export default User;