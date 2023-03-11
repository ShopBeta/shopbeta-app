import { render } from "@testing-library/react";
import React from "react";
import { useState, useEffect } from "react";
import '../Home.css';
import SideBar from '../../components/SideBar';
import CardList from '../../containers/CardList';
import SearchBox from "../../components/SearchBox";
import Preloader from "../../components/Preloader";


const SearchPage = () => {
    
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
                    <div className="flex flex-wrap">
                        <div style={{color: '#ee9617', fontSize: '23px', fontWeight: '550', letterSpacing: '-1px'}} className="pa4 code">Sponge</div>
                            <SearchBox searchChange={onSearchChange} />
                        </div>
                    <div className="">
                        <div className="dtc">
                            <SideBar  />
                        </div>
                        <div className="tc pl4">
                            <h3 className="orange code fw7 f4 ph3 pb2">Search results</h3>
                            <CardList product={filteredCards} />
                    </div>
                </div>
            </div>
        );
}

export default SearchPage;