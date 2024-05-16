// npm install react-router-dom

import React from 'react';
import { Link } from 'react-router-dom';

export const ArticleList = ({ articles }) => {
    <div>
        <h2>Articles</h2>
        <ul>
            {articles.map(article => (
                <li key={article.id}>
                    <Link to={`/articles/${article.id}`}>{article.title}</Link>
                </li>
            ))}
        </ul>
    </div>
};
