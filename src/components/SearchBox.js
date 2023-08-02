import React from "react";

const SearchBox = ({searchChange}) => {    
    return(
          <div className="">
            <input style={{backgroundColor: '#ffffff'}} className="pa2 ph4 f4 br-pill ba" type="search" placeholder="Search products...." onChange={searchChange}/>
          </div>
    )
}

export default SearchBox;