import React from 'react';
import CartItem from '../components/CartItem';

const CartList = ({ cart, id, name, heart, currency, price, oldprice, rating}) => {
    return (
        <div>
            {
                cart.map((cart, i) => {
                    return (
                        <CartItem 
                        key={i} 
                        id={cart._id} 
                        name={cart.product.name} 
                        heart={cart.product.heart}
                        currency={cart.product.currency}
                        description={cart.product.description}
                        price={cart.product.price}
                        oldprice={cart.product.oldprice}
                        rating={cart.product.rating}
                        username={cart.product.owner}
                        />
                    )
                })
            }
        </div>
    );
}

export default CartList;