import React from "react";
import { useState, useEffect } from "react";
import 'tachyons';
import img from '../images/1.jpg'
import img1 from '../images/2.jpg'
import img2 from '../images/3.jpg'
import img3 from '../images/4.jpg'
import img4 from '../images/5.jpg'
import img5 from '../images/6.jpg'
import MessageModal from "../containers/MessageModal";

const SocialCard = () => {

    const [data, setData] = useState({})

    useEffect(() => {
        fetch("https://shopbeta-app.herokuapp.com/users")
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch((err) => {
            console.log(err.message)
            })
    }, [])

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

    const fontWeight = (event) => {
       event.currentTarget.className = "fw5"
    }


    return(
       <div className="dib pt3">
           <MessageModal handleShow={open} handleShut={handleShut} />
            <div className="pr3">
                <div className="br3 pa4 b--black">
                        <p className="pv2 fw5">
                            <div className="pv2 ph2 fw6 tl code orange f4">
                                Social
                            </div>
                            <small>MESSAGES</small>
                            <span className="tr orange f6 code fw7 pl4">new: 5</span>
                        </p>
                        <div className="pv2 w-100" style={{ overflowY: 'auto', height: '400px'}} >
                        <div onClick={handleShow} className="pv3 pointer grow tj flex flex-wrap">
                            <img src={img} alt="Accessories..." className="br-100" width="55px" height="55px" />
                            <span className="pa2 fw5 f4">
                                LandPocl
                                <p className="f7 orange code fw3">online</p>
                            </span>
                           <div>
                                <p onClick={fontWeight} className="pa3 fw7">
                                    <span className="ph3 tl">On my to you place, Picking up order soon...</span>
                                    <p className="tr pv1 icon-check ph2"><small className="ml3 code b">12:18</small></p>
                                </p>
                           </div>
                </div>
                <div onClick={handleShow} className="pv3 pointer grow tj flex flex-wrap">
                            <img src={img1} alt="Accessories..." className="br-100" width="55px" height="55px" />
                            <span className="pa2 fw5 f4">
                                Roan Glitch
                                <p className="f7 code fw3">12min ago</p>
                            </span>
                            <div>
                                <p onClick={fontWeight} className="pa3 fw7">
                                    <span className="ph3 tl">On my to you place, Picking up order soon...</span>
                                    <p className="tr pv1 icon-check ph2"><small className="ml3 code b">12:18</small></p>
                                </p>
                           </div>
                </div>
                <div onClick={handleShow} className="pv3 pointer grow tj flex flex-wrap">
                            <img src={img2} alt="Accessories..." className="br-100" width="55px" height="55px" />
                            <span className="pa2 fw5 f4">
                                Sandly Ales
                                <p className="f7 code fw3">12min ago</p>
                            </span>
                            <div>
                                <p onClick={fontWeight} className="pa3 fw7">
                                    <span className="ph3 tl">On my to you place, Picking up order soon...</span>
                                    <p className="tr pv1 icon-check ph2"><small className="ml3 code b">12:18</small></p>
                                </p>
                           </div>
                </div>
                <div onClick={handleShow} className="pv3 pointer grow className tj flex flex-wrap">
                            <img src={img3} alt="Accessories..." className="br-100" width="55px" height="55px" />
                            <span className="pa2 fw5 f4">
                                Sammy Green
                                <p className="f7 code fw3">12min ago</p>
                            </span>
                            <div>
                                <p onClick={fontWeight} className="pa3 fw7">
                                    <span className="ph3 tl">On my to you place, Picking up order soon...</span>
                                    <p className="tr pv1 icon-check ph2"><small className="ml3 code b">12:18</small></p>
                                </p>
                           </div>
                </div>
                <div onClick={handleShow} className="pv3 pointer grow className tj flex flex-wrap">
                            <img src={img4} alt="Accessories..." className="br-100" width="55px" height="55px" />
                            <span className="pa2 fw5 f4">
                                Michael Jerry
                                <p className="f7 code fw3">12min ago</p>
                            </span>
                            <div>
                                <p onClick={fontWeight} className="pa3 fw7">
                                    <span className="ph3 tl">On my to you place, Picking up order soon...</span>
                                    <p className="tr pv1 icon-check ph2"><small className="ml3 code b">12:18</small></p>
                                </p>
                           </div>
                        </div>
                        <div onClick={handleShow} className="pv3 pointer grow className tj flex flex-wrap">
                            <img src={img5} alt="Accessories..." className="br-100" width="55px" height="55px" />
                            <span className="pa2 fw5 f4">
                                Shop Suzzy
                                <p className="f7 code fw3">12min ago</p>
                            </span>
                            <div>
                                <p onClick={fontWeight} className="pa3 fw7">
                                    <span className="ph3 tl">On my to you place, Picking up order soon...</span>
                                    <p className="tr pv1 icon-check ph2"><small className="ml3 code b">12:18</small></p>
                                </p>
                           </div>
                        </div>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default SocialCard;