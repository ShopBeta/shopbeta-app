import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import 'tachyons';
import { Typography } from "@material-ui/core";
// import img from '../images/images-1.jpg'

const Card = ({ id, name, username, images, heart, description, currency, price, oldprice, rating }) => {

    const token = localStorage.getItem("token")
    const me = localStorage.getItem("meId")
    console.log(me)
    console.log(token)

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

    const heartClick = async event => {
            event.currentTarget.style.color = 'orange';
            event.currentTarget.style.fontWeight = 'bold';

            const count = {
                heart: heart + 1
            }

            await fetch(`https://shopbeta-api.onrender.com/products/${id}/hearts`, {
                method: "POST",
                headers: {
                    'Authorization' : 'Bearer ' + token,
                    'Accept' : 'application/json, text/plain',
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify(count)
            })
            .then((res) => res.json())
            .then((data) => console.log(data))
            .catch((err) => {
                console.log(err.message)
            })
    }

    const addCart = async event => {

        await fetch(`https://shopbeta-api.onrender.com/cart/${me}/product/${id}`, {
            method: "POST",
            headers: {
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

      // calculate the percentage of income that we spent
        const newPrice = oldprice - price  
        const percentage = Math.round((newPrice / oldprice) * 100);
        

       // format represention of product prices
        let newNum = Math.abs(price);
        const num1 = newNum.toFixed(2);
        
        let oldNum = Math.abs(oldprice);
        console.log(oldNum)
        const num2 = oldNum.toFixed(2);

        const newSplit = num1.split('.');
        const oldSplit = num2.split('.');

        let intNew = newSplit[0];
        if(intNew.length > 3) {
            intNew = intNew.substr(0, intNew.length - 3) + ',' + intNew.substr(intNew.length - 3, 3); // input 2310, output 2,310
        }

        let intOld = oldSplit[0];
        if(intOld.length > 3) {
            intOld = intOld.substr(0, intOld.length - 3) + ',' + intOld.substr(intOld.length - 3, 3); // input 2310, output 2,310
        }

    return(
            <div className="dib tl pv2 ma1 pa2-l">
                <div className="">
                    <div className="pointer tl bg-white b--black br3 bw2 shadow-5">
                        <Link onClick={() => {window.localStorage.setItem("productId", id)}} className="link black" to={"/components/Details"}>
                            <div className="tc">
                                <img src={`https://shopbeta-api.onrender.com/products/${id}/images-1`} alt="item" className="br3 w-100" width="310px" height="240px"></img>
                            </div>
                        </Link>
                        <Typography className="pa3">
                            <div className="tr f3 br-pill">
                                <small onClick={heartClick} className="icon-heart pointer ph2 grow"><small className="code black pl1 f5">{heart}</small></small>
                            </div>
                            <div className="tl">
                                <span className="">
                                    <b>{name}</b>
                                </span>
                                <Link onClick={() => {window.localStorage.setItem("userId", user._id)}} className="link black" to={"/assets/vendor/User"}>
                                    <p className="pv1 code f5">
                                        by {user.username}
                                    </p>
                                </Link>
                            <div>
                            <div className="f4 pt1 code">
                                <small className="bg-light-blue ph3 f3 pa2 br-pill">{currency}{intNew}</small> 
                                <small className="pa2 line-through">{currency}{intOld}</small>
                            </div>
                            <div className="pv2 tr">
                                <p className="ph2 code f4 fw6 red">-{percentage}%</p>
                            </div>
                            <div className="tc">
                                <span className="monospace">
                                    <Link onClick={() => {window.localStorage.setItem("productId", id)}} className="link black" to={"/components/Purchase"}>
                                        <button className="pa3 br-pill f6 white pointer ph4 ba grow bg-orange hover-bg-mid-gray fw6"><small className="icon-handbag f6 pr2"></small>Buy it now</button>
                                    </Link>
                                    <button onClick={addCart} className="pa3 br-pill pointer f6 white ph4 grow ba bg-orange hover-bg-mid-gray fw6">Add to cart<small className="icon-basket f6 pl2"></small></button>
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

export default Card;