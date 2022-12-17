import React, { useEffect, useState } from 'react';
import AllProducts from '../AllProducts/AllProducts';
import Product from '../Product/Product';

const Products = () => {
    const [booksData, setBooksData] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/books`)
            .then(res => res.json())
            .then(data => setBooksData(data))
    }, []);
    console.log(booksData);

    return (
        <div className='bg-gray-100'>
            <div className='container mx-auto'>
                <p className='text-4xl font-bold mt-8 pt-8 mb-4'>BOOKS</p>
                <div className='grid lg:grid-cols-4 gap-8 m-12 pb-12 sm:justify-center'>
                    {
                        booksData.slice(0, 8).map(bookData => <Product
                            key={bookData._id}
                            bookData={bookData}
                        ></Product>)
                    }

                    {
                        <AllProducts booksData={booksData}></AllProducts>
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;