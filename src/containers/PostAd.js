import React from "react";
import { useState } from "react";
import 'tachyons';
import { Link } from "react-router-dom";
import img from '../images/4.jpg'
import MessageModal from "../containers/MessageModal";

const PostAd = () => {

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

   const buttonClick = event => {
    event.currentTarget.innerHTML = 'following';
   } 

    return(
        <div className="dtc w-25 pr2">
            <MessageModal handleShow={open} handleShut={handleShut} />
            <div className="pv2">
            <div className="tl br3 pa3 ma2">
                    <p className="pv1 orange fw6 code tc f4">
                        Post an Ad
                    </p>
                    <p className="pv2 fw5">
                        <span className="f4">
                        </span>
                        <small className="f5 code tc fw6 ph2">Video or Image</small>
                        <div className="pv2 pa2 br3 tc bg ba">
                            <input type="file" className="pa3 w-100"/>
                        </div>
                    </p>
                    <p className="pv2 fw5">
                        <span className="f4">
                        </span>
                        <small className="ph2 code fw6 f5">Text</small>
                        <p className="pv2">
                            <textarea id="myInput" className="pa2 br3 ba w-100 h3" placeholder="What's on your mind?" aria-label="With textarea"></textarea>
                        </p>
                    </p>
                    <div className="tc">
                       <button type="button" className="pa2 w-100 br-pill ba grow mars hover-bg-mid-gray">
                           <small className="fw5 white code f5">Post Ad</small>
                       </button>
                   </div>
                </div>
            </div>
            <div>
            <p className="pv2 fw5 f4 ph4">
                    <small>NETWORK</small>
            </p>
                   <div style={{ overflowY: 'auto', height: '200px'}} className="pa2">
                   <div className="flex flex-wrap tl br3 bw2 shadow-4 bg-white b--black ma2 pa2">
                    <div>
                    <div className="tj flex flex-wrap">
                    <Link to={"/Assets/Vendor/Profile"} className="link pa1 black">
                                <img src={img} alt="Accessories..." className="br-100" width="50px" height="50px" />
                                </Link>
                                <span className="pa2 fw5 f5">
                                <Link to={"/Assets/Vendor/Profile"} className="link black">Mary Jane</Link>
                                    <p className="f6 pa1 code fw3">Santiago, CA .<small className="icon-globe ph1"></small></p>
                                </span>
                                <span className="ph3">
                                    <button onClick={buttonClick} className="bg-transparent f6 pointer b--black-10 hover-bg-mid-gray pa1 tc br-pill ph4 ma2 grow b fw6">
                                        <small>Follow</small>
                                    </button>
                                    <button onClick={handleShow} className="bg-transparent pointer ph4 b--black-10 hover-bg-mid-gray pa1 tc br-pill ml3 ph3 ma2 grow b fw6">
                                        <small>Message</small>
                                    </button>
                                </span>
                            </div>   
                        </div>
                    </div>
                    <div className="flex flex-wrap tl br3 bw2 shadow-4 bg-white b--black ma2 pa2">
                    <div>
                    <div className="tj flex flex-wrap">
                    <Link to={"/Assets/Vendor/Profile"} className="link pa1 black">
                                <img src={img} alt="Accessories..." className="br-100" width="50px" height="50px" />
                                </Link>
                                <span className="pa2 fw5 f5">
                                <Link to={"/Assets/Vendor/Profile"} className="link black">Mary Jane</Link>
                                    <p className="f6 pa1 code fw3">Santiago, CA .<small className="icon-globe ph1"></small></p>
                                </span>
                                <span className="ph3">
                                    <button onClick={buttonClick} className="bg-transparent f6 pointer b--black-10 hover-bg-mid-gray pa1 tc br-pill ph4 ma2 grow b fw6">
                                        <small>Follow</small>
                                    </button>
                                    <button onClick={handleShow} className="bg-transparent pointer ph4 b--black-10 hover-bg-mid-gray pa1 tc br-pill ml3 ph3 ma2 grow b fw6">
                                        <small>Message</small>
                                    </button>
                                </span>
                            </div>   
                        </div>
                    </div>
                    <div className="flex flex-wrap tl br3 bw2 shadow-4 bg-white b--black ma2 pa2">
                    <div>
                    <div className="tj flex flex-wrap">
                    <Link to={"/Assets/Vendor/Profile"} className="link pa1 black">
                                <img src={img} alt="Accessories..." className="br-100" width="50px" height="50px" />
                                </Link>
                                <span className="pa2 fw5 f5">
                                <Link to={"/Assets/Vendor/Profile"} className="link black">Mary Jane</Link>
                                    <p className="f6 pa1 code fw3">Santiago, CA .<small className="icon-globe ph1"></small></p>
                                </span>
                                <span className="ph3">
                                    <button onClick={buttonClick} className="bg-transparent f6 pointer b--black-10 hover-bg-mid-gray pa1 tc br-pill ph4 ma2 grow b fw6">
                                        <small>Follow</small>
                                    </button>
                                    <button onClick={handleShow} className="bg-transparent pointer ph4 b--black-10 hover-bg-mid-gray pa1 tc br-pill ml3 ph3 ma2 grow b fw6">
                                        <small>Message</small>
                                    </button>
                                </span>
                            </div>   
                        </div>
                    </div>
                    <div className="flex flex-wrap tl br3 bw2 shadow-4 bg-white b--black ma2 pa2">
                    <div>
                    <div className="tj flex flex-wrap">
                    <Link to={"/Assets/Vendor/Profile"} className="link pa1 black">
                                <img src={img} alt="Accessories..." className="br-100" width="50px" height="50px" />
                                </Link>
                                <span className="pa2 fw5 f5">
                                <Link to={"/Assets/Vendor/Profile"} className="link black">Mary Jane</Link>
                                    <p className="f6 pa1 code fw3">Santiago, CA .<small className="icon-globe ph1"></small></p>
                                </span>
                                <span className="ph3">
                                    <button onClick={buttonClick} className="bg-transparent f6 pointer b--black-10 hover-bg-mid-gray pa1 tc br-pill ph4 ma2 grow b fw6">
                                        <small>Follow</small>
                                    </button>
                                    <button onClick={handleShow} className="bg-transparent pointer ph4 b--black-10 hover-bg-mid-gray pa1 tc br-pill ml3 ph3 ma2 grow b fw6">
                                        <small>Message</small>
                                    </button>
                                </span>
                            </div>   
                        </div>
                    </div>
                    <div className="flex flex-wrap tl br3 bw2 shadow-4 bg-white b--black ma2 pa2">
                    <div>
                    <div className="tj flex flex-wrap">
                    <Link to={"/Assets/Vendor/Profile"} className="link pa1 black">
                                <img src={img} alt="Accessories..." className="br-100" width="50px" height="50px" />
                                </Link>
                                <span className="pa2 fw5 f5">
                                <Link to={"/Assets/Vendor/Profile"} className="link black">Mary Jane</Link>
                                    <p className="f6 pa1 code fw3">Santiago, CA .<small className="icon-globe ph1"></small></p>
                                </span>
                                <span className="ph3">
                                    <button onClick={buttonClick} className="bg-transparent f6 pointer b--black-10 hover-bg-mid-gray pa1 tc br-pill ph4 ma2 grow b fw6">
                                        <small>Follow</small>
                                    </button>
                                    <button onClick={handleShow} className="bg-transparent pointer ph4 b--black-10 hover-bg-mid-gray pa1 tc br-pill ml3 ph3 ma2 grow b fw6">
                                        <small>Message</small>
                                    </button>
                                </span>
                            </div>   
                        </div>
                    </div>
               </div>
            </div>
        </div>
    )
}

export default PostAd;