import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './articles-list.css';

const ArticlesList = ({ articles }) => (
    <>
        {articles.map((article, key) => ( 
        <Container id="articles-list">
            <Row>
                <Col  xs={12} md={6}>
                    <Link to={`/articles/${article.name}`}>
                    <Image
                        width={250}
                        height={160}
                        className="mr-3"
                        src={article.src}
                        align="right"
                    />
                    </Link>
                </Col>
                <Col xs={10} md={5}>
                    <Link className="article-list-item d-block" to={`/articles/${article.name}`} key={key} id="articles-title">
                        {article.title}
                    <p align="justify">
                        {article.content[0].substring(0, 180)}...
                    </p>
                    </Link>
                </Col>
            </Row>
        </Container>
        ))}
    </>
);

export default ArticlesList;


// const ArticlesList = ({ articles }) => (
//     <>
//     {articles.map((article, key) => ( 
//         <Link className="article-list-item" to={`/articles/${article.name}`} key={key}>
//             <img src={article.src} alt="child" width="40%" className="m-auto" />
//             <h3>{article.title}</h3>
//             <p>{article.content[0].substring(0, 150)}...</p>
//         </Link>
//     ))}
//     </>
// );

// export default ArticlesList;