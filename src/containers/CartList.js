import React from 'react';
import CartItem from '../components/CartItem';

const CartList = ({ cart, productId, id }) => {
    return (
        <div>
            {
                cart.map((cart, i) => {
                    return (
                        <CartItem 
                        key={i} 
                        id={cart._id}
                        productId={cart.product} 
                        />
                    )
                })
            }
        </div>
    );
}

export default CartList;