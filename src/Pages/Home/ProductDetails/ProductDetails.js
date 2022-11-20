import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ImagePreviewer from './ImagePreviewer';
import ItemInfo from './ItemInfo';

const ProductDetails = () => {
    const { productId } = useParams();
    // console.log(productId);
    const [bookDetails, setBookDetails] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/books/${productId}`)
            .then(res => res.json())
            .then(data => setBookDetails(data))
    }, []);
    // console.log(bookDetails);

    return (
        <div>
            {/* <h2>Book Name: {bookDetails.bookname}</h2> */}
            <ItemInfo></ItemInfo>
            <ImagePreviewer></ImagePreviewer>
        </div>
    );
};

export default ProductDetails;