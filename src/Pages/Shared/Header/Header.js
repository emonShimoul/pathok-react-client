import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {

    const { user, logOut } = useAuth();

    const handleSearch = (e) => {
        // alert("searched...");
        e.preventDefault();
    }

    return (
        <div className="container mx-auto flex md:flex-row flex-col justify-center mb-5">
            <div className='basis-1/4 pt-5'>
                <Link to="/" className='text-5xl font-bold text-green-600'>Pathok.</Link>
            </div>
            <div className="pt-2 w-full sm:max-w-2xl sm:mx-auto basis-1/2">
                <div className="overflow-hidden z-0 rounded-xl pt-3">
                    <form onSubmit={handleSearch} className="flex z-50 bg-white rounded-xl border border-2">
                        <input type="text" placeholder="Enter Your Search Here" className="rounded-xl flex-1 px-6 py-3 text-gray-700 focus:outline-none" />
                        <button className="bg-green-600 text-white rounded-xl font-semibold px-8 py-3 hover:bg-green-500 focus:bg-green-800 focus:outline-none">Search</button>
                    </form>
                </div>
            </div>
            <div className='basis-1/4 pt-6'>
                {!user?.email ?
                    <div className='text-xl font-bold'>
                        <Link to="/login" className='hover:text-green-800 focus:text-green-800'>Login </Link> /
                        <Link to="/register" className='hover:text-green-800 focus:text-green-800'> Register</Link>
                    </div>
                    :
                    <div className='text-sm'>
                        <p>Hello, <span className='font-bold'>{user.displayName}</span></p>
                        <Link onClick={logOut} className='font-bold text-green-800 underline'>LogOut</Link>
                    </div>
                }
            </div>
        </div>
    );
};

export default Header;