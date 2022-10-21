import React from 'react';
import Card from '../components/Card'

const CardList = ({ data }) => {
    return (
        <div>
            {
                data.map((data, i) => {
                    return (
                        <Card 
                        key={i} 
                        id={data[i].id} 
                        name={data[i].name} 
                        heart={data[i].heart}
                        price={data[i].price}
                        oldprice={data[i].oldprice}
                        rating={data[i].rating}
                        />
                    )
                })
            }
        </div>
    );
}

export default CardList;