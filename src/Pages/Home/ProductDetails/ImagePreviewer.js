import * as React from 'react';

import Modal from './ImagePreviewerModal';
import useWindowDimensions from '../../../hooks/useWindowDimensions';
// import iconPrev from '../../../images/icon-previous.svg';
// import iconNext from '../../../images/icon-next.svg';
// import { productImagesLarge, productImagesThumb } from '../../../libs/productImages';

const ImagePreviewer = ({ bookDetails }) => {
    const { bookname, image } = bookDetails;
    const { width } = useWindowDimensions();
    const [current, setCurrent] = React.useState(0);
    const [modalOn, setModal] = React.useState(false);

    if (width >= 960)
        return (
            <section className='p-5 w-1/2'>
                <h2 className='hidden'>Image Preview</h2>
                <img
                    className='rounded-lg mb-7 max-h-[768px]'
                    // src={productImagesLarge[current].src}
                    src={`data:image/jpeg;base64,${image}`}
                    alt={bookname?.toUpperCase()}
                    // alt={productImagesLarge[current].alt}
                    onClick={() => setModal(true)}
                    style={{ width: '400px', height: '350px' }}
                />
                {/* <div className='flex items-center justify-between'>
                    {productImagesThumb.map(({ alt, src }, index) => (
                        <button
                            key={index}
                            title={alt}
                            className={current === index ? 'bg-orange-pale bg-opacity-60 border-2' : 'hover:bg-orange-pale hover:bg-opacity-60 hover:border-2 border-orange rounded-md w-16 h-16 bg-center bg-cover bg-blend-overlay'}
                            style={{ backgroundImage: `url(${src})` }}
                            onClick={() => setCurrent(index)}></button>
                    ))}
                </div> */}
                <Modal
                    current={current}
                    visible={modalOn}
                    setCurrent={setCurrent}
                    onHide={() => setModal(false)}
                    // image={image}
                    // bookname={bookname}
                    bookDetails={bookDetails}
                />
            </section>
        );
    // for mobile
    return (
        <section className='relative overflow-hidden min-h-[300px]'>
            <h2 className='hidden'>Image Preview</h2>
            <div className='relative flex transition-all duration-300 ease-linear' style={{ left: width * -current }}>
                {/* {productImagesLarge.map(({ alt, src }, index) => (
                    <img className='w-full' key={index} src={src} alt={alt} />
                ))} */}
                <img
                    src={`data:image/jpeg;base64,${image}`}
                    alt=""
                    style={{ width: '400px', height: '350px' }} />
            </div>
            {/* <button className='transform: translateY(-50%) absolute left-3 top-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center disabled: bg-opacity-50' title='previous' disabled={current === 0} onClick={() => setCurrent(prev => --prev)}>
                <img src={iconPrev} alt='previous' />
            </button>
            <button className='transform: translateY(-50%) absolute left-3 top-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center disabled: bg-opacity-50 left:unset right-3' title='next' disabled={current === 3} onClick={() => setCurrent(prev => ++prev)}>
                <img src={iconNext} alt='next' />
            </button> */}
        </section>
    );
};

export default ImagePreviewer;
