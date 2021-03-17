import React, { Component } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

export default class ContactsPage extends Component {
    render() {
        return (
            <Container className="d-block w-50">
                <h1 className="text-center">Свяжитесь с нами</h1>
                <Form>
                    <Form.Group controlId="formBasicName">
                        <Form.Label>Имя, Фамилия:</Form.Label>
                        <Form.Control type="text" placeholder="Ваше имя" />
                        <Form.Text className="text-muted">
                            Ваше имя скрыто от других политикой безопасности
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Еmail:</Form.Label>
                        <Form.Control type="email" placeholder="Ваш email" />
                        <Form.Text className="text-muted">
                            Ваш email скрыт от других политикой безопасности
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicTextarea">
                        <Form.Label>Сообщение:</Form.Label>
                        <Form.Control as="textarea" rows="5" placeholder="Ваше сообщение"/>
                    </Form.Group>

                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Согласен(на) с политикой обработки личных данных" />
                    </Form.Group>

                    <Button variant="secondary" type="submit" className="mb-4">
                        Отправить
                    </Button>
                </Form> 

                <h5 className="text-center mt-5 mb-5">Контактные данные
                <h6>Р. Молдова, г. Кишинев, ул. Гренобле 120, оф. 15</h6>
                <h6>Телефон: (+373)68-041-683</h6>
                <h6>Почта: constanta.mazur@yandex.com</h6></h5>
            </Container>
        );
    }
}