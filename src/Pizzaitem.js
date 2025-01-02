import Iteminfo from "./Iteminfo";
import { useState } from "react";

const Pizzaitem = ({id,kind,size,price, item })=>{
    const [iteminfo, setIteminfo] = useState(null);
    const [modelopen, setModelopen] = useState(false);

    const handleitem= (item)=>{
        setIteminfo(item);
        setModelopen(true);
        }
    
        const closeModal = () => {
        setModelopen(false);
        };
return(
    <div  key = {id}  className = "pizzbox" onClick = {()=>{handleitem(item)}}>
        <img src = "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/momo-mia-veg.4e51f4733bea47a514c107c9fd2341e3.1.jpg?width=600" alt = "pizza-image" width = "250px"></img>
        <h2>{(kind).toUpperCase()}</h2>
        <h3>Size: {size}</h3>
        <h3>Price: ₹{price}</h3>
        <button className = "pizzaboxbut"> Add </button>
        {modelopen && (<Iteminfo item = {iteminfo} closemodel = {closeModal}/>)}
    </div>  
)
}

export default Pizzaitem;
