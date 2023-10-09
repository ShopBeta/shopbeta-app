import React from "react";
import 'tachyons'
import '../Home.css'
import img from '../../images/shopbeta logo.png'
import Preloader from "../../components/Preloader";


const Avatar = () => {

    const me = localStorage.getItem("meId")
    console.log(me)

    const fileInput = () => {
        document.querySelector('#file-upload').onchange = function() {
            document.querySelector('#file-name').textContent = this.files[0].name
        }
    }

    const handClick = (event) => {
        event.currentTarget.innerHTML = 'Uploading...';
        event.currentTarget.style.fontWeight = 'bold';
    }
        return(
            <div className="bg-white tc">
                <div className="pa2 pv5">
                <Preloader />
                    <div className="tc">
                        <div className="pa2">
                            <div className='tc code' style={{fontSize: '27px', fontWeight: '500'}}><img src={img} alt="logo" className="tc" width="60px" height="60px" /></div>
                            <p className="pv4 fw6 tc ph3">
                                <small className="f4 orange">Upload profile photo<br/></small>
                                <small className="green f5">Take a few seconds to upload a profile photo or avatar.</small>
                            </p>
                            <div className="">
                            <div className='tc code' style={{fontSize: '27px', fontWeight: '500'}}><img src={`https://shopbeta-api.onrender.com/users/${me}/avatar`} alt="avatar" className="tc br-pill" width="200px" height="200px" /></div>
                                <form action={`https://shopbeta-api.onrender.com/users/${me}/avatar`} method="post" encType="multipart/form-data">
                                    <div className="pv2 tc">
                                        <div className="pv3 pa2 tc">
                                            <label>
                                                <small className="icon-camera hover-mid-gay f3 orange pointer"></small><br/>
                                                <small id="file-name" className="hover-mid-gay f5 fw5 orange pointer">Select Image</small>
                                                <input style={{display: 'none'}} onClick={fileInput} id="file-upload" type="file" name="avatar" className="avatar pointer pa2 w-100"/>
                                            </label>
                                        </div>
                                        <p> 
                                            <button onClick={handClick} type="submit" className="index-button pointer ba hover-bg-mid-gray pa3 f4 tc br-pill ph5 ma1 grow b fw6">
                                                Upload<small className="icon-cloud-upload f4 pl2"></small>
                                            </button>
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                 </div>
            </div>
    );
}

export default Avatar;