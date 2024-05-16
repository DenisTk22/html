// npm install react-router-dom

import React from 'react';
import { Link } from 'react-router-dom';

export const Pagination = ({totalProducts, productsPerPage, currentPage}) => {
    const totalPages = Math.ceil(totalProducts / productsPerPage);
    
    return (
        <>
            {Array.from({length: totalPages}, (_, i) => (
                <Link key={i} to={`/products/${i + 1}`}>
                    {i + 1}
                </Link>
            ))}
        </>
    )
}