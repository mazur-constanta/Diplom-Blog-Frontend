import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container, Nav, Navbar, Row, Col, NavLink  } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaTwitter, FaOdnoklassniki } from "react-icons/fa";
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
                <Container id="navbar-css-format">
                    <Row>
                        <Navbar collapseOnSelect fixed="top"  expand="lg" variant="light" bg="light" >
                        <Col xs={10} md={2}>
                            <Navbar.Brand href="/" className="" id="brand"> 
                                HappyMom
                            </Navbar.Brand>
                        </Col>
                        <Navbar.Toggle aria-controls="resonsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Col xs={12} md={10}>
                            <Nav className="" id="nav-header">
                                <Col>
                                    <Nav.Link href="/" className="">ГЛАВНАЯ</Nav.Link>
                                </Col>
                                <Col>
                                    <Nav.Link href="/about" className="">О НАС</Nav.Link>
                                </Col>
                                <Col>
                                    <Nav.Link href="/articles" className="">СТАТЬИ</Nav.Link>
                                </Col>
                                <Col>
                                    <Nav.Link href="/contacts" className="">КОНТАКТЫ</Nav.Link>
                                </Col>
                            </Nav>  
                            </Col>
                            <Col className="d-inline-flex" id="social" xs={6} md={1} >
                                <Col>
                                    <NavLink href="https://www.facebook.com/" target="_blank" title="facebook"><FaFacebook className="icon" /></NavLink>
                                </Col>
                                <Col>
                                    <NavLink href="https://www.instagram.com/" target="_blank" title="instagram"><FaInstagram className="icon" /></NavLink>
                                </Col>
                                <Col>
                                    <NavLink href="https://twitter.com/" target="_blank" title="twitter"><FaTwitter className="icon" /></NavLink>
                                </Col>
                                <Col>
                                    <NavLink href="https://ok.ru/" target="_blank" title="odnoklassniki"><FaOdnoklassniki className="icon" /></NavLink>
                                </Col>   
                            </Col> 
                        </Navbar.Collapse>
                        </Navbar>
                    </Row>
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
                <Navbar.Toggle aria-controls="mr-auto" />
                    <Row style={{ fontSize: '35px' }}>
                        <Col xs={12} md={6} className="mt-5">
                            <h5>Телефон:
                            <h6>(+373)05-062-018</h6></h5>
                            <h5>Email:
                            <h6>mothers.helper@mail.ru</h6></h5>
                        </Col>
                        <Col xs={12} md={6} className="mt-5">
                            <h6>Сайт разработан с целью поддержки и
                            <h6>развития молодых матерей и их детей.</h6></h6>
                            <h6>Все права защищены.
                            <p>Copyright 2021 © German С.</p></h6>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Nav.Link href="/" className="link-footer">
                                На главную
                            </Nav.Link>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}

