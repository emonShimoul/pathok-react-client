import React from 'react';

const Header = () => {
    return (
        <div class="bg-gray-100 flex flex-col justify-center">
            <div class="relative p-2 w-full sm:max-w-2xl sm:mx-auto">
                <div class="overflow-hidden z-0 rounded-xl relative p-3">
                    <form class="relative flex z-50 bg-white rounded-xl border border-2">
                        <input type="text" placeholder="enter your search here" class="rounded-xl flex-1 px-6 py-3 text-gray-700 focus:outline-none" />
                        <button class="bg-indigo-500 text-white rounded-xl font-semibold px-8 py-3 hover:bg-indigo-400 focus:bg-indigo-600 focus:outline-none">Search</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Header;