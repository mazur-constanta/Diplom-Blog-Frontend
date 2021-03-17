import React, { Component } from 'react';
import { Carousel, Container } from 'react-bootstrap';
import Child1 from './../images/1.jpg';
import Child2 from './../images/2.jpg';
import Child3 from './../images/3.jpg';

export default class HomePage extends Component {
    render() {
        return(
            <>
                <Container fluid>
                    <Carousel>
                        <Carousel.Item interval={3000}>
                            <img
                                className="d-block w-100"
                                src={Child1}
                                alt="Children"
                            />
                            <Carousel.Caption>
                                <h1>Быть мамой - дар</h1>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={3000}>
                            <img
                                className="d-block w-100"
                                src={Child2}
                                alt="Children"
                            />
                            <Carousel.Caption>
                                <h1>Быть мамой - искусство</h1>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={3000}>
                            <img
                                className="d-block w-100"
                                src={Child3}
                                alt="Children"
                            />
                            <Carousel.Caption>
                                <h1>Быть мамой - счастье</h1>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Container>
            </>
        );
    }
}
