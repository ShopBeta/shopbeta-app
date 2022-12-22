import React from "react";

const SearchBox = ({searchChange}) => {    
    return(
          <div className="tc pa4">
            <input style={{backgroundColor: 'white'}} className="pa2 icon-magnifier ph5 code f4 br-pill ba" type="search" placeholder="Type here to search products...." onChange={searchChange}/>
          </div>
    )
}

export default SearchBox;