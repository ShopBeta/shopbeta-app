import React, { useEffect } from "react";
import '../Home.css';
import { useState } from "react";
import Navbar from '../../components/Navbar';
import { SideBar } from "../../components/SideBars";
import CardList from '../../containers/CardList';
import Preloader from "../../components/Preloader";
import BlankPage from "../indexes/BlankPage";
import { NetworkError } from "../indexes/ErrorPages";


const Products = () => {

    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch("https://shopbeta-api.onrender.com/products", {
            method: "GET",
        })
        .then((res) => res.json())
        .then((data) => {
            setProduct(data)

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
    }, [])

    const category = localStorage.getItem("category")
    console.log(category)

    const catProducts = product.filter(
        product => {
            return (
                product
                .category
                .toLowerCase()
                .includes(category.toLowerCase())
            )
        }
    )
    console.log(catProducts)

    return(
        <div className="">
            <Preloader />
                <Navbar />
            <div className="">
                <div className="dtc">
                    <SideBar />
                </div>
            <div className="pv6 tc">
                <h3 className="fw6 code fw5 f3 ph3 pb2">MarketPlace</h3>
                    <div className="tc pl4">
                        <CardList product={catProducts} />
                    </div>
                    <div id="error" style={{display: 'none'}} className="tc">
                        <NetworkError />
                    </div>
                    {catProducts.length === 0 &&  <div id="blank" className="tc">
                        <BlankPage />
                        <div className="tc">
                            <p className="pv4 fw6 ph5">
                                <small className="green f4">Post your services or products on MarketPlace</small>
                            </p>
                        </div>
                    </div>}
                    <p id="load" className="tc code orange fw6 f4">Loading products...</p>
                </div>
            </div>
        </div>
    )
}

export default Products;