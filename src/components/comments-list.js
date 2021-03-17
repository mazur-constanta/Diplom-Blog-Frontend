import React from 'react';

const CommentsList = ({ comments = []}) => {
    return(
        <>
            <h4>Комментарии:</h4>
            <div className="comments-list">
                {comments.map((comment, key) => {
                        return <div key={key}>
                                <h6>{comment.username}</h6>
                                <p>{comment.text}</p>
                        </div>
                })}
            </div>
        </>
    );
}

export default CommentsList;
