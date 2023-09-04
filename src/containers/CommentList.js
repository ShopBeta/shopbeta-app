import React from 'react';
import Comment from '../components/Comment'

const CommentList = ({ comment, text, owner, time}) => {
    return (
        <div>
            {
                comment.map((comment, i) => {
                    return (
                        <Comment 
                        key={i} 
                        id={comment._id} 
                        text={comment.text} 
                        owner={comment.owner}
                        time={comment.time}
                        />
                    )
                })
            }
        </div>
    );
}

export default CommentList;