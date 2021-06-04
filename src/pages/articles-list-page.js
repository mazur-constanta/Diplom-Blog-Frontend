import React from 'react';
import { Container } from 'react-bootstrap';
import ArticlesList from '../components/articles-list';
import articles from './article-content';

const ArticlesListPage = () => (
    <>
    <Container>
        <h1 className="mt-4">Статьи</h1>
        <ArticlesList articles={articles} />
    </Container>
    </>
)

export default ArticlesListPage;