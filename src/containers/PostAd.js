import React from "react";
import 'tachyons';
import NetworkCardList from "./NetworkCardList";
import { users } from "./Users";

const PostAd = ({text, file}) => {

    const token = localStorage.getItem("token")
    
    const feed = async () => {
        const feed = {
            text: document.querySelector('.text').value,
            media: document.querySelector('.media').value,
        }

        await fetch("http://localhost:3000/feed", {
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

    const handleSubmit = e => {
        e.preventDefault()
        feed()
    }

    return(
        <div className="dtc w-25 pr2">
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
                            <div className="tc">
                                <button type="submit" className="pa2 w-100 br-pill ba grow mars hover-bg-mid-gray">
                                    <small className="fw5 white code f5">Post Ad</small>
                                </button>
                            </div>
                    </form>
                </div>
            <div>
            <p className="pv2 fw5 f4 ph4">
                <small>NETWORK</small>
            </p>
                <div style={{ overflowY: 'auto', height: '200px'}} className="pa2">
                  <NetworkCardList users={users} />
               </div>
            </div>
        </div>
    )
}

export default PostAd;