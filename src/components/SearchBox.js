import React from "react";

const SearchBox = ({searchChange}) => {    
    return(
          <div className="">
              <div className="">
                <input onChange={searchChange} type="search" className="form-control ba pa2 br-pill w-100" placeholder="Search..." />
              </div>
          </div>
    )
}

export default SearchBox;