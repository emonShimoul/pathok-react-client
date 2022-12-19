import { Link } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';
import Product from '../Product/Product';

const Products = () => {
    const { booksData } = useFetch();

    return (
        <div className='bg-gray-100'>
            <div className='container mx-auto pb-12'>
                <p className='text-4xl font-bold mt-8 pt-8 mb-4'>BOOKS</p>
                <div className='grid lg:grid-cols-4 gap-8 mt-12 sm:justify-center'>
                    {
                        booksData.slice(0, 8).map(bookData => <Product
                            key={bookData._id}
                            bookData={bookData}
                        ></Product>)
                    }
                </div>
                <div className='text-right mt-8'>
                    <Link to='/allproducts' className='underline font-bold text-green-700'>More Books</Link>
                </div>
            </div>
        </div>
    );
};

export default Products;