import React from "react";
// import { useState } from "react";
import { Link } from "react-router-dom";
import img from '../images/2.jpg';

const FollowCard = ({ id, username, location, hearts }) => {

    // const [data, setData ] = useState({})
    const token = localStorage.getItem("token")

    const buttonClick = async event => {
            event.currentTarget.innerHTML = 'following';
            
            await fetch(`https://shopbeta-app.herokuapp.com/user/${id}/follow`, {
                method: 'POST',
            })
            .then((res) => res.json())
            .then((data) => console.log(data))
            .catch((err) => {
                console.log(err.message)
            })
    }

    const heartClick = async event => {
        event.currentTarget.style.color = 'orange';
        event.currentTarget.style.fontWeight = 'bold';

        const count = {
            hearts: {hearts} + 1
        }

        await fetch(`http://localhost:3000/users/${id}/hearts`, {
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

        return(
            <div className="dib">
                <div className="flex flex-wrap tl br3 pa3 bw2 shadow-4 bg-white b--black ma2 pa2">
                    <form >
                        <div className="tj flex flex-wrap">
                            <Link to={"/Assets/Vendor/Profile"} className="link black">
                                <img src={img} alt="Accessories..." className="br-100" width="50px" height="50px" />
                            </Link>
                            <span className="pa2 fw5 f5">
                                <Link to={"/Assets/Vendor/Profile"} className="link black">{username}</Link>
                                <p className="f6 pa2 code fw3">{location}<small className="icon-globe ph2"></small></p>
                            </span>
                            <span>
                                <small onClick={heartClick} className="icon-heart pointer ph4 f4 tc"></small>
                                    <button type="submit" onClick={buttonClick} className="bg-transparent pointer b--black-10 hover-bg-mid-gray pa1 tc br-pill ph4 ma3 grow f6 b fw6">
                                    <small>Follow</small>
                                </button>
                            </span>
                        </div>   
                    </form>
            </div>
        </div>
    )
}

export default FollowCard;