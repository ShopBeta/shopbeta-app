import { render } from "@testing-library/react";
import React from "react";
import { useState, useEffect } from "react";
import '../Home.css';
import img from '../../images/network-error-1.png'
import CardList from '../../containers/CardList';
import SearchBox from "../../components/SearchBox";
import Preloader from "../../components/Preloader";
import BlankPage from "../indexes/BlankPage";
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
            <div className="">
                <Preloader />
                  <div style={{position: 'fixed', width: '100%', borderBottom: '1px thin black'}} className="bg-white">
                    <h3 className="tl pt3 pa3 code f3 ph3">
                        SearchPage
                    </h3>
                    <div className="tc ph1 flex flex-wrap">
                        <span style={{fontSize: '23px', fontWeight: '800', letterSpacing: '-1px'}} className="icon-magnifier pl2 pt3"></span>
                        <span>
                            <SearchBox searchChange={onSearchChange} />
                        </span>
                    </div>
                  </div>
                    <div className="tc pt6">
                        <div style={{display: 'none'}} id="results" className="tc">
                            <CardList product={filteredCards} />
                        </div>
                        <div id="search" className="tc">
                            <BlankPage />
                            <div className="tc">
                                <p className="pv4 fw6 ph5">
                                    <small className="green f4">Type to search your favorite products</small>
                                </p>
                            </div>
                        </div>
                        {filteredCards.length === 0 &&  <div id="blank" className="tc">
                            <div className="tc pa2">
                                <div className='tc code' style={{fontSize: '27px', fontWeight: '500'}}><img src={img} alt="logo" className="tc" width="200px" height="200px" /></div>
                            </div>
                            <div className="tc">
                                <p className="pv4 fw6 ph5">
                                    <small className="green f4">Sorry no items found</small>
                                </p>
                            </div>
                        </div>}
                        <div id="error" style={{display: 'none'}} className="tc">
                            <NetworkError />
                        </div>
                        <p id="load" className="tc code orange fw6 f4">Loading...</p>
                </div>
            </div>
        );
}

export default SearchPage;