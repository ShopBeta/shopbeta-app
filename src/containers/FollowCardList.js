import React from 'react';
import FollowCard from '../components/FollowCard';

const FollowCardList = ({ users }) => {

    return (
        <div>
            {
                users.map((users, i) => {
                    return (
                        <FollowCard
                        key={i} 
                        id={users._id} 
                        username={users.username}
                        hearts={users.hearts}
                        discount={users.discount}
                        price={users.price}
                        oldprice={users.oldprice}
                        rating={users.rating}
                        />
                    )
                })
            }
        </div>
    );
}

export default FollowCardList;