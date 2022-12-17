import React from 'react';
import useFetch from '../../../hooks/useFetch';

const AllProducts = () => {
    const { booksData } = useFetch();
    console.log(booksData);
    return (
        <div>
            <h2>All Books</h2>
        </div>
    );
};

export default AllProducts;