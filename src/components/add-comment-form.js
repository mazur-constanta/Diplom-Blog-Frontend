import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const AddCommentForm = ({ articleName, setArticleInfo }) => {
    const [name, setName] = useState('');
    const [commentText, setCommentText] = useState('');

    const addComment = async () => {
        console.log({ name, commentText });
        const response = await fetch(`/api/articles/${articleName}/add-comment`, {
            method: 'POST',
            body: JSON.stringify({ comment: { postedBy: name, text: commentText } }),
            headers: {
                "Content-Type": "application/json",
            },
        });
        const body = await response.json();
        setArticleInfo(body);
        setName('');
        setCommentText('');
    };

    return (
        <>
            <Container className="add-comment-form">
                <Form className="text-center">
                    <h4>Добавить комментарий:</h4>
                    <Form.Group controlId="formBasicName">
                            <Form.Label>Имя:</Form.Label>
                            <Form.Control type="text" placeholder="Имя" value={name} onChange={(event) => setName(event.target.value)} />
                    </Form.Group>

                    <Form.Group controlId="formBasicTextarea">
                            <Form.Label>Сообщение:</Form.Label>
                            <Form.Control as="textarea" rows="5" cols="50" placeholder="Ваше сообщение" value={commentText} onChange={(event) => setCommentText(event.target.value)} />
                    </Form.Group>

                    <Button variant="secondary" type="submit" onClick={() => addComment()}>
                        Добавить
                    </Button>
                </Form>
            </Container>    
        </>
    );
}

export default AddCommentForm;
