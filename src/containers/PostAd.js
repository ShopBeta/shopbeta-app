import React from "react";
import 'tachyons';
import { useState, useEffect } from "react";
import Dialog from "../containers/Dialog";

const PostAd = ({text, file}) => {

    const token = localStorage.getItem("token")
        
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

    const [open, setOpen] = useState(false)

    const handClick = () => {
        setOpen(false)
    }
    
    const handClickShow = () => {
        setOpen(true)
    }

    const handleShut = () => {
        setOpen(false)
    }

    const handleSubmit = e => {
        e.preventDefault()
    }

    return(
        <div style={{width: '460px'}} className="">
            <Dialog open={open} handClick={handClick} />
                <div className="tr w-100 pa2 pb2">
                    <small onClick={handleShut} className="icon-close pointer f3 hover-red"></small>
                </div>
                <div className="pv2">
                    <form action={`https://shopbeta-app.herokuapp.com/feed/${user._id}`} method="post" encType="multipart/form-data" className="tl br3 pa3 ma2">
                        <p className="pv1 fw6 code tc f4">
                            Post an Ad
                        </p>
                        <p className="fw5">
                            <small className="f5 code tc fw6 ph2">Video or Image</small>
                                <div className="pv2 pa2 br3 tc bg ba">
                                    <input type="file" value={file} name="media" className="media pa3 w-100"/>
                                </div>
                        </p>
                            <p className="pv2 fw5">
                                <small className="ph2 code fw6 f5">Text</small>
                                <p className="pv2">
                                    <textarea id="myInput" name="text" value={text} className="text pa2 br3 ba w-100 h4" placeholder="What's on your mind?" aria-label="With textarea" required></textarea>
                                </p>
                            </p>
                            <div onClick={handClickShow} className="tc">
                                <button type="submit" className="pa3 w-50 pointer br-pill ba grow bg-transparent orange hover-bg-mid-gray">
                                    <small className="fw7 code f5">Post Ad</small>
                                </button>
                            </div>
                        </form>
                    </div>
                <div>
            </div>
        </div>
    )
}

export default PostAd;