import React from "react";
import 'tachyons'
import '../Home.css'
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Preloader from "../../components/Preloader";


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
                <div className="pa2">
                <Preloader />
                    <div className="">
                        <div className="pa2">
                            <h3 className="code fw5 f2 pa3">
                                <span className=" orange">Welcome Back </span>
                                <span className="f3 black ph3">{user.username}</span>
                            </h3>
                            <div className="">
                        <div style={{ overflowY: 'scroll', height: '220px'}} className="br4">
                        <div className="tc b--black br3 f3 pa3">
                            <span className="pa4">
                            <h5 className="f3 fw5">
                                {user.username}
                                </h5>
                            <p className="pv2 f6 fw5">
                                <small className="icon-location-pin pr2"></small>
                                {user.location}.
                            </p>
                            <p className="pv1 fw5 f5">
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
                        </span>
                    </div>
                </div>
                <form action={`https://shopbeta-app.herokuapp.com/users/${user._id}/avatar`} method="post" encType="multipart/form-data" className="tl br3 pa3 ma2">
                        <p className="pv1 orange fw6 code tc f4">
                            {/* Upload Profile photo */}
                        </p>
                        <p className="pv2 fw5">
                            <small className="f5 code tc fw6 ph2">Upload Profile photo</small>
                                <div className="pv2 pa2 br3 tc ba">
                                    <input type="file" name="avatar" className="avatar pa2 w-100"/>
                                </div>
                        </p>
                            <div className="tc">
                                <button type="submit" className="bg-transparent f6 pointer ba hover-bg-mid-gray pa2 tc br-pill ph5 ma1 grow b fw6">Upload</button>
                            </div>
                        </form>
                            <div className="pv2 tc">
                                <Link to={"/assets/vendor/Profile"}>
                                    <button className="bg-orange white f6 pointer ba hover-bg-mid-gray pa3 tc br-pill ph5 ma1 grow b fw6">Proceed to Dashboard</button>
                                </Link>
                            </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
        );
}

export default Welcome;