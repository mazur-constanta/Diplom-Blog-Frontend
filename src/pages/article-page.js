import React, { useState, useEffect } from 'react';
import ArticlesList from '../components/articles-list';
import ArticleContent from './article-content';
import CommentsList from '../components/comments-list';
import UpvotesSection from '../components/upvotes-section';
import AddCommentForm from '../components/add-comment-form';
import NotFoundPage from './not-found';
import { Container } from 'react-bootstrap';

const ArticlePage = ({ match }) => {
    const name = match.params.name;
    const article = ArticleContent.find(article => article.name === name);

    const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: []});

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(`/api/articles/${name}`);
            const body = await result.json();
            setArticleInfo(body);
        }
        fetchData();
        setArticleInfo({ upvotes: Math.ceil(Math.random() * 10) });
    }, [name]);

    if (!article) 
        return <NotFoundPage />

    const otherArticles = ArticleContent.filter(article => article.name !== name);

    return (
        <>
            <Container>
                <h1>{article.title}</h1>
                <img src={article.src} alt="child" width="60%" className="mb-2" />
                <UpvotesSection articleName={name} upvotes={articleInfo.upvotes} setArticleInfo={setArticleInfo} />
                    {article.content.map((paragraph, key) => { 
                        return <p key={key}>{paragraph}</p>
                })}
                <CommentsList comments={articleInfo.comments} />
                <AddCommentForm articleName={name} setArticleInfo={setArticleInfo} />
                <h3>Другие посты:</h3>
                <ArticlesList articles={otherArticles} />
                </Container>
        </>
    );
}

export default ArticlePage;