import React from 'react';

const AddBooks = () => {
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        // const newLoginData = { ...loginData };
        // newLoginData[field] = value;
        // setLoginData(newLoginData);
    }

    const handleBookAdd = e => {
        // loginUser(loginData.email, loginData.password, navigate, state);
        e.preventDefault();
    }

    return (
        <div className='bg-gray-100'>
            <div className="relative flex flex-col mt-8 pt-8 min-h-screen overflow-hidden">
                <div className="w-full p-6 mx-auto bg-white rounded-md shadow-md lg:max-w-xl">
                    <h1 className="text-3xl font-semibold text-center text-green-700 underline">
                        Add Book Form
                    </h1>
                    <form className="mt-6">
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
                                className="block w-full px-4 py-2 mt-2 text-green-700 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
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
                                className="block w-full px-4 py-2 mt-2 text-green-700 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
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
                                className="block w-full px-4 py-2 mt-2 text-green-700 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>

                        <div className="mb-2">
                            <label
                                htmlFor="image"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Image
                            </label>
                            <input
                                onBlur={handleOnChange}
                                name="image"
                                type="text"
                                className="block w-full px-4 py-2 mt-2 text-green-700 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>

                        <div className="mt-6">
                            <button onClick={handleBookAdd} className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-green-700 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600">
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