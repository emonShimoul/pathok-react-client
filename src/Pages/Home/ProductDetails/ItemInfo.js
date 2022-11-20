import * as React from 'react';
// import { AppContext } from '../store';
import iconCart from '../../../images/icon-cart-white.svg';
import iconMinus from '../../../images/icon-minus.svg';
import iconPlus from '../../../images/icon-plus.svg';

const ItemInfo = ({ bookDetails }) => {
    // const {
    // 	actions: { addToCart },
    // } = React.useContext(AppContext);
    const { bookname, writername, description, price } = bookDetails;
    const [amount, setAmount] = React.useState(0);

    const handlePlus = () => setAmount(prev => ++prev);
    const handleMinus = () => amount > 0 && setAmount(prev => --prev);

    const handleAddToCart = () => {
        // addToCart(amount);
        setAmount(0);
    };

    return (
        <section className='item-info p-7 lg:px-16 mt-0 md:mt-16 w-full'>
            <h3 className='text-3xl font-bold mb-5 text-gray-800'>{bookname?.toUpperCase()}</h3>
            <h2 className='text-gray-600 text-sm font-bold uppercase tracking-widest mb-3'>{writername}</h2>
            <p className='tracking-wider text-justify leading-6 mb-7 w-full italic'>{description}</p>
            <div className='first mb-8 flex justify-between items-center md: flex-col md:justify-start md:items-start'>
                <div className='flex items-center space-x-3'>
                    <p className='font-bold text-3xl text-red-800'>{price / 2} TK</p>
                    <span className='px-2 py-1 bg-orange-400 text-white font-bold rounded-lg'>50%</span>
                </div>
                <span className='text-lg font-bold text-gray-800 text-opacity-50 line-through'>{price} tk</span>
            </div>
            <div className='flex flex-col md:flex-row md:items-center md:space-x-2'>
                <div className='mb-4 flex justify-center items-center h-14 bg-gray-200 rounded-lg md: w-1/2 md:mb-0'>
                    <button className='px-5 min-w-fit' onClick={handleMinus}>
                        <img src={iconMinus} alt='minus' />
                    </button>
                    <span className='text-center font-bold flex-grow h-full flex items-center justify-center'>{amount}</span>
                    <button className='px-5 min-w-fit' onClick={handlePlus}>
                        <img src={iconPlus} alt='plus' />
                    </button>
                </div>
                <button className='flex justify-center items-center space-x-3 w-40 lg:w-72 py-4 text-white font-bold bg-green-700 hover:bg-green-600 rounded-lg transition-all duration-200 md:flex-grow' title='add to cart' disabled={amount < 1} onClick={handleAddToCart}>
                    <img src={iconCart} alt='cart' className='w-5 mb-1' />
                    <span>Add to cart</span>
                </button>
            </div>
        </section>
    );
};

export default ItemInfo;
