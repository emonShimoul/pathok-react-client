import * as React from 'react';

import iconClose from '../../../images/icon-close-white.svg';
// import iconPrev from '../../../images/icon-previous.svg';
// import iconNext from '../../../images/icon-next.svg';
// import { productImagesLarge, productImagesThumb } from '../../../libs/productImages';


const ImagePreviewerModal = ({
    current,
    // setCurrent,
    visible,
    onHide,
    bookDetails
}) => {
    const { bookname, image } = bookDetails;
    return (
        <div className={visible ? 'fixed top-0 left-0 z-50 w-full h-full bg-gray-900 bg-opacity-90 flex flex-col items-center justify-center' : 'hidden'}>
            <button title='close modal' onClick={onHide} className='mb-4 ml-[400px]'>
                <img src={iconClose} alt='close modal' />
            </button>
            <div className='relative mb-7'>
                <div className='overflow-hidden'>
                    <div className='w-[420px] relative flex transition-all duration-300 ease-linear' style={{ left: 420 * -current }}>
                        {/* {productImagesLarge.map(({ alt, src }, index) => (
                            <img key={index} src={src} alt={alt} className='rounded-lg w-full' />
                        ))} */}
                        <img src={`data:image/jpeg;base64,${image}`} alt={bookname?.toUpperCase()} />
                    </div>
                </div>
                {/* <button className='transform: translateY(-50%) absolute left-3 top-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center disabled: bg-opacity-50 top-1/2 w-12 h-12' title='previous' disabled={current === 0} onClick={() => setCurrent(--current)}>
                    <img src={iconPrev} alt='previous' />
                </button>
                <button className='transform: translateY(-50%) absolute left-3 top-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center disabled: bg-opacity-50 top-1/2 w-12 h-12 left:unset right-3' title='next' disabled={current === 3} onClick={() => setCurrent(++current)}>
                    <img src={iconNext} alt='next' />
                </button> */}
            </div>
            {/* <div className='space-x-7'>
                {productImagesThumb.map(({ alt, src }, index) => (
                    <button
                        key={index}
                        title={alt}
                        className={current === index ? 'bg-orange-pale bg-opacity-60 border-2' : 'hover:bg-orange-pale hover:bg-opacity-60 hover:border-2 border-orange rounded-md w-16 h-16 bg-center bg-cover bg-blend-overlay'}
                        style={{ backgroundImage: `url(${src})` }}
                        onClick={() => setCurrent(index)}></button>
                ))}
            </div> */}
        </div>
    );
};

export default ImagePreviewerModal;
