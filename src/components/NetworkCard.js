import React from "react";
import { Link } from "react-router-dom";
import img from '../images/4.jpg'
import { useState } from "react";
import MessageModal from "../containers/MessageModal";

const NetworkCard = ({ id, username, location }) => {

        //declare a new state variable for modal to open
        const [open, setOpen] = useState(false)

        //functon to handle payment modal close
        const handleShut = () => {
           setOpen(false)
       }
    
        //functon to handle payment modal open
       const handleShow = (event) => {
           setOpen(true)
        }

    const token = localStorage.getItem("token")

    const followClick = async event => {
        event.currentTarget.innerHTML = 'following';

        await fetch(`https://shopbeta-app.herokuapp.com/user/${id}/follow`, {
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


    return(
        <div className="flex flex-wrap tl br3 bw2 shadow-4 bg-white b--black ma2 pa2">
            <MessageModal handleShow={open} handleShut={handleShut} />
            <div>
                <div className="tj flex flex-wrap">
                    <Link to={"/Assets/Vendor/Profile"} className="link pa1 black">
                        <img src={img} alt="Accessories..." className="br-100" width="50px" height="50px" />
                    </Link>
                    <span className="pa2 fw5 f5">
                        <Link to={"/Assets/Vendor/Profile"} className="link black">{username}</Link>
                        <p className="f6 pa1 code fw3">{location}<small className="icon-globe ph1"></small></p>
                    </span>
                    <span className="ph3">
                        <button onClick={followClick} className="bg-transparent f6 pointer b--black-10 hover-bg-mid-gray pa1 tc br-pill ph4 ma2 grow b fw6">
                            <small>Follow</small>
                        </button>
                        <button onClick={handleShow} className="bg-transparent pointer ph4 b--black-10 hover-bg-mid-gray pa1 tc br-pill ml3 ph3 ma2 grow b fw6">
                            <small>Message</small>
                        </button>
                    </span>
                </div>   
            </div>
        </div>
    )
}

export default NetworkCard