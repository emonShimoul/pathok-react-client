import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
    return (
        <div className='container mx-auto'>
            <div class="2xl:ml-28 grid lg:grid-rows-3 lg:grid-flow-col gap-8 my-20">
                <div class="lg:row-span-3">
                    <Link>
                        <img className='lg:float-right' src="https://htmldemo.net/pustok/pustok/image/others/cat-gal-large.png" alt="" />
                    </Link>
                </div>
                <div class="lg:col-span-3">
                    <Link><img className='lg:float-left lg:mr-8' src="https://htmldemo.net/pustok/pustok/image/others/cat-gal-mid.png" alt="" /></Link>
                    <Link><img className='' src="https://htmldemo.net/pustok/pustok/image/others/cat-gal-small.png" alt="" /></Link>
                </div>
                <div class="lg:col-span-3">
                    <Link><img className='lg:float-left lg:mr-8' src="https://htmldemo.net/pustok/pustok/image/others/cat-gal-small-2.jpg" alt="" /></Link>
                    <Link><img className='' src="https://htmldemo.net/pustok/pustok/image/others/cat-gal-mid-2.png" alt="" /></Link>
                </div>
            </div>
        </div>
    );
};

export default Categories;