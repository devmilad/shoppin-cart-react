
import CardList from './CardList'
import {products} from '../Product'
const Card = () => {




    return (
        <div className="container my-5">
            <h1>Product Lists</h1>
            <div className="row">
                {products && products.map((pro) =>(
                    <CardList pro={pro} key={pro.id} />
                ))}
              
            </div>
        </div>
    );
}

export default Card;
