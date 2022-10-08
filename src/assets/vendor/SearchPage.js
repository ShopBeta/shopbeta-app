import { render } from "@testing-library/react";
import React from "react";
import { useState } from "react";
import '../Home.css';
import SideBar from '../../components/SideBar';
import { users } from "../../containers/Users";
import CardList from '../../containers/CardList';
import Scroll from '../../containers/Scroll';
import SearchBox from "../../components/SearchBox";


const SearchPage = () => {

    const [searchField, setSearchField] = useState("")

    const onSearchChange = e => {
        setSearchField(e.target.value)
}

    render()

    const filteredCards = users.filter(
        users => {
            return (
                users
                .name
                .toLowerCase()
                .includes(searchField.toLowerCase())
            )
        }
    )

        return(
            <div className="home">
                        <div className="flex flex-wrap dib">
                        <SearchBox searchChange={onSearchChange} />
                        <span className="pt4">
                                <small title="Random" className="icon-layers hover-orange br3 f3 pa2 ph3 fw5"></small>
                            </span>
                            <span className="pt4">
                                <small title="Alphabetical order" className="icon-list hover-bg-light-blue br3 f4 pa2 ph3 grow fw5"></small>
                            </span>
                            <span className="pt4">
                                <small title="Ascending order" className="icon-arrow-up-circle hover-bg-light-blue br3 f4 pa2 ph3 grow fw5"></small>
                            </span>
                            <span className="pt4">
                                <small title="Descending order" className="icon-arrow-down-circle hover-bg-light-blue br3 f4 pa2 ph3 grow fw5"></small>
                            </span>
                        </div>
                    <div className="dt dt--fixed">
                        <SideBar  />
                        <div className="flex flex-wrap tc">
                            <h3 className="orange code fw7 f4 ph3 pb2">Search results</h3>
                        <Scroll>
                            <CardList users={filteredCards} />
                        </Scroll>
                        </div>
                    </div>
            </div>
        );
}

export default SearchPage;