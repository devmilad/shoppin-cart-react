import React from 'react';
import { products } from './Product';
import { useContext } from "react";
import { CardContext } from "./context/CardContext";
import ShoppCart from './components/ShoppCart';

const Shopping = () => {
    const {items,totalItems}=useContext(CardContext)
    return (
        <div className='container my-5'>
            <h1 className='text-center'>Shop Cart Items</h1>
            <div className='row'>
                {products.map((product)=>{
                    if(items[product.id] !=0 ){
                        return <ShoppCart product={product} key={product.id}/>
                    }
                   }) }
            </div>
            <div className='text-center'>
                <p> SubTotal: ${totalItems()}</p>
            </div>
        </div>
    );
}

export default Shopping;
