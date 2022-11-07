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
                        bio={users.bio}
                        location={users.location}
                        website={users.website}
                        email={users.contactEmail}
                        phonenumber={users.phonenumber}
                        avatar={users.avatar}
                        />
                    )
                })
            }
        </div>
    );
}

export default FollowCardList;