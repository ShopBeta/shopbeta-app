import React from "react";
import '../Home.css';
import { useState, useEffect } from "react";
import Navbar from '../../components/Navbar';
import CartList from "../../containers/CartList";
import Preloader from "../../components/Preloader";
import NetworkError from "../indexes/NetworkError";

const Cart = () => {

    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch("https://shopbeta-api.onrender.com/cart", {
            method: "GET",
        })
        .then((res) => res.json())
        .then((data) => {
            setCart(data)
            
            const load = document.getElementById('load')
            load.style['display'] = 'none'

            const error = document.getElementById('error')
            error.style['display'] = 'none'
        })
        .catch((err) => {
            console.log(err.message)

            const error = document.getElementById('error')
            error.style['display'] = 'contents'

            const load = document.getElementById('load')
            load.style['display'] = 'none'
        })
    }, [])

    return(
        <div className="">
            <Preloader />
            <Navbar />
            <div className="">
                <div className="dtc pv6 tc">
                    <h3 className="code fw7 f3 orange ph3">
                        <small className="icon-basket ph2 f3"></small>
                        <small className="ph3 code">{cart.length} items</small>
                    </h3>
                <div className="pa2 tc">
                    <CartList cart={cart} />
                </div>
                <div id="error" style={{display: 'none'}} className="tc">
                    <NetworkError />
                </div>
                <p id="load" className="tc code orange fw6 f4">Loading...</p>
            </div>
        </div>
    </div>
    )
}

export default Cart;