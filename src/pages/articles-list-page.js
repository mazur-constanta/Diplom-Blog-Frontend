import React from 'react';
import ArticlesList from '../components/articles-list';
import ArticleContent from './article-content';

const ArticlesListPage =() => {
    return (
        <>
            <h1>Посты</h1>
            <ArticlesList articles={ArticleContent} />
        </>
    );
}

export default ArticlesListPage;