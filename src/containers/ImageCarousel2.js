import React from "react";
import { useState, useEffect } from "react";
import img from '../images/nike.jpg';
import Carousel from 'react-material-ui-carousel';

function Carousell(props) {

    const pathname = window.location.pathname.split('/')
    const path = pathname[3]
    console.log(path)
    const [data, setData] = useState({})

    useEffect(() => {
        fetch(`https://shopbeta-app.herokuapp.com/cart/${path}`, {
            method: "GET",
            headers: {
                'Accept' : 'application/json, text/plain',
                'Content-Type' : 'application/json'
            },
        })
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch((err) => {
            console.log(err.message)
        })
    }, [path])

    const items = [
        {
            image: <img src={data.images} width="460px" height="300px" className="br3" alt="First slide" />,
        },
        {
            image: <img src={img} width="460px" height="300px" className="br3" alt="Second slide" />,
        },
        {
            image: <img src={data.images} width="460px" height="300px" className="br3" alt="Third slide" />,
        },
        {
            image: <img src={data.images} width="460px" height="300px" className="br3" alt="Third slide" />,
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