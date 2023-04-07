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
        fetch("https://shopbeta-api.onrender.com/products", {
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
            <div className="pv6 tc">
                <h3 className="fw6 code fw5 f3 ph3 pb2">Products</h3>
                        <div className="tc pl4">
                            <CardList product={product} />
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Products;