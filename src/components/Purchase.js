import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
// import img from '../images/tst-image3.jpg'
import 'tachyons';

const Purchase = () => {

    const token = localStorage.getItem("token")
    const productId = localStorage.getItem("productId")
   
    const [product, setProduct] = useState({})
    useEffect(() => {
        fetch(`https://shopbeta-api.onrender.com/products/${productId}`, {
            method: "GET",
            headers: {
                'Authorization' : 'Bearer ' + token,
                'Accept' : 'application/json, text/plain',
                'Content-Type' : 'application/json'
            },
        })
        .then((res) => res.json())
        .then((data) => setProduct(data))
        .catch((err) => {
            console.log(err.message)
        })
    }, [productId, token])

    const [user, setUser] = useState({})
    useEffect(() => {
        fetch(`https://shopbeta-api.onrender.com/users/${product.owner}`, {
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
    }, [product.owner])

    return(
            <div className="tc w-100 pv2">
                <div style={{width: '360px'}} className="dib pa3">
                <div className="">
                    <div className="tl f4">
                        <p>
                            <b>{product.name}</b>
                        </p>
                    </div>
                </div>
                <div className="pv3 tj">
                    <div>
                        <div className="tl pv2">
                            <p className="fw5 f5">Check to see if product is available</p>
                        </div>
                        <div className="pv2 pa2">
                            <div className="br4 b--yellow ba pa2 mars white">
                                <small className="icon-bubbles f4 pr2"></small>Message Seller
                                <div className="tc f4">
                                    <p className=""><img src={`https://shopbeta-api.onrender.com/users/${product.owner}/avatar`} alt="avatar" className="br-100 ph2" width="60px" height="60px" /></p>
                                    <p className="fw6"><small>{user.username} Ronel Michael</small></p>
                                </div>
                            </div>
                        </div>
                        <div className="pv2 pa2">
                            <div className="pv2 br4 pa2 mercury white">
                                <p className="f4">
                                    <p className="tr f4"><small className="icon-check b grow hover-red"></small></p>
                                    <small className="icon-phone pr2 f4"></small>
                                    {user.phonenumber}
                                    <p className="tr fw6"><small>Phone number</small></p>
                                </p>
                            </div>
                        </div>
                        <div className="pv2">
                            <div className="pa2 f6">
                                <h3 className="pv1">
                                    <small className="icon-info pr2 f5 blue"></small>
                                    Disclaimer
                                </h3>
                                <div className="lh3 f5 fw6 pa2">
                                    <p style={{lineHeight: "20px", fontSize: "13.5px"}} className="fw6">
                                        No returns allowed on any FINAL SALE items, except for if flaws in products are found in the event
                                        that you are not 100% satisfied with any item you purchase, we accept returns on any item (other than FINAL). This implies that any product shipped or delivered with defects or material. Please contact us at info@shopbetaonline.com to approve your return.
                                        We reserve the right to deny any refund to sender without prior return approval. Only warn out items will be accepted for returns/exchange within 30 days at when item was delivered to you.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="f4 tl pv2">
                    <span className="bg-light-blue ph3 f3 code pa2 br-pill">{product.currency}{product.price}</span> 
                    <span className="pa2 code line-through">{product.currency}{product.oldprice}</span>
                </div>
                <div className="pv2 tr">
                    <span className="icon-star"></span>
                    <span className="icon-star grow"></span>
                    <span className="icon-star grow"></span>
                    <span className="icon-star grow"></span>
                    <span className="icon-star grow"></span>
                    <span className="pl2 code fw6 f5">{product.rating}</span>
                </div>
                <div className="pv1 tc grow">
                    <Link onClick={() => {window.localStorage.setItem("userId", product.owner)}} className="link black" to={"/assets/vendor/User"}>
                        <button type="submit" variant="contained" className="ph5 white pa3 bg-orange pointer ba hover-bg-mid-gray br-pill">
                            Contact Seller
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Purchase;