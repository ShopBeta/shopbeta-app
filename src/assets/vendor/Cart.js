import React from "react";
import '../Home.css';
import { useState, useEffect } from "react";
import Navbar from '../../components/Navbar';
import { Link } from "react-router-dom";
import logo from '../../images/shopbeta logo.png'
// import img2 from '../../images/tst-image3.jpg'
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
                <div>
                    <nav className="bg-white fw5 navbar navbar-expand-lg tc pv1" style={{position: 'fixed', width: '100%', borderBottom: '1px thin black'}}>
                        <div style={{fontSize: '29px'}} className="ph2 container">
                            <span className='navbar-brand' style={{fontSize: '12px', fontWeight: '500'}}>
                                <img src={logo} alt="logo" className="" width="50px" height="50px" />
                            </span>  
                            <span className="navbar-brand">
                                <h3 className="code">Saved items</h3>
                            </span>
                            {!me || <span className="navbar-brand">
                                <Link to={"../assets/vendor/Profile"} title="profile">
                                    <img src={`https://shopbeta-api.onrender.com/users/${me}/avatar`} alt="user" className="br4 pointer" width="45px" height="45px" />
                                </Link>
                            </span>}
                            {!me &&  <span className="navbar-brand">
                                <Link to={"../assets/indexes/Login"} className="pointer">
                                    <small className="f3 orange hover-blue">Login</small>
                                </Link>
                            </span>}
                        </div>
                    </nav>
                </div>
                <div className="">
                    <div className="pv4 pa1 tc">
                        <div className="dib pt3 tc">
                            <h3 className="code fw7 f3 orange ph3">
                                <small className="icon-basket ph2 f3"></small>
                                <small className="ph3 code">{cart.length} items</small>
                            </h3>
                            <div id="error" style={{display: 'none'}} className="tc">
                                <NetworkError />
                            </div>
                            {cart.length === 0 &&  <div id="blank" className="tc">
                                <CartBlank />
                                Add products from marketplace
                            </div>}
                            <div className="pv4 tc">
                                <CartList cart={cart} />
                            </div>
                            <div id="load" className="tc pv7">
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