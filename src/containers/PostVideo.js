import React from "react";
import 'tachyons';
// import img from '../images/tst-image3.jpg'

const PostVideo = ({ text, file, }) => {

    const me = localStorage.getItem("meId")
    console.log(me)
    
    const fileInput = () => {
        document.querySelector('#file-upload').onchange = function() {
            document.querySelector('#file-name').textContent = this.files[0].name
        }
    }

    const handClick = (event) => {
        event.currentTarget.innerHTML = 'Posting...';
        event.currentTarget.style.fontWeight = 'bold';
    }

    return(
            <div className="pv5 tc w-100">
                <p className="">
                    <img src={`https://shopbeta-api.onrender.com/users/${me}/avatar`} alt="avatar" className="br-100 ph2" width="60px" height="60px" />
                </p>
                <div style={{width: '360px'}} className="dib">
                    <form action={`https://shopbeta-api.onrender.com/video/${me}`} method="post" encType="multipart/form-data" className="tl br3 pa3 ma2">
                        <p className="fw5">
                            <small className="f5 tc fw6 ph2">Choose video</small>
                                <div className="pv2 pa2 br3 tc bg">
                                    <label>
                                        <small className="icon-camera hover-mid-gay f3 orange pointer"></small><br/>
                                        <small id="file-name" className="hover-mid-gay f5 fw5 orange pointer">Select Video</small>
                                        <input style={{display: 'none'}} onClick={fileInput} id="file-upload" type="file" value={file} name="video" className="video pointer pa3 w-100" />
                                    </label>
                                </div>
                        </p>
                            <p className="pv2 fw5">
                                <small className="ph2 fw6 f5">Write something</small>
                                <p className="pv2">
                                    <textarea id="myInput" name="text" value={text} className="text pa2 br3 ba w-100 h4" placeholder="What's on your mind?" aria-label="With textarea" required></textarea>
                                </p>
                            </p>
                            <p className="fw5 orange tl"><small className="icon-globe f5 ph2"></small>Worldwide ShopBeta</p>
                            <div className="pv2">
                                <div className="pa2 pv1 tj f6">
                                    <h3 className="pv1">
                                        <small className="icon-info pr2 f5 blue"></small>
                                        Some tips
                                    </h3>
                                    <div className="pa2 mid-gray fw6">
                                        <p>Give much details and description about your product or service</p>
                                        <p className="pv2">Ensure to upload a high quality video</p>
                                        <p className="pv2">Video file size shouldn't exceed 50MB</p>
                                    </div>
                                </div>
                            </div>
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