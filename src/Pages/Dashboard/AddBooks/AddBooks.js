import React, { useState } from 'react';

const AddBooks = () => {
    const [bookInfo, setBookInfo] = useState({});
    const [image, setImage] = useState(null);

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        // console.log(field, value);
        const newBookInfo = { ...bookInfo };
        newBookInfo[field] = value;
        setBookInfo(newBookInfo);
    }

    const handleBookAdd = e => {
        if (!image) {
            return;
        }
        console.log(bookInfo);
        const formData = new FormData();
        formData.append('bookname', bookInfo.bookname);
        formData.append('writername', bookInfo.writername);
        formData.append('category', bookInfo.category);
        formData.append('description', bookInfo.description);
        formData.append('price', bookInfo.price);
        formData.append('rating', bookInfo.rating);
        formData.append('image', image);

        // fetch('http://localhost:5000/books', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(bookInfo)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //         if (data.insertedId) {
        //             alert("Book Submitted Successfully!!");
        //             document.getElementById("bookForm").reset();
        //         }
        //     })

        fetch('http://localhost:5000/books', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Added Book Successfully!!');
                    document.getElementById("bookForm").reset();
                }
            })
            .catch(error => {
                console.error('Error:', error);
            })

        e.preventDefault();
    }

    return (
        <div className='bg-gray-100'>
            <div className="relative flex flex-col mt-8 pt-8 min-h-screen overflow-hidden">
                <div className="w-full p-6 mx-auto bg-white rounded-md shadow-md lg:max-w-xl">
                    <h1 className="text-3xl font-semibold text-center text-green-700 underline">
                        Add Book Form
                    </h1>
                    <form onSubmit={handleBookAdd} className="mt-6 text-start" id='bookForm'>
                        <div className="mb-2">
                            <label
                                htmlFor="bookname"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Book Name
                            </label>
                            <input
                                onBlur={handleOnChange}
                                name="bookname"
                                type="text"
                                className="block w-full px-4 py-2 mt-2 text-green-700 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40" required
                            />
                        </div>

                        <div className="mb-2">
                            <label
                                htmlFor="bookname"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Writer Name
                            </label>
                            <input
                                onBlur={handleOnChange}
                                name="writername"
                                type="text"
                                className="block w-full px-4 py-2 mt-2 text-green-700 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40" required
                            />
                        </div>

                        <div className="mb-2">
                            <select onBlur={handleOnChange} className='text-sm text-center font-semibold text-white bg-gray-600 py-2 w-full my-3 rounded' id="category" name="category" required>
                                <option>Select Category</option>
                                <option value="novel">Novel</option>
                                <option value="childrenBooks">Children Books</option>
                                <option value="islamicBooks">Islamic Books</option>
                                <option value="poems">Poems</option>
                            </select>

                            {/* <input
                                onBlur={handleOnChange}
                                name="category"
                                type="text"
                                className="block w-full px-4 py-2 mt-2 text-green-700 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40" required
                            /> */}
                        </div>

                        <div className="mb-2">
                            <label
                                htmlFor="price"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Book Price
                            </label>
                            <input
                                onBlur={handleOnChange}
                                name="price"
                                type="number"
                                className="block w-full px-4 py-2 mt-2 text-green-700 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40" required
                            />
                        </div>

                        <div className="mb-2">
                            <label
                                htmlFor="bookname"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Book Description
                            </label>
                            <textarea
                                onBlur={handleOnChange}
                                name="description"
                                type="text"
                                className="block w-full px-4 py-2 mt-2 text-green-700 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>

                        <div className="mb-2">
                            <label
                                htmlFor="rating"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Rating
                            </label>
                            <input
                                onBlur={handleOnChange}
                                name="rating"
                                type="number"
                                className="block w-full px-4 py-2 mt-2 text-green-700 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40" required
                            />
                        </div>

                        <div className="mb-2">
                            {/* <label
                                htmlFor="image"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Image
                            </label> */}
                            {/* <input
                                onBlur={handleOnChange}
                                name="image"
                                type="text"
                                className="block w-full px-4 py-2 mt-2 text-green-700 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40" required
                            /> */}
                            <label className='block text-sm font-semibold text-gray-800 mt-4'>
                                <p>Select Your Image Here</p>
                            </label>
                            <input
                                id='file-upload'
                                type="file"
                                accept="image/*"
                                className='my-4'
                                onChange={e => setImage(e.target.files[0])}
                            />
                            {/* <label htmlFor="file-upload" className="z-20 mx-auto mt-4 py-4 rounded flex flex-col-reverse items-center justify-center w-1/2 h-full cursor-pointer border border-dotted border-gray-400">
                                <p className="z-10 text-xs font-bold text-center">Drag & Drop your image here</p>
                                <svg className="z-10 w-8 h-8 text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"></path>
                                </svg>
                            </label> */}
                        </div>

                        <div className="mt-6">
                            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-green-700 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600" type='submit'>
                                Add
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddBooks;