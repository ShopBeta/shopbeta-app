import React from "react";
import Carousel from 'react-material-ui-carousel';
import { Slide1, Slide2, Slide3, Slide4, Slide5 } from "./SpecialOffers";

function HomeCarousel(props) {

    const productId = localStorage.getItem("productId")
    console.log(productId)

    const items = [
        {
            image: <Slide1 />,
        },
        {
            image: <Slide2 />,
        },
        {
            image: <Slide3 />,
        },
        {
            image: <Slide4 />,
        },
        {
            image: <Slide5 />,
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

    export { HomeCarousel, Item }; 