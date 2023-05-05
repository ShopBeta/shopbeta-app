import React from "react";
import Carousel from 'react-material-ui-carousel';

function Carousell(props) {

    const productId = localStorage.getItem("productId")
    console.log(productId)

    const items = [
        {
            image: <img src={`https://shopbeta-api.onrender.com/products/${productId}/images-1`} width="500px" height="300px" className="br4" alt="First slide" />,
        },
        {
            image: <img src={`https://shopbeta-api.onrender.com/products/${productId}/images-2`} width="500px" height="300px" className="br4" alt="Second slide" />,
        },
        {
            image: <img src={`https://shopbeta-api.onrender.com/products/${productId}/images-3`} width="500px" height="300px" className="br4" alt="Third slide" />,
        },
        {
            image: <img src={`https://shopbeta-api.onrender.com/products/${productId}/images-4`} width="500px" height="300px" className="br4" alt="Fourth slide" />,
        },
    ]


return (
    <Carousel>
        {items.map((item, i) => 
                <Item key={i} item={item} />
        )}
    </Carousel>
        )
    }

function Item(props){
    return (
            <div className="tc w-100">
                <h2 className="tc">{props.item.image}</h2>
            </div>
        )
    }

    export { Carousell, Item }; 