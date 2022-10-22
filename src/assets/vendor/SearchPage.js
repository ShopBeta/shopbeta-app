import { render } from "@testing-library/react";
import React from "react";
import { useState, useEffect } from "react";
import '../Home.css';
import SideBar from '../../components/SideBar';
import CardList from '../../containers/CardList';
import Scroll from '../../containers/Scroll';
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
            <div className="home">
                <Preloader />
                    <div className="flex flex-wrap dib">
                        <div style={{color: '#ee9617', fontSize: '21px', fontWeight: '500', letterSpacing: '-1px'}} className="pa4">ShopBeta</div>
                            <SearchBox searchChange={onSearchChange} />
                                <span className="pt4">
                                        <small title="Random" className="icon-layers hover-orange br3 f3 pa2 pointer ph3 fw5"></small>
                                </span>
                                <span className="pt4">
                                    <small title="Alphabetical order" className="icon-list hover-bg-light-blue pointer br3 f4 pa2 ph3 grow fw5"></small>
                                </span>
                                <span className="pt4">
                                    <small title="Ascending order" className="icon-arrow-up-circle pointer hover-bg-light-blue br3 f4 pa2 ph3 grow fw5"></small>
                                </span>
                                <span className="pt4">
                                    <small title="Descending order" className="icon-arrow-down-circle pointer hover-bg-light-blue br3 f4 pa2 ph3 grow fw5"></small>
                                </span>
                        </div>
                    <div className="dt dt--fixed">
                        <SideBar  />
                        <div className="flex flex-wrap tc">
                            <h3 className="orange code fw7 f4 ph3 pb2">Search results</h3>
                        <Scroll>
                            <CardList product={filteredCards} />
                        </Scroll>
                    </div>
                </div>
            </div>
        );
}

export default SearchPage;