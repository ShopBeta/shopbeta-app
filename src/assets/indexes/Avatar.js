import React from "react";
import 'tachyons'
import '../Home.css'
import img from '../../images/shopbeta logo.png'
import img1 from '../../images/avatar6.png'
import { Link } from "react-router-dom";
import Preloader from "../../components/Preloader";


const Avatar = () => {

    const me = localStorage.getItem("meId")
    console.log(me)

        return(
            <div className="bg-white tc">
                <div className="pa2 pv5">
                <Preloader />
                    <div className="tc">
                        <div className="pa2">
                            <div className='tc code' style={{fontSize: '27px', fontWeight: '500'}}><img src={img} alt="logo" className="tc" width="75px" height="75px" /></div>
                            <p className="pv4 fw6 tc ph3">
                                <small className="f4 orange">Upload profile photo<br/></small>
                                <small className="green f5">Take a few seconds to upload a profile photo or avatar.</small>
                            </p>
                            <div className="">
                            <div className='tc code' style={{fontSize: '27px', fontWeight: '500'}}><img src={img1} alt="logo" className="tc br-pill" width="200px" height="200px" /></div>
                                <form action={`https://shopbeta-api.onrender.com/users/${me}/avatar`} method="post" encType="multipart/form-data">
                                    <div className="pv2 tc">
                                        <div className="pv3 pa2 tc">
                                            <small className="icon-camera hover-mid-gay f3 orange pointer"></small>
                                            {/* <input type="file" name="avatar" className="avatar pa2 w-100"/> */}
                                        </div>
                                        <p> 
                                            <Link to={"/assets/vendor/Profile"}>
                                                <button className="index-button pointer ba hover-bg-mid-gray pa3 f4 tc br-pill ph5 ma1 grow b fw6">Upload<small className="icon-cloud-upload f4 pl2"></small></button>
                                            </Link>
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