import React from "react";
import '../Home.css';
import { useState, useEffect } from "react";
import Navbar from '../../components/Navbar';
import SideBar from '../../components/SideBar';
import CartList from "../../containers/CartList";
import Preloader from "../../components/Preloader";

const Cart = () => {

    const [data, setData] = useState([])
    useEffect(() => {
        fetch("http://localhost:3000/cart", {
            method: "GET",
        })
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch((err) => {
            console.log(err.message)
        })
    }, [])

    return(
        <div className="home">
            <Preloader />
            <Navbar />
            <div className="dt dt--fixed">
                <SideBar />
            <div className="flex flex-wrap">
                <h3 className="code fw7 f3 orange ph3">
                    <small className="icon-basket ph2 f3"></small>
                    <small className="ph3 code">{data.length}</small>
                </h3>
            <div style={{ overflowY: 'scroll', height: '480px'}} className="pa2">
                <CartList data={data} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;