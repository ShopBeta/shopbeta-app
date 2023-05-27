import React from "react";
import '../Home.css';
import { useState, useEffect } from "react";
import Navbar from '../../components/Navbar';
import CartList from "../../containers/CartList";
import Preloader from "../../components/Preloader";
import BlankPage from "../indexes/BlankPage";
import NetworkError from "../indexes/NetworkError";

const Cart = () => {

    const me = localStorage.getItem("meId")
    console.log(me) 

    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch(`https://shopbeta-api.onrender.com/cart/${me}`, {
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

    // if(cart.length === 0 ) {
    //     const blank = document.getElementById('blank')
    //     blank.style['display'] = 'contents'

    // } else {
    //     const blank = document.getElementById('blank')
    //     blank.style['display'] = 'none'
    // }

    return(
        <div className="">
            <Preloader />
            <Navbar />
            <div className="">
                <div className="dib pv6 tc">
                    <h3 className="tl pv1 code f3 ph3">
                        Saved products
                    </h3>
                    <h3 className="code fw7 pt2 f3 orange ph3">
                        <small className="icon-basket ph2 f3"></small>
                        <small className="ph3 code">{cart.length} items</small>
                    </h3>
                <div className="pa2 tc">
                    <CartList cart={cart} />
                </div>
                <div id="blank" style={{display: 'none'}} className="tc">
                    <BlankPage />
                    <div className="tc">
                        <p className="pv4 fw6 ph5">
                            <small className="green f4">Save products from MarketPlace to cart</small>
                        </p>
                    </div>
                </div>
                <div id="error" style={{display: 'none'}} className="tc">
                    <NetworkError />
                </div>
                <p id="load" className="tc code orange fw6 f4">Loading cart...</p>
            </div>
        </div>
    </div>
    )
}

export default Cart;