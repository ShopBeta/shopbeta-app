import React from 'react';
import { PostCard, SharedPost, TextPost, ProfilePost } from '../components/PostCard';

const PostCardList = ({ feed, id, name, text, media }) => {
    return (
        <div>
            {
                feed.map((feed, i) => {
                    return (
                        <PostCard 
                        key={i} 
                        id={feed._id} 
                        name={feed.name}
                        owner={feed.owner} 
                        text={feed.text}
                        media={feed.media}
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

const TextPostList = ({ feed, id, text, hearts, media }) => {
    return (
        <div>
            {
                feed.map((feed, i) => {
                    return (
                        <TextPost 
                        key={i} 
                        id={feed._id} 
                        owner={feed.owner} 
                        text={feed.text}
                        hearts={feed.hearts}
                        media={feed.media}
                        />
                    )
                })
            }
        </div>
    );
}


const ProfilePostList = ({ feed, id, owner, text, media }) => {
    return (
        <div>
            {
                feed.map((feed, i) => {
                    return (
                        <ProfilePost 
                        key={i} 
                        id={feed.id} 
                        name={feed.name}
                        owner={feed.owner} 
                        text={feed.text}
                        media={feed.media}
                        />
                    )
                })
            }
        </div>
    );
}

export { PostCardList, SharedPostList, TextPostList, ProfilePostList };