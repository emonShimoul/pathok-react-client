import React from 'react';

const Banner = () => {
    const bgImg = 'https://htmldemo.net/pustok/pustok/image/bg-images/home-3-slider-2.jpg';
    return (
        <div className='flex flex-row py-24 2xl:py-36 bg-no-repeat bg-center' style={{ background: `url(${bgImg})` }}>
            <div className='basis-1/4'></div>
            <div className='basis-1/4'>
                <h1 className='2xl:text-6xl text-5xl text-white mt-10 font-serif italic'>I love This Idea!!</h1>
                <h2 className='2xl:text-4xl text-3xl text-white mt-4 font-serif italic'>Cover up Front of Book and Leave Summary</h2>
                <button className="bg-green-600 text-white rounded-xl font-semibold mb-6 mt-10 px-8 py-3 hover:bg-green-500">Buy Now</button>
            </div>
            <div className='basis-1/2'></div>
        </div>
    );
};

export default Banner;