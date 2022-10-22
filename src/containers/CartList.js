import React from 'react';
import CartItem from '../components/CartItem';

const CartList = ({ data, id, name, heart, price, oldprice, rating}) => {
    return (
        <div>
            {
                data.map((data, i) => {
                    return (
                        <CartItem 
                        key={i} 
                        id={data._id} 
                        name={data.name} 
                        heart={data.heart}
                        price={data.price}
                        oldprice={data.oldprice}
                        rating={data.rating}
                        />
                    )
                })
            }
        </div>
    );
}

export default CartList;