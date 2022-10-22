import React from 'react';
import Card from '../components/Card'

const CardList = ({ data, id, name, heart, price, oldprice, rating }) => {
    return (
        <div>
            {
                data.map((data, i) => {
                    return (
                        <Card 
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

export default CardList;