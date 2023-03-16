import React from "react";
import { Link } from "react-router-dom";


const FollowCard = ({ id, username, avatar, location, hearts, bio, website, phonenumber, email }) => {

    const token = localStorage.getItem("token")
    const me = localStorage.getItem("meId")
    console.log(me)

    const buttonClick = async event => {
            event.currentTarget.innerHTML = 'following';
            
            await fetch(`https://shopbeta-app.herokuapp.com/user/${id}/follow/${me}`, {
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
            hearts: hearts + 1
        }

        await fetch(`https://shopbeta-app.herokuapp.com/users/${id}/hearts`, {
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
                <div className="tl br3 pa3 bw2 shadow-4 bg-white b--black ma2 pa2">
                    <Link className="link black" to={"/assets/vendor/User"}>
                        <div onClick={() => {window.localStorage.setItem("userId", id)}} className="flex flex-wrap">
                            <span>
                                <img src={`https://shopbeta-app.herokuapp.com/users/${id}/avatar`} alt="avatar" className="pointer br-100" width="100px" height="100px" />
                            </span>
                            <span className="pointer pa2 fw5 f5">
                                <p>{username}</p>
                                <p className="f6 pa2 code fw3"><small className="icon-location-pin ph2"></small>{location}</p>
                                <p className="f6 pa2 code fw3"><small className="icon-phone ph2"></small>{phonenumber}</p>
                            </span>
                        </div>
                    </Link>   
                        <div className="tc">
                             <small onClick={heartClick} className="icon-heart pointer ph4 f4"></small>
                             <button onClick={buttonClick} className="bg-transparent pointer b--black-10 hover-bg-mid-gray pa1 tc br-pill ph6 pa2 ma3 grow f6 b fw6">
                                <small>Follow</small>
                             </button>
                        </div>    
            </div>
        </div>
    )
}

export default FollowCard;