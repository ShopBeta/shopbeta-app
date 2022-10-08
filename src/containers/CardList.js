import React from 'react';
import { useState, useEffect } from 'react';
import Card from '../components/Card'

const CardList = ({ users }) => {

    const [data, setData] = useState({})

    useEffect(() => {
        fetch("http://localhost:2000/products")
        .then(res => res.json())
        .then(product => setData(data))
    }, [])

    return (
        <div>
            {
                users.map((user, i) => {
                    return (
                        <Card 
                        key={i} 
                        id={users[i].id} 
                        name={users[i].name} 
                        username={users[i].username}
                        heartcount={users[i].heartcount}
                        discount={users[i].discount}
                        price={users[i].price}
                        oldprice={users[i].oldprice}
                        rating={users[i].rating}
                        />
                    )
                })
            }
        </div>
    );
}

export default CardList;