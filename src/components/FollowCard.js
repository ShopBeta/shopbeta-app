import React from "react";
// import UsersProfile from "../assets/vendor/UsersProfile";
import { useState } from "react";
import UserModal from "../containers/UserModal";
import img from '../images/space scenery.jpg';

const FollowCard = ({ id, username, avatar, location, hearts, bio, website, phonenumber, email }) => {

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

    const [open, setOpen] = useState(false)

    const handleClose= () => {
        setOpen(false)
    }

    const handleOpen = () => {
        setOpen(true)
    }

        return(
            <div className="dib">
                <UserModal handleOpen={open} handleClose={handleClose} />
                <div className="tl br3 pa3 bw2 shadow-4 bg-white b--black ma2 pa2">
                        <div className="flex flex-wrap">
                            <span onClick={() => {window.history.pushState(null, "", id)}}>
                                <img onClick={handleOpen} src={img} alt="avatar" className="pointer br-100" width="100px" height="100px" />
                            </span>
                            <span onClick={() => {window.history.pushState(null, "", id)}} className="pointer pa2 fw5 f5">
                                <p onClick={handleOpen}>{username}</p>
                                <p className="f6 pa2 code fw3"><small className="icon-location-pin ph2"></small>{location}</p>
                                {/* <p className="f6 pa2 code fw3"><small className="icon-envelope ph2"></small>{email}</p> */}
                                <p className="f6 pa2 code fw3"><small className="icon-phone ph2"></small>{phonenumber}</p>
                            </span>
                        </div>   
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