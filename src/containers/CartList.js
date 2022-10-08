import React from 'react';
import CartItem from '../components/CartItem';

const CartList = ({ users }) => {
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