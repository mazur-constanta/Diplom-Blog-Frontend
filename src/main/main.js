import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container, Nav, Navbar, Form, Button, Row, Col } from 'react-bootstrap';
import HomePage from '../pages/home';
import AboutPage from '../pages/about';
import ArticlesListPage from '../pages/articles-list-page';
import ArticlePage from '../pages/article-page';
import ContactsPage from '../pages/contacts';
import NotFoundPage from '../pages/not-found';
import './main.css';


export default class Main extends Component {
    render() {
        return (
            <>
                <Container>
                    <Navbar fixed="top" collapseOnSelect expand="lg" bg="light" id="nav">
                            <Navbar.Brand href="/" className="ml-start" id="brand"> 
                                HappyMom
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="resonsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="ml-auto" id="nav-header">
                                    <Nav.Link href="/" className="mr-5">ГЛАВНАЯ</Nav.Link>
                                    <Nav.Link href="/about" className="mr-5">О НАС</Nav.Link>
                                    <Nav.Link href="/articles" className="mr-5">СТАТЬИ</Nav.Link>
                                    <Nav.Link href="/contacts" className="mr-5">КОНТАКТЫ</Nav.Link>
                                </Nav>   
                                <Form inline className="ml-auto">
                                    <Form.Control 
                                        display="inline-block"
                                        type="text"
                                        placeholder="Поиск"
                                        className="mr-sm-1"
                                        width="50%"
                                    />
                                    <Button variant="outline-dark" className="m-auto" id="btn-css">
                                        Найти
                                    </Button>
                                </Form>
                            </Navbar.Collapse>
                    </Navbar>
                </Container>

                <Router>
                    <Switch>
                        <Route path="/" component={HomePage} exact />
                        <Route path="/about" component={AboutPage} />
                        <Route path="/articles" exact component={ArticlesListPage} />
                        <Route path="/articles/:name" component={ArticlePage} />
                        <Route path="/contacts" component={ContactsPage} />
                        <Route component={NotFoundPage} />
                    </Switch>
                </Router>
                
                <Container fluid className="nav-footer">
                            <Row>
                                <Col className="mt-5 mb-3">
                                    <h6>Телефон:
                                    <p>(+373)05-062-018</p></h6>
                                    <h6>Email:
                                    <p>mothers.helper@mail.ru</p></h6>
                                </Col>
                                <Col className="mt-5 mb-3">
                                    <h6>Сайт разработан с целью поддержки 
                                    <p>и развития молодых матерей и их чудесных детей.</p></h6>
                                    <h6>Все права защищены.
                                    <p>Copyright 2021 © German С.</p></h6>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Nav.Link href="/" className="link-footer">
                                        В начало
                                    </Nav.Link>
                                </Col>
                            </Row>
                </Container>
            </>
        );
    }
}

