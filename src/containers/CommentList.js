import React from 'react';
import Comment from '../components/Comment'

const CommentList = ({ comment, text, file, time}) => {
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
                        time={comment.createdAt}
                        />
                    )
                })
            }
        </div>
    );
}

export default CommentList;