import React from "react";
import 'tachyons';
import { useState } from "react";
import Dialog from "../containers/Dialog";

const PostAd = ({text, file}) => {

    const me = localStorage.getItem("meId")
    console.log(me)

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

    return(
        <div style={{width: '300px'}} className="">
            <Dialog open={open} handClick={handClick} />
                <div className="tr w-100 pa2 pb2">
                    <small onClick={handleShut} className="icon-close pointer f3 hover-red"></small>
                </div>
                <div className="pv2">
                    <form action={`https://shopbeta-api.onrender.com/feed/${me}`} method="post" encType="multipart/form-data" className="tl br3 pa3 ma2">
                        <p className="pv1 fw6 tc f4">
                            Post an Ad
                        </p>
                        <p className="fw5">
                            <small className="f5 tc fw6 ph2">Image</small>
                                <div className="pv2 pa2 br3 tc bg">
                                    <input type="file" value={file} name="media" className="media pa3 w-100"/>
                                </div>
                        </p>
                            <p className="pv2 fw5">
                                <small className="ph2 fw6 f5">Text</small>
                                <p className="pv2">
                                    <textarea id="myInput" name="text" value={text} className="text pa2 br3 ba w-100 h4" placeholder="What's on your mind?" aria-label="With textarea" required></textarea>
                                </p>
                            </p>
                            <div onClick={handClickShow} className="tc">
                                <button type="submit" className="pa3 w-50 pointer br-pill ba grow index-button hover-bg-mid-gray">
                                    <small className="fw7 f5">Post Ad</small>
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