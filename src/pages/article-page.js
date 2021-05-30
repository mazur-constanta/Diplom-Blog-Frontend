import React, { useState, useEffect } from 'react';
import CommentsList from '../components/comments-list';
import UpvotesSection from '../components/upvotes-section';
import articles from './article-content';
import NotFoundPage from '../pages/not-found';
import OtherArticles from './other-articles.js';


import { Container } from 'react-bootstrap';

const ArticlePage = ({ match }) => {
    const { name } = match.params;

    const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });

    useEffect(() => {
        const fetchArticleInfo = async () => {
            const result = await fetch(`/api/articles/${name}`);
            const body = await result.json();
            setArticleInfo(body);
        }
        fetchArticleInfo();
    }, [name]);

    const matchingArticle = articles.find(article => article.name === name);

    if (!matchingArticle) return <NotFoundPage />

    const otherArticles = articles.filter(article => article.name !== name);

    return matchingArticle ?
    (
        <>
        <Container>
            <h1>{matchingArticle.title}</h1>
            <img src={matchingArticle.src} alt="child" width="60%" className="mb-2" />
            <UpvotesSection upvotes={articleInfo.upvotes} articleName={name} setArticleInfo={setArticleInfo} />
            {matchingArticle.content.map((paragraph, key) => <p key={key}>{paragraph}</p>)}
            <CommentsList comments={articleInfo.comments} articleName={name} setArticleInfo={setArticleInfo} />
            <h4>Другие статьи:</h4>
            <OtherArticles articles={otherArticles} />
        </Container>
        </>
    ) : (
        <NotFoundPage />
    );
};

export default ArticlePage;