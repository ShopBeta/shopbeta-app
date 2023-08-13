import React, { useEffect } from "react";
import '../Home.css';
import { useState } from "react";
import Navbar from '../../components/Navbar';
import Header from '../../components/Header';
import { SideBar } from "../../components/SideBars";
import CardList from '../../containers/CardList';
import Preloader from "../../components/Preloader";
import { NetworkError } from "../indexes/ErrorPages";
import { MarketBlank } from "../indexes/BlankPage";


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
                <Header />
            <div className="">
                <div className="pa1 pv5 tc">
                        <div className="dib tc">
                            <h3 className="pa4 tl code f3 ph3">
                                MarketPlace
                            </h3>
                        <div className="dtc">
                            <SideBar />
                        </div>
                        <div className="tc pl4">
                            <CardList product={catProducts} />
                        </div>
                        <div id="error" style={{display: 'none'}} className="tc">
                            <NetworkError />
                        </div>
                        {catProducts.length === 0 &&  <div id="blank" className="tc">
                            <MarketBlank />
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

export default Products;