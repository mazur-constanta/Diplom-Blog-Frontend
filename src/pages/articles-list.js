import React from 'react';
import { Link } from 'react-router-dom';
import ArticleContent from './article-content';
import { Container } from 'react-bootstrap';

const ArticlesList =() => {
    return (
        <>
            <Container>
                <h1>Посты</h1>
                {ArticleContent.map((article, key) => { 
                    return <Link className="article-list-item" key={key} to={`/article/${article.name}`}>
                        <img src={article.src} alt="child" width="50%" className="m-auto" />
                        <h3>{article.title}</h3>
                        <p>{article.content[0].substring(0, 150)}...</p>
                    </Link>
                })}
            </Container>
        </>
    );
}

export default ArticlesList;