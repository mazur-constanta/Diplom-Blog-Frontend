import React from 'react';
import { Container, Toast } from 'react-bootstrap';
import AddCommentForm from './add-comment-form';

const CommentsList = ({ comments, articleName, setArticleInfo }) => (
        <>
        <h5>Комментарии:</h5>
        <Container className="align-items-center"> 
        <Toast align="center">
        {comments.map((comment, key) => (
        <div  key={key} align="justify">
                <Toast.Header closeButton={false}>
                <strong className="mr-auto">{comment.postedBy}</strong>
                <small>11 min ago</small>
                </Toast.Header>
                <Toast.Body className="mr-left">{comment.text}</Toast.Body>
        </div>
        ))}
        </Toast>       
        <AddCommentForm articleName={articleName} setArticleInfo={setArticleInfo} />    
        </Container>
        </>
)



export default CommentsList;
