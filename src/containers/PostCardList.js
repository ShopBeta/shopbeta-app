import React from 'react';
import { useState, useEffect } from 'react';
import { PostCard, SharedPost, TextPost, ProfilePost } from '../components/PostCard';

const PostCardList = ({ users }) => {

    const [data, setData] = useState({})

    useEffect(() => {
        fetch("https://shopbeta-app.herokuapp.com/feed", {
            method: "GET",
            headers: {
                'Accept' : 'application/json, text/plain',
                'Content-Type' : 'application/json'
            },
        })
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch((err) => {
            console.log(err.message)
        })
    }, [])


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