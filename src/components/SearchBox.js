import React from "react";

const SearchBox = ({searchChange}) => {    
    return(
      <div>
            <div className="ph4 pa3">
            <input 
            className="pa2 icon-magnifier ph4 code f4 br-pill ba"
            type="search"
            placeholder="Search...."
            onChange={searchChange}
            />
        </div>
      </div>
    )
}

export default SearchBox;