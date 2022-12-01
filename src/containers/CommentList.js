import React from 'react';
import Comment from '../components/Comment'

const CommentList = ({ comment, text, file, owner, time}) => {
    return (
        <div>
            {
                comment.map((comment, i) => {
                    return (
                        <Comment 
                        key={i} 
                        id={comment._id} 
                        text={comment.text} 
                        file={comment.file}
                        owner={comment.owner}
                        time={comment.text.time}
                        />
                    )
                })
            }
        </div>
    );
}

export default CommentList;