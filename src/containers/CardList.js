import React from 'react';
import Card from '../components/Card'

const CardList = ({ product, id, name, owner, heart, description, currency, price, oldprice, rating }) => {
    return (
        <div>
            {
                product.map((product, i) => {
                    return (
                        <Card 
                        key={i} 
                        id={product._id} 
                        name={product.name} 
                        username={product.owner}
                        heart={product.heart}
                        images={product.images}
                        description={product.description}
                        price={product.price}
                        currency={product.currency}
                        oldprice={product.oldprice}
                        rating={product.rating}
                        />
                    )
                })
            }
        </div>
    );
}

export default CardList;