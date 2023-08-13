import React from "react";
import '../Home.css';
import { useState, useEffect } from "react";
import Navbar from '../../components/Navbar';
import Header from '../../components/Header'
import CartList from "../../containers/CartList";
import Preloader from "../../components/Preloader";
import { CartBlank } from "../indexes/BlankPage";
import { NetworkError }from "../indexes/ErrorPages";

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

            const blank = document.getElementById('blank')
            blank.style['display'] = 'none'
        })
    }, [me])


    return(
        <div className="">
            <Preloader />
            <Header />
            <div className="">
                <div className="pv4 pa1 tc">
                    <div className="dib pt3 tc">
                        <h3 className="pa4 tl code f3 ph3">
                            Saved products
                        </h3>
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
                    {cart.length === 0 &&  <div id="blank" className="tc">
                        <CartBlank />
                    </div>}
                    <div id="load" className="tc">
                        <div className="spinner">
                            <span className="spinner-rotate">
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Navbar />
    </div>
    )
}

export default Cart;