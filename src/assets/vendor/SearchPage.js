import { render } from "@testing-library/react";
import React from "react";
import { useState, useEffect } from "react";
import '../Home.css';
import SideBar from '../../components/SideBar';
import CardList from '../../containers/CardList';
import SearchBox from "../../components/SearchBox";
import Preloader from "../../components/Preloader";
import NetworkError from "../indexes/NetworkError";


const SearchPage = () => {
    
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
        })
    }, [])

    const [searchField, setSearchField] = useState("")

    const onSearchChange = e => {
        setSearchField(e.target.value)
    }

    render()

    const filteredCards = product.filter(
        product => {
            return (
                product
                .name
                .toLowerCase()
                .includes(searchField.toLowerCase())
            )
        }
    )

        return(
            <div className="">
                <Preloader />
                    <div className="">
                        <span style={{fontSize: '25px', fontWeight: '550', letterSpacing: '-1px'}} className="pa3 code">Search <small className="icon-magnifier f4 fw6 ph2"></small></span>
                        <span>
                            <SearchBox searchChange={onSearchChange} />
                        </span>
                    </div>
                    <div className="">
                        <div className="dtc">
                            <SideBar  />
                        </div>
                        <div className="tc pl4">
                            <CardList product={filteredCards} />
                            <div id="error" style={{display: 'none'}} className="tc">
                                <NetworkError />
                            </div>
                            <p id="load" className="tc code orange fw6 f4">Loading...</p>
                    </div>
                </div>
            </div>
        );
}

export default SearchPage;