// import React, { Component } from 'react';
// import { Carousel, Container, Button } from 'react-bootstrap';
// import Child1 from './../images/1.jpg';
// import Child2 from './../images/2.jpg';
// import Child3 from './../images/3.jpg';
// import { Link } from 'react-router-dom';

// export default class HomePage extends Component {
//     render() {
//         return(
//             <>
//                 <Container fluid>
//                     <Carousel>
//                         <Carousel.Item interval={3000}>
//                             <img
//                                 className="d-block w-100"
//                                 src={Child1}
//                                 alt="Children"
//                             />
//                             <Carousel.Caption>
//                                 <h1>Быть мамой - дар</h1>
//                             </Carousel.Caption>
//                         </Carousel.Item>
//                         <Carousel.Item interval={3000}>
//                             <img
//                                 className="d-block w-100"
//                                 src={Child2}
//                                 alt="Children"
//                             />
//                             <Carousel.Caption>
//                                 <h1>Быть мамой - искусство</h1>
//                             </Carousel.Caption>
//                         </Carousel.Item>
//                         <Carousel.Item interval={3000}>
//                             <img
//                                 className="d-block w-100"
//                                 src={Child3}
//                                 alt="Children"
//                             />
//                             <Carousel.Caption>
//                                 <h1>Быть мамой - счастье</h1>
//                             </Carousel.Caption>
//                         </Carousel.Item>
//                     </Carousel>

//                     <h3>Целая вселенная в одном человеке...</h3>
//                     <h6>Давайте познакомимся поближе? Кликай!</h6>
//                     <Link to="/about">
//                         <Button variant="secondary" type="submit" className="mb-2">
//                             Больше
//                         </Button>
//                     </Link>
//                 </Container>
//             </>
//         );
//     }
// }

import React from 'react';
import Video from "../images/childness.mp4";
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP } from './home-page-elements';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <>
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Быть мамой - дар. Быть мамой- счастье. Быть мамой - искусство..</HeroH1>
                <HeroP>Целая вселенная в одном человеке. Давайте знакомиться ближе?</HeroP>
                <Link to="/about">
                <Button variant="outline-light" className="m-auto" id="btn-css">
                Больше
                </Button>
                </Link>
            </HeroContent>
        </HeroContainer>  
        </>
    );
}

export default HomePage;