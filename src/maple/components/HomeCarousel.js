import React from "react";
import Carousel from 'react-material-ui-carousel';
import { Slide1 } from "./SpecialOffers";
import { Slide2 } from "./SpecialOffers";
import { Slide3 } from "./SpecialOffers";

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