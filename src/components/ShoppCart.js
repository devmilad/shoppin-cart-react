import React, { useContext } from 'react';
import { CardContext } from "../context/CardContext";
const ShoppCart = ({product}) => {
    const {items,AddItems,removeItems,updateItems}=useContext(CardContext)
    return (
             <div className='col-lg-7 mx-auto'>
                    <div className='card w-100 my-3'>
                        <div className="card-body d-flex align-item-center">
                        <img src={product.image} alt="product" className='w-25 m-4'/>
                        <div className='my-3 d-flex flex-column'>
                            <h1>{product.title}</h1>
                            <p>{product.body}</p>
                            <p className='lead text-danger'>${product.price}</p>
                            <div className=''>
                                <button className='btn btn-danger ' onClick={()=>removeItems(product.id)}>-</button>
                                <input style={{ width: "50px",height:"36px", textAlign:"center" }} className="mx-2" value={items[product.id]} onChange={(e)=>{updateItems(Number(e.target.value), product.id)}} />
                                <button className='btn btn-success' onClick={()=>AddItems(product.id)}>+</button>
                            </div>
                        </div>
                          
                        </div>
                    </div>
                </div>
    );
}

export default ShoppCart;
