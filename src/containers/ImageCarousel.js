import React from "react";
import Carousel from 'react-material-ui-carousel';

function Carousell(props) {

    const pathname = window.location.pathname.split('/')
    const path = pathname[3]
    console.log(path)

    const items = [
        {
            image: <img src={`https://shopbeta-app.herokuapp.com/products/${path}/images-1`} width="460px" height="300px" className="br3" alt="First slide" />,
        },
        {
            image: <img src={`https://shopbeta-app.herokuapp.com/products/${path}/images-2`} width="460px" height="300px" className="br3" alt="Second slide" />,
        },
        {
            image: <img src={`https://shopbeta-app.herokuapp.com/products/${path}/images-3`} width="460px" height="300px" className="br3" alt="Third slide" />,
        },
        {
            image: <img src={`https://shopbeta-app.herokuapp.com/products/${path}/images-4`} width="460px" height="300px" className="br3" alt="Third slide" />,
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
            <div className="tc pa2 w-100">
                <h2 className="pa3 tc">{props.item.image}</h2>
            </div>
        )
    }

    export { Carousell, Item }; 