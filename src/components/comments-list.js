import React from 'react';
import AddCommentForm from './add-comment-form';

const CommentsList = ({ comments, articleName, setArticleInfo }) => (
    <>
    <h4>Комментарии:</h4>
    {comments.map((comment, key) => (
            <div className="comments-list" key={key}>
                    <h6>{comment.postedBy}</h6>
                    <p>{comment.text}</p>
            </div>
    ))}
    <AddCommentForm articleName={articleName} setArticleIndo={setArticleInfo} />
    </>
);

export default CommentsList;
