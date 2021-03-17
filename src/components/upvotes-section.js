import React from 'react';
import { Button } from 'react-bootstrap';

const UpvotesSection = ({ articleName, upvotes, setArticleInfo }) => {
    const upvoteArticle = async () => {
        const result = await fetch(`/api/articles/${articleName}/upvote`, {
            method: 'post',
        });
        const body = await result.json();
        setArticleInfo(body);
    }

    return (
        <div>
            <Button variant="secondary" onClick={() => upvoteArticle()}>Проголосовать</Button>
            <p>Проголосовавших {upvotes} человек.</p> 
        </div>
    );
}

export default UpvotesSection;
