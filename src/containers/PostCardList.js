import React from 'react';
import { VideoPost, SharedPost, TextPost, ProfilePost } from '../components/PostCard';

const VideoPostList = ({ video, id, name, text, media, time }) => {
    return (
        <div>
            {
                video.map((video, i) => {
                    return (
                        <VideoPost 
                        key={i} 
                        id={video._id} 
                        name={video.name}
                        owner={video.owner} 
                        text={video.text}
                        media={video.video}
                        time={video.time}
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

const TextPostList = ({ feed, id, text, hearts, time, media }) => {
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
                        time={feed.time}
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

export { VideoPostList, SharedPostList, TextPostList, ProfilePostList };