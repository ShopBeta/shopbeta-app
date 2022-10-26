import React from "react";
import { useState, useEffect } from "react";
import 'tachyons';
import img from '../images/nike.jpg';
import { Typography } from "@material-ui/core";
import ModalDialog from "../containers/ModalDialog";
import PurchaseModal from "../containers/PurchaseModal";

const Card = ({ id, name, username, images, heart, description, currency, price, oldprice, rating }) => {

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

    const heartClick = async event => {
            event.currentTarget.style.color = 'orange';
            event.currentTarget.style.fontWeight = 'bold';

            const count = {
                heart: heart + 1
            }

            await fetch(`https://shopbeta-app.herokuapp.com/products/${id}/hearts`, {
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

    const addCart = event => {

        const product = {
            product : {
            name: name,
            heart: heart,
            description: description,
            images: images,
            price: price,
            oldprice: price,
            rating: rating
            }
        }

        fetch(`https://shopbeta-app.herokuapp.com/cart/${id}`, {
            method: "POST",
            headers: {
                'Authorization' : 'Bearer ' + token,
                'Accept' : 'application/json, text/plain',
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(product)
        })
        .then((res) => res.json())
        .then((data) => console.data(data))
        .catch((err) => {
            console.log(err.message)
        })
    }

    const [open, setOpen] = useState(false)

    const [show, setShow] = useState(false)

    //functon to handle payment modal close
    const handleShut= () => {
        setOpen(false)
    }

     //functon to handle payment modal open
    const handleShow = () => {
        setShow(true)
    }

       //functon to handle payment modal close
       const handleClose= () => {
        setShow(false)
    }

    return(
        <div className="dib tl ma1 pa2-l">
            <ModalDialog handleOpen={show} handleClose={handleClose} />
            <PurchaseModal handleShow={open} handleShut={handleShut} />
            <div onClick={() => {window.history.pushState(null, "", id)}}>
            <div onClick={handleShow} className="flex w-100 flex-wrap tl bg-white b--black br3 pa3 grow bw2 shadow-5">
                <Typography>
                    <div className="tc">
                        <img src={img} alt="item" className="br4 pv1 w-100" width="310px" height="230px"></img>
                    </div>
                    <div className="tr f3 br-pill">
                            <small onClick={heartClick} className="icon-heart pointer ph2 grow"><small className="code black pl1 f5">{heart}</small></small>
                        </div>
                    <div className="tl">
                        <span className="">
                            <b>{ name }</b>
                        </span>
                        <p className="pv1 code f5">
                            by { user.username }
                        </p>
                    <div>
                        <div className="f4 pt1 code">
                            <small className="bg-light-blue ph3 f3 pa2 br-pill">{currency}{price}</small> 
                            <small className="pa2 line-through">{currency}{oldprice}</small>
                        </div>
                        <div className="pv2 tr">
                            <span className="icon-star"></span>
                            <span className="icon-star"></span>
                            <span className="icon-star"></span>
                            <span className="icon-star"></span>
                            <span className="icon-star"></span>
                            <span className="pl2 code fw6 f5">{rating}</span>
                        </div>
                        <div className="tc ph3">
                        <span className="monospace">
                            <button onClick={handleShow} className="pa3 br-pill f6 white pointer ph4 ba grow bg-orange hover-bg-mid-gray fw6">Buy it now</button>
                            <button onClick={addCart} className="pa3 br-pill pointer f6 white ph4 grow ba bg-orange hover-bg-mid-gray fw6">Add to cart</button>
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