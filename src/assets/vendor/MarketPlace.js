import React, { useEffect } from "react";
import '../Home.css';
import { useState } from "react";
import Navbar from '../../components/Navbar';
import SideBar from '../../components/SideBar';
import CardList from '../../containers/CardList';
import Scroll from '../../containers/Scroll'; 
import Preloader from "../../components/Preloader";


const Products = () => {

    const [data, setData] = useState([])
    useEffect(() => {
        fetch("http://localhost:3000/products", {
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
            <div className="flex flex-wrap tc">
                <h3 className="shop fw6 code f3 ph3 pb2">Products</h3>
                    <Scroll>
                        <CardList data={data} />
                    </Scroll>
                </div>
            </div>
        </div>
    )
}

export default Products;