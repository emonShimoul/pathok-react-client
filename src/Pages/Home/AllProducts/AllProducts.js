import React from 'react';
import useFetch from '../../../hooks/useFetch';
import Product from '../Product/Product';

const AllProducts = () => {
    const { booksData } = useFetch();
    // console.log(booksData);

    return (
        <div className='bg-gray-100'>
            <div className='container mx-auto pb-12'>
                <p className='text-2xl font-bold mt-8 pt-8 mb-4'>ALL BOOKS</p>
                <div className='grid lg:grid-cols-4 gap-8 mt-12 sm:justify-center'>
                    {
                        booksData.map(bookData => <Product
                            key={bookData._id}
                            bookData={bookData}
                        ></Product>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllProducts;