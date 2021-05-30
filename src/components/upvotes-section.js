import React from 'react';
import { Button } from 'react-bootstrap';

const UpvotesSection = ({ upvotes, articleName, setArticleInfo }) => {
    const upvoteArticle = async () => {
        const response = await fetch(`/api/articles/${articleName}/upvote`, {
            method: 'POST'
        });
        const body = await response.json();
        setArticleInfo(body);
    }

    return (
        <div>
            <Button variant="secondary" onClick={() => upvoteArticle()}>
                Проголосовать
            </Button>
            <p>Проголосовавших {upvotes} человек.</p> 
        </div>
    );
}

export default UpvotesSection;
