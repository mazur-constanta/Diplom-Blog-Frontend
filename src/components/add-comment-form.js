import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const AddCommentForm = ({ articleName, setArticleInfo }) => {
    const [username, setUsername] = useState('');
    const [commentText, setCommentText] = useState('');

    const AddComment = async () => {
        const result = await fetch(`/api/articles/${articleName}/add-comment`, {
            method: 'post',
            body: JSON.stringify({ username, text: commentText }),
            headers: {
                'Content-Type': 'application/json',

            }
        });
        const body = await result.json();
        setArticleInfo(body);
        setUsername('');
        setCommentText('');
    }

    return (
        <>
            <Container className="add-comment-form">
                <Form className="text-center">
                    <h4>Добавить комментарий:</h4>
                    <Form.Group controlId="formBasicName">
                            <Form.Label>Имя:</Form.Label>
                            <Form.Control type="text" placeholder="Имя" value={username} onChange={(event) => setUsername(event.target.value)} 
                            />
                    </Form.Group>

                    <Form.Group controlId="formBasicTextarea">
                            <Form.Label>Сообщение:</Form.Label>
                            <Form.Control as="textarea" rows="5" cols="50" placeholder="Ваше сообщение" value={commentText} onChange={(event) => setCommentText(event.target.value)} 
                            />
                    </Form.Group>

                    <Button variant="secondary" type="submit" onClick={() => AddComment()}>
                        Добавить
                    </Button>
                </Form>
            </Container>    
        </>
    );
}

export default AddCommentForm;
