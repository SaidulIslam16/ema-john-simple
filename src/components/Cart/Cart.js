import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {

    // console.log(cart)

    // Calculating Total price in Cart

    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart){
        quantity = quantity+product.quantity;
        total = total+product.price * product.quantity;
        shipping = shipping+product.shipping;
    }

    // Tax calculation

    const tax = parseFloat((total*.1).toFixed(2));
    
    // Grand Total
    const grandtotal = total+shipping+tax;

    return (
        <div className='cart-components'>
            <h3 className='cart-heading'>Order Summary</h3>
            <p>Selected Items: {quantity} </p>
            <p>Total Price: ${total} </p>
            <p>Total Shipping Charge: ${shipping} </p>
            <p>Tax: ${tax} </p>
            <h5>Grand Total: ${grandtotal} </h5>
            <button><p>Clear Cart</p></button>
            <button><p>Review Order</p></button>
        </div>
    );
};

export default Cart;