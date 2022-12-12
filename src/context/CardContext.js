import { createContext, useState } from "react";
import { products } from "../Product";

export const CardContext = createContext()

const CreatItems = () => {
    let item = {}
    for (let i = 1; i < products.length + 1; i++) {
        item[i] = 0
    }
   return item;
}


export const CardProvider = ({ children }) => {
   
    const [items, setItems] = useState(CreatItems);

    //! METHODS
    const AddItems=(id)=>{
        setItems(curr=>({...curr, [id]: curr[id]+1}) )
    }

    const removeItems=(id)=>{
        setItems(curr=>({...curr, [id]: curr[id]-1}) )
    }

    const updateItems=(newAmount, id)=>{
        setItems(curr=>({...curr, [id]: newAmount}) )
    }

    const totalItems=()=>{
        let amount=0
        for(const item in items){
            if(items[item] >0){
                let info = products.find((product)=> product.id === Number(item))
                amount += items[item] * info.price
            }
        }
        return amount
    }

    const context={items,AddItems,removeItems,updateItems,totalItems}
    return (
        <CardContext.Provider value={context}>
            {children}
        </CardContext.Provider>
    )
}