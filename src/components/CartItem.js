import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Typography } from "@material-ui/core";
// import img from '../images/images-1.jpg'

const CartItem = ({ id, productId }) => {

    const token = localStorage.getItem("token")

    const [product, setProduct] = useState({})
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
            <div className="dib tl pv2 ma1 pa2-l">
                <div className="">
                    <div className="pointer tl bg-white b--black br3 bw2 shadow-5">
                        <Link onClick={() => {window.localStorage.setItem("productId", productId)}} className="link black" to={"/components/Details"}>
                            <div className="tc">
                                <img src={`https://shopbeta-api.onrender.com/products/${productId}/images-1`} alt="item" className="br3 w-100" width="310px" height="240px"></img>
                            </div>
                        </Link>
                        <Typography className="pa3">
                            <div className="tr f3 br-pill">
                            <small className="icon-heart pointer ph2 grow"><small className="code black pl1 f5">{product.heart}</small></small>
                            </div>
                            <div className="tl">
                                <span className="">
                                    <b>{product.name}</b>
                                </span>
                                <Link onClick={() => {window.localStorage.setItem("userId", user._id)}} className="link black" to={"/assets/vendor/User"}>
                                    <p className="pv1 code f5">
                                        by {user.username}
                                    </p>
                                </Link>
                            <div>
                            <div className="f4 pt1 code">
                                <small className="bg-light-blue ph3 f3 pa2 br-pill">{product.currency}{product.price}</small> 
                                <small className="pa2 line-through">{product.currency}{product.oldprice}</small>
                            </div>
                            <div className="pv2 tr">
                                <span className="icon-star"></span>
                                <span className="icon-star"></span>
                                <span className="icon-star"></span>
                                <span className="icon-star"></span>
                                <span className="icon-star"></span>
                                <span className="pl2 code fw6 f5">{product.rating}</span>
                            </div>
                            <div className="tc">
                            <span className="monospace">
                                    <Link onClick={() => {window.localStorage.setItem("productId", id)}} className="link black" to={"/components/Purchase"}>
                                        <button className="pa3 br-pill f6 white pointer ph4 ba grow bg-orange hover-bg-mid-gray fw6"><small className="icon-handbag f6 pr2"></small>Buy it now</button>
                                    </Link>
                                    <button onClick={deleteClick} className="pa3 br-pill pointer f6 white ph4 grow ba bg-orange hover-bg-mid-gray fw6">Delete item<small className="icon-trash f6 pl2"></small></button>
                                </span>
                            </div>
                        </div>
                    </div>
                </Typography>
            </div>
        </div>
    </div>
    )
}

export default CartItem;