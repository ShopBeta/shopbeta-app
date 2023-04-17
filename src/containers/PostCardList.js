import React from 'react';
import { VideoPost, TextPost,} from '../components/PostCard';

const VideoPostList = ({ video, id, name, hearts, views, text, media, time }) => {
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
                        hearts={video.hearts}
                        views={video.views}
                        media={video.video}
                        time={video.time}
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

export { VideoPostList, TextPostList,};