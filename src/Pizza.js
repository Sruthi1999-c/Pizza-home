
import {useEffect, useState} from "react"


const Pizza = ()=>{

const[data, setData] = useState([]);
useEffect(
    ()=>{
        const fetchdata = async ()=>{
            const response = await fetch("https://api.pizzahut.io/v2/products/pizzas?hutid=21L&sector=in-1&delivery=true")
            const data = await response.json();
            setData(data);
        }
        fetchdata();        
    },[]
)

let newpizzaarr = [];
data.forEach((item)=>{
   if((item?.popular === true || item?.new === true) && item?.size === "medium" && item?.crust === "pan"){
    newpizzaarr.push(item);
   }
})

    return(
        <div>
            <h1>New and Popular</h1>
            <div style = {{display:"flex", flexWrap : "wrap"}}>

        {newpizzaarr.map((item)=>{

            return(
                <div key = {item?.id}  className = "pizzbox">
                <img src = "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/momo-mia-veg.4e51f4733bea47a514c107c9fd2341e3.1.jpg?width=600" alt = "pizza-image" width = "250px"></img>
                <h2>{(item?.kind).toUpperCase()}</h2>
                <h3>Size: {item?.size}</h3>
                <h3>Price: ₹{item?.price}</h3>
                 <button className = "pizzaboxbut"> Add </button>
                </div>

            )
        })
        }
        </div>
        </div>

    )
}
export default Pizza;




