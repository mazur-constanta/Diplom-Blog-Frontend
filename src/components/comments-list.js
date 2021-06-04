import React from 'react';
import { Container, Toast } from 'react-bootstrap';
import AddCommentForm from './add-comment-form';


const CommentsList = ({ comments, articleName, setArticleInfo }) => {

        function getRandomInt(max) {
                return Math.floor(Math.random() * max);
        }

        return(
                <>        
                <Container className="mt-4"> 
                <h5>Комментарии:</h5>
                <Toast style={{ display: 'inline-block', width: '50%' }}>
                {comments.map((comment, key) => (
                        <div  key={key} align="justify">
                                <Toast.Header closeButton={false}>
                                <strong className="mr-auto">{comment.postedBy}</strong>
                                <small>{getRandomInt(60)} мин назад</small>
                                </Toast.Header>
                                <Toast.Body style={{ fontSize: '14px', fontWeight: '400' }}>{comment.text}</Toast.Body>
                        </div>
                ))}
                </Toast>   
                </Container>
                <Container>    
                <AddCommentForm articleName={articleName} setArticleInfo={setArticleInfo} />    
                </Container>
                </>
        );
}



export default CommentsList;
