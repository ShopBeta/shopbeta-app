import React from 'react';
import { PostCard, SharedPost, TextPost, ProfilePost } from '../components/PostCard';

const PostCardList = ({ users }) => {
    return (
        <div>
            {
                users.map((user, i) => {
                    return (
                        <PostCard 
                        key={i} 
                        id={users[i].id} 
                        name={users[i].name} 
                        email={users[i].email}
                        />
                    )
                })
            }
        </div>
    );
}

const SharedPostList = ({ users }) => {
    return (
        <div>
            {
                users.map((user, i) => {
                    return (
                        <SharedPost 
                        key={i} 
                        id={users[i].id} 
                        name={users[i].name} 
                        email={users[i].email}
                        />
                    )
                })
            }
        </div>
    );
}

const TextPostList = ({ users }) => {
    return (
        <div>
            {
                users.map((user, i) => {
                    return (
                        <TextPost 
                        key={i} 
                        id={users[i].id} 
                        name={users[i].name} 
                        email={users[i].email}
                        />
                    )
                })
            }
        </div>
    );
}


const ProfilePostList = ({ users }) => {
    return (
        <div>
            {
                users.map((user, i) => {
                    return (
                        <ProfilePost 
                        key={i} 
                        id={users[i].id} 
                        name={users[i].name} 
                        email={users[i].email}
                        />
                    )
                })
            }
        </div>
    );
}

export { PostCardList, SharedPostList, TextPostList, ProfilePostList };