import { useContext } from "react";
import { CardContext } from "../context/CardContext";


const CardList = ({ pro }) => {

 const {items,AddItems}=useContext(CardContext)

console.log(items);
    return (
                <div className='col-lg-4 my-4' >
                    <div className="card" style={{ width: "1.8 rem" }}>
                      <img src={pro.image} className="card-img-top" alt={pro.image} style={{ height: "300px" }} />
                        <div className="card-body">
                            <h5 className="card-title">{pro.title}</h5>
                            <p className="card-text">{pro.body}</p>
                            <div className='d-flex justify-content-between align-items-cente'>
                                 <button className="btn btn-md btn-primary"  onClick={()=>AddItems(pro.id)}><i className='bx bx-cart-add fs-3'></i></button>
                                 <p className='text-success fs-3'>${pro.price}</p>
                            </div>  
                        </div>
                    </div>
                </div>
            )



 
}

export default CardList;
