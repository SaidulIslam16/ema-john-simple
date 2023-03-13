import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {

    console.log(cart)

    // Calculating Total price in Cart

    let total = 0;
    let shipping = 0;
    for (const product of cart){
        console.log(product.price)
        total = total+product.price;
        shipping = shipping+product.shipping;
    }

    // Tax calculation

    const tax = (total*.1).toFixed(2);
    
    // Grand Total
    const grandtotal = total+shipping+parseFloat(tax)

    return (
        <div className='cart-components'>
            <h3 className='cart-heading'>Order Summary</h3>
            <p>Selected Items: {cart.length} </p>
            <p>Total Price: ${total} </p>
            <p>Total Shipping Charge: ${shipping} </p>
            <p>Tax: ${parseFloat(tax)} </p>
            <h5>Grand Total: ${grandtotal} </h5>
            <button><p>Clear Cart</p></button>
            <button><p>Review Order</p></button>
        </div>
    );
};

export default Cart;