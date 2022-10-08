import React from 'react';
import History from '../components/History'

const HistoryList = ({ users }) => {
    return (
        <div>
            {
                users.map((user, i) => {
                    return (
                        <History 
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

export default HistoryList;