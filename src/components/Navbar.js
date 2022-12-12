import React from 'react';

import { useContext } from "react";
import { Link } from 'react-router-dom';
import { CardContext } from "../context/CardContext";
const Navbar = () => {
    const {items}=useContext(CardContext)

    const sumItems=  ()=>{
        let result=0
        for (const item in items){
           if (items[item] >0 ){
                result = result + items[item]
            }
        }
        return result
    }
    console.log(sumItems())
    return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link className="navbar-brand" to="/">React</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                        </ul>
                        <div className='mt-2'>
                            <Link to='/cart'>
                                <i className='bx bx-basket fs-3 text-light'></i>
                                 <span className="position-absolute mx-1   translate-middle badge rounded bg-danger">
                                        
                                        {items && sumItems()}
                                </span>
                            </Link>
                            
                        </div>
                    </div>
                </div>
            </nav>

    );
}

export default Navbar;
