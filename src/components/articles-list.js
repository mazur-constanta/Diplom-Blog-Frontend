import React from 'react';
// import { Container, Row, Col, Media, Image, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const ArticlesList = ({ articles }) => (
    <>
    {articles.map((article, key) => ( 
        <Link className="article-list-item" to={`/articles/${article.name}`} key={key}>
            <img src={article.src} alt="child" width="40%" className="m-auto" />
            <h3>{article.title}</h3>
            <p>{article.content[0].substring(0, 150)}...</p>
        </Link>
    ))}
    </>
);

export default ArticlesList;



// const ArticlesList = ({ articles }) => (
//     <>
//         {articles.map((article, key) => ( 
//         <Container style={{ marginTop: '30px'}}>
//             <Row>
//                 <Col md="9">
//                     <Media className="justify-content">
//                         <Image
//                             width={230}
//                             height={150}
//                             className="mr-3"
//                             src={article.src}
//                         />
//                         <Media.Body className="text-left">
//                             <Link className="article-list-item" to={`/articles/${article.name}`} key={key} style={{ fontSize: '24px', color: '#404040', fontWeight: '500' }}>{article.title}</Link>
//                             <p>
//                                 {article.content[0].substring(0, 150)}...
//                             </p>
//                         </Media.Body>
//                     </Media>
//                 </Col>
//             </Row>
//         </Container>
//         ))}
//     </>
// );

// export default ArticlesList;