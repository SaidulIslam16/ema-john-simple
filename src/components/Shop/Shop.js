import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])

    // loading product data from database
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

    // handiling add to cart
    const handleAddToCart = (product)=>{
        console.log(product)
        const newCart = [...cart , product];
        setCart(newCart);
    }
    // console.log(products) 
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product=><Product key={product.id} product = {product} handleAddToCart = {handleAddToCart}></Product>)
                }
            </div>
            <div className="cart-container">
               <Cart cart = {cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;