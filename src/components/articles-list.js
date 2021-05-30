import React from 'react';
import { Link } from 'react-router-dom';


const ArticlesList = ({ articles }) => (
    <>
    {articles.map((article, key) => ( 
        <Link className="article-list-item" to={`/articles/${article.name}`} key={key}>
            <img src={article.src} alt="child" width="50%" className="m-auto" />
            <h3>{article.title}</h3>
            <p>{article.content[0].substring(0, 150)}...</p>
        </Link>
    ))}
    </>
);

export default ArticlesList;