
import {useState} from 'react'
import useAPI from "./useAPI";
import Iteminfo from './Iteminfo';
import Pizzaitem from './Pizzaitem';
import Popularlabel from './Popularlabel';



const Pizza = ()=>{

    const PopularPizzaItem = Popularlabel(Pizzaitem);
    const {data} = useAPI("https://api.pizzahut.io/v2/products/pizzas?hutid=21L&sector=in-1&delivery=true")
    let newpizzaarr = [];
    data.forEach((item)=>{
   if((item?.popular === true || item?.new === true) && item?.size === "medium" && item?.crust === "pan"){
    newpizzaarr.push(item);
   }
    })
    return(
        <div style = {{display:"flex", flexWrap : "wrap"}}>
    
        {newpizzaarr.map((item)=>{
    
        return(
        item.popular ?    
        <Pizzaitem item = {item} id = {item?.id} kind = {item?.kind} size = {item?.size} price = {item?.price}/>:
        <PopularPizzaItem item = {item} id = {item?.id} kind = {item?.kind} size = {item?.size} price = {item?.price}/>
       
    
    )
    })
    }
                
    
            </div>
        )
}
   
 
 
 export default Pizza;










