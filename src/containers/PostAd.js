import React from "react";
import 'tachyons';
import { useState, useEffect } from "react";
import Dialog from "../containers/Dialog";

const PostAd = ({text, file}) => {

    const token = localStorage.getItem("token")
    
    const feed = async () => {
        const feed = {
            text: document.querySelector('.text').value,
            media: document.querySelector('.media').value,
        }

        await fetch("https://shopbeta-app.herokuapp.com/feed", {
            method: "POST",
            headers: {
                'Authorization' : 'Bearer ' + token,
                'Accept' : 'application/json, text/plain',
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(feed)
        })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => {
            console.log(err.message)
        })
    }

    const [open, setOpen] = useState(false)

    const handClick = () => {
        setOpen(false)
    }
    
    const handClickShow = () => {
        setOpen(true)
    }

    const handleSubmit = e => {
        e.preventDefault()
        feed()
    }

    return(
        <div className="pl5 ph6">
            <Dialog open={open} handClick={handClick} />
                <div className="pv2">
                    <form onSubmit={handleSubmit} className="tl br3 pa3 ma2">
                        <p className="pv1 orange fw6 code tc f4">
                            Post an Ad
                        </p>
                        <p className="pv2 fw5">
                            <small className="f5 code tc fw6 ph2">Video or Image</small>
                                <div className="pv2 pa2 br3 tc bg ba">
                                    <input type="file" value={file} name="media" className="media pa3 w-100"/>
                                </div>
                        </p>
                            <p className="pv2 fw5">
                                <small className="ph2 code fw6 f5">Text</small>
                                <p className="pv2">
                                    <textarea id="myInput" name="text" value={text} className="text pa2 br3 ba w-100 h3" placeholder="What's on your mind?" aria-label="With textarea" required></textarea>
                                </p>
                            </p>
                            <div onClick={handClickShow} className="tc">
                                <button type="submit" className="pa3 w-50 br-pill ba grow mars hover-bg-mid-gray">
                                    <small className="fw7 white code f5">Post Ad</small>
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