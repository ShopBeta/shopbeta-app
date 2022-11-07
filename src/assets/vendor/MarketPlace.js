import React, { useEffect } from "react";
import '../Home.css';
import { useState } from "react";
import Navbar from '../../components/Navbar';
import SideBar from '../../components/SideBar';
import CardList from '../../containers/CardList';
import Preloader from "../../components/Preloader";


const Products = () => {

    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch("https://shopbeta-app.herokuapp.com/products", {
            method: "GET",
        })
        .then((res) => res.json())
        .then((data) => setProduct(data))
        .catch((err) => {
            console.log(err.message)
        })
    }, [])

    return(
        <div className="">
            <Preloader />
                <Navbar />
            <div className="">
                <div className="dtc">
                    <SideBar />
                </div>
            <div className="dtc pl4 pv6 tc">
                <h3 className="shop fw6 code f4 ph3 pb2">Products</h3>
                        <div className="tc">
                            <CardList product={product} />
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Products;