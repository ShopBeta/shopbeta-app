import React from "react";
import { useState, useEffect } from "react";
import img from '../images/nike.jpg';
import img1 from '../images/coolshoe-3.jpg';
import img2 from '../images/balenciaga.jpg';
import img3 from '../images/Puma Sneekers.jpg';
import Carousel from 'react-material-ui-carousel';

function Carousell(props) {

    const [data, setData] = useState({})

    useEffect(() => {
        fetch("https://shopbeta-app.herokuapp.com/products", {
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
    }, [])

    const items = [
        {
            image: <img src={img} width="460px" height="300px" className="br3" alt="First slide" />,
            name: 'Ronel Michael',
            description: 'Full-stack web developer'
        },
        {
            image: <img src={img1} width="460px" height="300px" className="br3" alt="Second slide" />,
            name: 'John Doe',
            description: 'Author'
        },
        {
            image: <img src={img2} width="460px" height="300px" className="br3" alt="Third slide" />,
            name: 'Pitsu Coma',
            description: 'Math Student'
        },
        {
            image: <img src={data.images} width="460px" height="300px" className="br3" alt="Third slide" />,
            name: 'Pitsu Coma',
            description: 'Math Student'
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