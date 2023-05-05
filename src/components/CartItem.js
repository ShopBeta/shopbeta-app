import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Typography } from "@material-ui/core";

const CartItem = ({ id, productId }) => {

    const token = localStorage.getItem("token")

    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch(`https://shopbeta-api.onrender.com/products/${productId}`, {
            method: "GET",
        })
        .then((res) => res.json())
        .then((data) => setProduct(data))
        .catch((err) => {
            console.log(err.message)
        })
    }, [productId])

    const username = product.owner

    const [user, setUser] = useState({})
    useEffect(() => {
        fetch(`https://shopbeta-api.onrender.com/users/${username}`, {
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
        await fetch(`https://shopbeta-api.onrender.com/cart/${id}`, {
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
        <div style={{width: '360px'}} className="pv2 dib">
            <div className="tr pb2">
                    <small onClick={deleteClick} title="delete" className="icon-close pointer f3 hover-red"></small>
                </div>
                <div className="flex flex-wrap">
                    <div className="flex flex-wrap bg-white b--black br3 pa4 ma1 bw2 shadow-5">
                    <Typography>
                        <div>
                            <img src={`https://shopbeta-api.onrender.com/products/${productId}/images`} alt="product" className="br4 pv2" width="310px" height="230px"></img>
                        </div>
                            <div className="tl">
                                <p><b>{product.name}</b></p>
                                    <p className="code f4">
                                        <small>by {user.username}</small>
                                    </p>
                                <div>
                            <div className="f4 pt4 code">
                                <small className="bg-light-blue ph3 f3 pa2 br-pill">{product.currency}{product.price}</small> 
                                <small className="pa2 line-through">{product.currency}{product.oldprice}</small>
                            </div>
                                <div className="pv2 tr">
                                    <span className="icon-star"></span>
                                    <span className="icon-star grow"></span>
                                    <span className="icon-star grow"></span>
                                    <span className="icon-star grow"></span>
                                    <span className="icon-star grow"></span>
                                    <span className="pl2 fw6 code f5">{product.rating}</span>
                                </div>
                                <div className="tc">
                                <Link onClick={() => {window.localStorage.setItem("productId", productId)}} className="link black" to={"/components/Purchase"}>
                                    <span className="monospace ph3">
                                        <button className="pa3 white br-pill ba ph6 grow bg-orange hover-bg-mid-gray fw6">Purchase</button>
                                    </span>
                                </Link>
                                </div>
                             </div>
                        </div>
                    </Typography>
                    <div className="">
                    <div style={{ overflowY: 'auto', height: '500px'}} className="pa1 pv3 tj">
                        <h3 className="pv2 fw5">Description</h3>
                            <p>
                                {product.description}
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
        </div>
    )
}

export default CartItem;