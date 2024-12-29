import { useEffect, useState } from "react";
const Slides = ()=>{

    const [data, setData] = useState([]);

    useEffect(()=>{

        const fetchdata = async()=>{
            const Response = await fetch("https://api.pizzahut.io/v2/products/sides?hutid=21L&sector=in-1&delivery=true&filter={%22subtype%22:%22side%22}")
            const data = await Response.json();
            setData(data);
        }
        fetchdata ();

    },[])

    

    let newslideaarr = [];
data.forEach((item)=>{
   if(item?.new === true){
    newslideaarr.push(item);
   }
})

    return(
        <div style = {{display:"flex", flexWrap : "wrap"}}>


    {newslideaarr.map((item)=>{

    return(
    <div  key = {item?.id} className = "pizzbox">
    <img src = "https://api.pizzahut.io/v1/content/en-in/in-1/images/side/baked-cheesy-momo-veg-single.e26a0726b7f0d552071d026b531f30d9.1.jpg?width=600" alt = "pizza-image" width = "250px"></img>
    <h2>{(item?.kind).toUpperCase()}</h2>
    <h3>Size: {item?.size}</h3>
    <h3>Price: ₹{item?.price}</h3>
     <button className = "pizzaboxbut"> Add </button>
    </div>

)
})
}
            

        </div>
    )
}

export default Slides;