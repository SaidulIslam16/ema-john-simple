import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css'

const Product = (props) => {
    const {img, name, price, ratings, seller} = props.product;
    return (
        <div className='product'>
            <div><img src={img} alt="" />
            </div>
            <div className='product-info'>
            <h2 className='product-name'>{name}</h2>
            <h4>Price: ${price}</h4>
            <p>Manufacturer: {seller}</p>
            <p>Rating: {ratings} Stars</p>
           
            </div>
            <button onClick={()=>props.handleAddToCart(props.product)} className='btn-cart'>
                <p className='add-to-cart-text'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;