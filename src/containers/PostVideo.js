import React from "react";
import 'tachyons';

const PostVideo = ({text, file, handleShut}) => {

    const me = localStorage.getItem("meId")
    console.log(me)

    const handClick = (event) => {
        event.currentTarget.innerHTML = 'Posting...';
        event.currentTarget.style.fontWeight = 'bold';
    }

    return(
            <div style={{width: '300px'}} className="">
                <div className="tr w-100 pa2 pb2">
                    <small onClick={handleShut} className="icon-close pointer f3 hover-red"></small>
                </div>
                <p className="pv1 fw6 tc f4">
                    Post a Video
                </p>
                <div className="pv2">
                    <form action={`https://shopbeta-api.onrender.com/video/${me}`} method="post" encType="multipart/form-data" className="tl br3 pa3 ma2">
                        <p className="fw5">
                            <small className="f5 tc fw6 ph2">Video</small>
                                <div className="pv2 pa2 br3 tc bg">
                                    <label>
                                        <small className="icon-camera hover-mid-gay f3 orange pointer"></small><br/>
                                        <small className="hover-mid-gay f5 fw5 orange pointer">Select Video</small>
                                        <input style={{display: 'none'}} type="file" value={file} name="video" className="video pointer pa3 w-100" id="customFile" />
                                    </label>
                                </div>
                        </p>
                            <p className="pv2 fw5">
                                <small className="ph2 fw6 f5">Text</small>
                                <p className="pv2">
                                    <textarea id="myInput" name="text" value={text} className="text pa2 br3 ba w-100 h4" placeholder="What's on your mind?" aria-label="With textarea" required></textarea>
                                </p>
                            </p>
                            <div className="tc">
                                <button onClick={handClick} variant="contained" type="submit" className="pa3 w-50 pointer br-pill ba grow index-button hover-bg-mid-gray">
                                    <small className="fw7 code f5">Post Video</small>
                                </button>
                            </div>
                        </form>
                    </div>
                <div>
            </div>
        </div>
    )
}

export default PostVideo;