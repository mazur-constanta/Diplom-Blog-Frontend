import React from 'react';
import ArticlesList from '../components/articles-list';
import articles from './article-content';

const ArticlesListPage = () => (
    <>
        <h1>Статьи</h1>
        <ArticlesList articles={articles} />
    </>
)

export default ArticlesListPage;