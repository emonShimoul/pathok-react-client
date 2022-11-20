import * as React from 'react';
// import { AppContext } from '../store';
import iconCart from '../../../images/icon-cart-white.svg';
import iconMinus from '../../../images/icon-minus.svg';
import iconPlus from '../../../images/icon-plus.svg';

const ItemInfo = () => {
    // const {
    // 	actions: { addToCart },
    // } = React.useContext(AppContext);
    const [amount, setAmount] = React.useState(0);

    const handlePlus = () => setAmount(prev => ++prev);
    const handleMinus = () => amount > 0 && setAmount(prev => --prev);

    const handleAddToCart = () => {
        // addToCart(amount);
        setAmount(0);
    };

    return (
        <section className='item-info p-7 lg:px-16'>
            <h2 className='text-orange text-sm font-bold uppercase tracking-widest mb-3'>Sneaker Company</h2>
            <h3 className='text-3xl font-bold mb-5'>Fall Limited Edition Sneakers</h3>
            <p className='tracking-wider text-blue-dark-grayish text-justify leading-6 mb-7'>
                These low-profile sneakers are your perfect casual wear companion. Featuring a durable
                rubber outer sole, they’ll withstand everything the weather can offer.
            </p>
            <div className='first mb-8 flex justify-between items-center md: flex-col md:justify-start md:items-start'>
                <div className='flex items-center space-x-3'>
                    <p className='font-bold text-3xl'>$125.00</p>
                    <span className='px-2 py-1 bg-orange-pale text-orange font-bold rounded-lg'>50%</span>
                </div>
                <span className='text-lg font-bold text-blue-dark-grayish text-opacity-50 line-through'>$250.00</span>
            </div>
            <div className='second flex flex-col md: flex-row md:items-center md:space-x-2'>
                <div className='mb-4 flex justify-center items-center h-14 bg-blue-light-grayish rounded-lg md: w-1/2 md:mb-0'>
                    <button className='px-5 min-w-fit' onClick={handleMinus}>
                        <img src={iconMinus} alt='minus' />
                    </button>
                    <span className='bg-blue-light-grayish text-center font-bold flex-grow h-full flex items-center justify-center'>{amount}</span>
                    <button className='px-5 min-w-fit' onClick={handlePlus}>
                        <img src={iconPlus} alt='plus' />
                    </button>
                </div>
                <button className='flex justify-center items-center space-x-3 w-full py-4 text-blue-light-grayish font-bold bg-orange rounded-lg transition-all duration-200 disabled: bg-opacity-50 disabled:pointer-events-none md:flex-grow' title='add to cart' disabled={amount < 1} onClick={handleAddToCart}>
                    <img src={iconCart} alt='cart' className='w-5 mb-1' />
                    <span>Add to cart</span>
                </button>
            </div>
        </section>
    );
};

export default ItemInfo;
