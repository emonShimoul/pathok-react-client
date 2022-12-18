import React from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';

const ManageBooks = () => {
    const { booksData, setBooksData } = useFetch();

    const handleDelete = id => {
        const proceed = window.confirm("Are you sure, you want to delete??");
        if (proceed) {
            fetch(`http://localhost:5000/books/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert("Deleted Successfully!!");
                        const remainingBooks = booksData.filter(books => books._id !== id);
                        setBooksData(remainingBooks);
                    }
                });
        }
    }

    return (
        <div className='container mx-auto'>
            <p className='text-xl font-bold pt-8 my-4'>MANAGE BOOKS</p>
            <div className="relative shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="py-3 px-6">
                                <span className="sr-only">Image</span>
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Book
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Writer
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Price
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            booksData.map(bookData =>
                                <tr key={bookData._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td className="p-4 w-32">
                                        <img src={`data:image/jpeg;base64,${bookData.image}`} alt="Books" />
                                    </td>
                                    <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                                        {bookData.bookname}
                                    </td>
                                    {/* <td className="py-4 px-6">
                                        <div className="flex items-center space-x-3">
                                            <button className="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white rounded-full border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                                                <span className="sr-only">Quantity button</span>
                                                <svg className="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path></svg>
                                            </button>
                                            <div>
                                                <input type="number" id="first_product" className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="1" required />
                                            </div>
                                            <button className="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white rounded-full border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                                                <span className="sr-only">Quantity button</span>
                                                <svg className="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"></path></svg>
                                            </button>
                                        </div>
                                    </td> */}
                                    <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                                        {bookData.writername}
                                    </td>
                                    <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                                        {bookData.price}
                                    </td>
                                    <td className="py-4 px-6">
                                        <Link className="font-medium text-green-600 dark:text-green-500 hover:underline">Edit</Link> |
                                        <Link onClick={() => handleDelete(bookData._id)} className="font-medium text-red-600 dark:text-red-500 hover:underline"> Remove</Link>
                                    </td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageBooks;