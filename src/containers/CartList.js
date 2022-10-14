import React from 'react';
import { useState, useEffect } from 'react';
import CartItem from '../components/CartItem';

const CartList = ({ users }) => {

    const [data, setData] = useState({})

    useEffect(() => {
        fetch("https://shopbeta-app.herokuapp.com/cart")
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch((err) => {
            console.log(err.message)
        })
    }, [])

    return (
        <div>
            {
                users.map((user, i) => {
                    return (
                        <CartItem 
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

export default CartList;