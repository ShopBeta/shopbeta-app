import React from "react";

const SearchBox = ({searchChange}) => {    
    return(
          <div>
            <div className="ph6 pa3">
            <input style={{backgroundColor: 'white'}} className="pa2 icon-magnifier ph5 code f4 br-pill ba" type="search" placeholder="Search products...." onChange={searchChange}/>
            </div>
          </div>
    )
}

export default SearchBox;