import React, { useEffect, useState } from 'react';
import { addToDb, getDatafromDb } from '../../utilities/fakedb';
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

    useEffect(()=>{
        const storedCart = getDatafromDb();
        const savedCart = []
        for(const id in storedCart){
            const addedProduct = products.find(product=>product.id===id);
            
            if(addedProduct){
                const quantity = storedCart[id]
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }            
        }
        setCart(savedCart);
    },[products])

    // handiling add to cart
    const handleAddToCart = (selectedProduct)=>{
        // console.log(product)
        const exists = cart.find(product =>product.id===selectedProduct.id)
        let newCart = [];
        if(!exists){
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct]
        }
        else{
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exists.quantity = exists.quantity+1;
            newCart = [...rest, exists]
        }
        setCart(newCart);
        addToDb(selectedProduct.id)
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