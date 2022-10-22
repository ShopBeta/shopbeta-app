import React from 'react';
import NetworkCard from '../components/NetworkCard';

const NetworkCardList = ({ users }) => {
    return (
        <div>
            {
                users.map((users, i) => {
                    return (
                        <NetworkCard
                        key={i} 
                        id={users._id} 
                        username={users.username}
                        location={users.location}
                        />
                    )
                })
            }
        </div>
    );
}

export default NetworkCardList;