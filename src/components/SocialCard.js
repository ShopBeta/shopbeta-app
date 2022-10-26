import React from "react";
import { useState, useEffect } from "react";
import 'tachyons';
import { Link } from "react-router-dom";
import img from '../images/space scenery.jpg'
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
       <div className="dtc w-25">
           <MessageModal handleShow={open} handleShut={handleShut} />
            <div className="pr3">
                <div className="br3 pa3 b--black bg-white shadow-5 w-100">
                        <p className="pv2 code orange f4">
                            Social
                        </p>
                        <p className="pv2 fw5">
                            <small>MESSAGES</small>
                            <span className="tr orange f7 code fw7 pl4">new: 5</span>
                        </p>
                        <div className="pv2 w-100" style={{ overflowY: 'auto', height: '400px'}} >
                        <div onClick={handleShow} className="pv1 pointer grow tj flex flex-wrap">
                            <img src={img} alt="Accessories..." className="br-100" width="50px" height="50px" />
                            <span className="pa2 fw5 f5">
                                LandPocl
                                <p className="f7 orange code fw3">online</p>
                            </span>
                            <p onClick={fontWeight} className="pa2 fw7">
                                <small className="icon-check pr2"></small>
                                <small className="ph2 tl">Picking up order soon...</small>
                                <small className="ml3 code b">12:18</small>
                            </p>
                </div>
                <div onClick={handleShow} className="pv1 pointer grow tj flex flex-wrap">
                            <img src={img} alt="Accessories..." className="br-100" width="50px" height="50px" />
                            <span className="pa2 fw5 f5">
                                LandPocl
                                <p className="f7 code fw3">12min ago</p>
                            </span>
                            <p onClick={fontWeight} className="pa2 fw7">
                                <small className="icon-eye pr2"></small>
                                <small className="ph2 tl">Picking up order soon...</small>
                                <small className="ml3 code b">12:18</small>
                            </p>
                </div>
                <div onClick={handleShow} className="pv1 pointer grow tj flex flex-wrap">
                            <img src={img} alt="Accessories..." className="br-100" width="50px" height="50px" />
                            <span className="pa2 fw5 f5">
                                LandPocl
                                <p className="f7 code fw3">12min ago</p>
                            </span>
                            <p onClick={fontWeight} className="pa2 fw7">
                                <small className="icon-eye pr2"></small>
                                <small className="ph2 tl">Picking up order soon...</small>
                                <small className="ml3 code b">12:18</small>
                            </p>
                </div>
                <div onClick={handleShow} className="pv1 pointer grow className tj flex flex-wrap">
                            <img src={img} alt="Accessories..." className="br-100" width="50px" height="50px" />
                            <span className="pa2 fw5 f5">
                                LandPocl
                                <p className="f7 code fw3">12min ago</p>
                            </span>
                            <p onClick={fontWeight} className="pa2 fw7">
                                <small className="icon-eye pr2"></small>
                                <small className="ph2 tl">Picking up order soon...</small>
                                <small className="ml3 code b">12:18</small>
                            </p>
                </div>
                <div onClick={handleShow} className="pv1 pointer grow className tj flex flex-wrap">
                            <img src={img} alt="Accessories..." className="br-100" width="50px" height="50px" />
                            <span className="pa2 fw5 f5">
                                LandPocl
                                <p className="f7 code fw3">12min ago</p>
                            </span>
                            <p onClick={fontWeight} className="pa2 fw7">
                                <small className="icon-eye pr2"></small>
                                <small className="ph2 tl">Picking up order soon...</small>
                                <small className="ml3 code b">12:18</small>
                            </p>
                        </div>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default SocialCard;