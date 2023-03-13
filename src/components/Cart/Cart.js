import React from 'react';
import './Cart.css'

const Cart = (props) => {
    return (
        <div className='cart-components'>
            <h3>Order Summary</h3>
            <p>Selected Items: {props.cart.length} </p>
        </div>
    );
};

export default Cart;