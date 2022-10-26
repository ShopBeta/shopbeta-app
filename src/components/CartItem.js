import React from "react";
import { useState, useEffect } from "react";
import img from '../images/nike.jpg';
import { Typography } from "@material-ui/core";
import { Carousell, Item } from "../containers/ImageCarousel2";
import PurchaseModal from "../containers/PurchaseModal2";

const CartItem = ({ id, name, username, description, currency, price, oldprice, rating }) => {

    const [open, setOpen] = useState(false)

    const handleShut= () => {
        setOpen(false)
    }

    const handleShow = () => {
        setOpen(true)
    }
    const token = localStorage.getItem("token")

    const [user, setUser] = useState({})
    useEffect(() => {
        fetch(`https://shopbeta-app.herokuapp.com/users/${username}`, {
            method: "GET",
            headers: {
                'Accept' : 'application/json, text/plain',
                'Content-Type' : 'application/json'
            },
        })
        .then((res) => res.json())
        .then((data) => setUser(data))
        .catch((err) => {
            console.log(err.message)
        })
    }, [username])

    const deleteClick = async () => {
        await fetch(`https://shopbeta-app.herokuapp.com/cart/${id}`, {
            method: "DELETE",
            headers: {
                'Authorization' : 'Bearer ' + token,
                'Accept' : 'application/json, text/plain',
                'Content-Type' : 'application/json'
            },
        })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => {
                console.log(err.message)
            })
}

    return(
        <div className="pv2">
            <PurchaseModal handleShow={open} handleShut={handleShut} />
                <div className="flex flex-wrap tl">
                    <div className="w-30">
                        <div className="ma4">
                            <div className="flex flex-wrap tl bg-white b--black br3 pa3 ma1 bw2 shadow-5">
                                <Typography>
                                    <div>
                                        <img src={img} alt="shoes" className="br4 pv2" width="310px" height="230px"></img>
                                    </div>
                                    <div className="tl">
                                        <p><b>{name}</b></p>
                                        <p className="code f4">
                                            <small>by {user.username}</small>
                                        </p>
                                    <div>
                                <div className="f4 pt4 code">
                                    <small className="bg-light-blue ph3 f3 pa2 br-pill">{currency}{price}</small> 
                                    <small className="pa2 line-through">{currency}{oldprice}</small>
                                </div>
                                <div className="pv2 tr">
                                    <span className="icon-star"></span>
                                    <span className="icon-star grow"></span>
                                    <span className="icon-star grow"></span>
                                    <span className="icon-star grow"></span>
                                    <span className="icon-star grow"></span>
                                    <span className="pl2 fw6 code f5">{rating}</span>
                                </div>
                                <div className="tc">
                                    <span onClick={() => {window.history.pushState(null, "", id)}} className="monospace ph3">
                                        <button onClick={handleShow} className="pa3 white br-pill ba ph5 grow bg-orange hover-bg-mid-gray fw6">Purchase</button>
                                    </span>
                                    {/* <input type="number" className="pa1 code w3 tc mr3" /> */}
                                    <span onClick={deleteClick} className="pv3"><small title="delete" className="icon-trash f4 ph2 hover-red pa2 hover-bg-light-blue br3 blue grow"></small></span>   
                                </div>
                             </div>
                        </div>
                    </Typography>
                </div>
            </div>
        </div>
            <div className="w-30 tc pv2">
                <Carousell>
                    <Item />
                </Carousell>
            </div>
                <div className="w-40 tl">
                    <div style={{ overflowY: 'auto', height: '500px'}} className="pa4 pv3 tj">
                        <h3 className="pv2 fw5">Description</h3>
                            <p>
                                {description}
                            </p>
                            <div className="pa3 f6">
                                <h3 className="pv2">
                                    <small className="icon-info pr2 f5 blue"></small>
                                        Shop Policy Review
                                </h3>
                                <p style={{lineHeight: "20px", fontSize: "13.5px"}} className="fw5">
                                    No returns allowed on any FINAL SALE items, except for if flaws in products are found in the event
                                    that you are not 100% satisfied with any item you purchase, we accept returns on any item (other than FINAL). This implies that any product shipped or delivered with defects or material. Please contact us at info@shopbetaonline.com to approve your return.
                                    We reserve the right to deny any refund to sender without prior return approval. Only warn out items will be accepted for returns/exchange within 30 days at when item was delivered to you.
                                </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem;