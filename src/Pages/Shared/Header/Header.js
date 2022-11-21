import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    const navigate = useNavigate();

    const handleSearch = (e) => {
        // alert("searched...");
        e.preventDefault();
    }

    const handleLogOut = () => {
        logOut(navigate);
    }

    return (
        <div className="container mx-auto flex md:flex-row flex-col justify-center mb-5">
            <div className='basis-1/4 pt-5'>
                <Link to="/" className='text-5xl font-bold text-green-600'>Pathok.</Link>
            </div>
            <div className="basis-1/2 pt-2 w-full sm:max-w-lg sm:mx-auto">
                <div className="overflow-hidden z-0 rounded-xl pt-3">
                    <form onSubmit={handleSearch} className="flex z-50 bg-white rounded-xl border border-2">
                        <input type="text" placeholder="Enter Your Search Here" className="rounded-xl flex-1 px-6 py-3 text-gray-700 focus:outline-none" />
                        <button className="bg-green-600 text-white rounded-xl font-semibold px-8 py-3 hover:bg-green-500 focus:bg-green-800 focus:outline-none">Search</button>
                    </form>
                </div>
            </div>
            <div className='basis-1/4 pt-6 space-x-4'>
                <Link to="/allproducts" className='font-bold text-green-800 underline'>All Books</Link>
                {!user?.email ?
                    <div className='text-md font-bold underline inline'>
                        <Link to="/login" className='hover:text-green-800 focus:text-green-800'>Login </Link> /
                        <Link to="/register" className='hover:text-green-800 focus:text-green-800'> Register</Link>
                    </div>
                    :
                    <div className='inline'>
                        <Link to="/addbooks" className='font-bold text-green-800 underline'>Add a Book</Link>
                        <p className='text-sm'>Hello, <span className='font-bold'>{user.displayName}</span>
                            <Link onClick={handleLogOut} className='font-bold text-red-600 underline ml-4'>LogOut</Link>
                        </p>
                    </div>
                }
            </div>
        </div>
    );
};

export default Header;