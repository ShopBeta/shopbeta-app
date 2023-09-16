import { render } from "@testing-library/react";
import React from "react";
import { useState, useEffect } from "react";
import '../Home.css';
import Navbar from "../../components/Navbar";
import img from '../../images/modern-flat-design-concept-no-result-found-empty-results-popup-design_637684-88.avif'
import CardList from '../../containers/CardList';
import logo from '../../images/shopbeta logo.png'
import SearchBox from "../../components/SearchBox";
import Preloader from "../../components/Preloader";
import { SearchBlank } from "../indexes/BlankPage";
import { NetworkError } from "../indexes/ErrorPages";


const SearchPage = () => {
    
    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch("https://shopbeta-api.onrender.com/products", {
            method: "GET",
        })
        .then((res) => res.json())
        .then((data) => {
            setProduct(data)

            const error = document.getElementById('error')
            error.style['display'] = 'none'
        })
        .catch((err) => {
            console.log(err.message)

            const error = document.getElementById('error')
            error.style['display'] = 'contents'

            const blank = document.getElementById('blank')
            blank.style['display'] = 'none'

            const search = document.getElementById('search')
            search.style['display'] = 'none'
        })
    }, [])

    const [searchField, setSearchField] = useState("")

    const onSearchChange = e => {
        setSearchField(e.target.value)

        const search = document.getElementById('search')
        search.style['display'] = 'none'

        const results = document.getElementById('results')
        results.style['display'] = 'contents'
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
            <div className="tc">
                <Preloader />
                <div>
                    <nav className="bg-white fw5 navbar navbar-expand-lg tc pv1" style={{position: 'fixed', width: '100%', borderBottom: '1px thin black'}}>
                        <div style={{fontSize: '29px'}} className="ph2 container">
                            <span className='navbar-brand' style={{fontSize: '12px', fontWeight: '500'}}>
                                <img src={logo} alt="logo" className="" width="50px" height="50px" />
                            </span>  
                            <span className="navbar-brand w-60">
                                <SearchBox searchChange={onSearchChange} />
                            </span>
                            <span className="pointer">
                                <small className="icon-microphone f2"></small>
                            </span>
                        </div>
                    </nav>
                </div>
                <div className="tc pt5">
                    <div style={{display: 'none'}} id="results" className="tc">
                        <CardList product={filteredCards} />
                    </div>
                    <div id="search" className="tc">
                        <SearchBlank />
                    </div>
                    {filteredCards.length === 0 &&  <div id="blank" className="tc">
                    <div className="tc pa2">
                        <div className='tc code' style={{fontSize: '27px', fontWeight: '500'}}>
                            <img src={img} alt="result not found" className="tc" />
                        </div>
                    </div>
                </div>}
                <div id="error" style={{display: 'none'}} className="tc">
                    <NetworkError />
                </div>
            </div>
            <Navbar />
        </div>
    );
}

export default SearchPage;