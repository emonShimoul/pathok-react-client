import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
    return (
        <div className='container mx-auto'>
            <div className="2xl:ml-28 grid lg:grid-rows-3 lg:grid-flow-col gap-8 my-20">
                <Link className="lg:row-span-3">
                    <img className='lg:float-right' src="https://htmldemo.net/pustok/pustok/image/others/cat-gal-large.png" alt="" />
                </Link>
                <Link className="lg:col-span-3">
                    <img className='lg:float-left lg:mr-8' src="https://htmldemo.net/pustok/pustok/image/others/cat-gal-mid.png" alt="" />
                    <img className='' src="https://htmldemo.net/pustok/pustok/image/others/cat-gal-small.png" alt="" />
                </Link>
                <Link className="lg:col-span-3">
                    <img className='lg:float-left lg:mr-8' src="https://htmldemo.net/pustok/pustok/image/others/cat-gal-small-2.jpg" alt="" />
                    <img className='' src="https://htmldemo.net/pustok/pustok/image/others/cat-gal-mid-2.png" alt="" />
                </Link>
            </div>
        </div>
    );
};

export default Categories;