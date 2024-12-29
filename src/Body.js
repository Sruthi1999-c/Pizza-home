import { Link } from "react-router-dom";
import { useState } from "react";

import { useLocationContext } from "./locationProvider";

const Body = ()=>{ 
  const { setLocation,setClick} = useLocationContext();
 
  const [inputvalue, setInputvalue] = useState('');
  
 

  const handleinputchnage = (e)=>{
    setInputvalue(e.target.value);  
  }
   const  handleinputvalue= ()=>{
    setLocation("Delivering to : " + inputvalue); 
   }

   const onHandleChange =()=>{
    setClick(true);
   }
    return(
        <div>
        <div className = "Body"> 
  
          <div className = "location">
            <h1 style = {{textAlign : 'center', fontSize: '20px', fontFamily: 'Lato'}}>FIND YOUR NEAREST SHOP</h1>
            <p style = {{fontSize: '13px', textAlign: 'center' ,margin: '5px'}}>Enter your address to see your local deals, coupons and offers.</p>    
            <input value = {inputvalue} onChange = { handleinputchnage}  style = {{marginLeft: '50px',height:'70px', borderColor: 'transparent', width: '300px', textAlign: 'center', backgroundColor: '#ECECEC'}} type = "Text" placeholder = "Enter your location for delivery"></input> 
            <button onClick = { ()=>{handleinputvalue();
              onHandleChange()
            }}  className = "button" style = {{marginLeft: '100px',marginTop: '10px',textAlign: 'center', backgroundColor : 'green', color: 'white', borderRadius: '5px', width: '200px', height: '30px', borderColor: 'transparent'}}> <Link to = "/order/pizza">Start my order </Link></button>   
            </div>   
        </div> 
        
  
        <h1 style = {{display: 'flex', justifyContent: 'center'}}>Our Most Popular Deals</h1>
        
        <div className = "belowbody">
          <div className = "imagediv">
            <img src = "https://api.pizzahut.io/v1/content/en-in/in-1/images/promo/one-plus-one-personal.7ca152dd6b8dbd3eca5b843aecc3624d.1.jpg" alt = "" height = "350px"></img>
          </div>
          <div className = "imagediv">
            <img src = "https://api.pizzahut.io/v1/content/en-in/in-1/images/promo/momo-mia-meal-for-1-veg.dd35a76f8b2fc18a3271d5cb870a37fb.1.jpg" alt = "" height = "350px"></img>
          </div>
        </div>
        <div className = "footer">
          <button onClick = { ()=>{onHandleChange()}} className = "button" style = {{backgroundColor: 'blue', color: 'white', width: '300px', height: '40px',borderColor: 'transparent', fontSize: '16px' , borderRadius: '15px'  }} > <Link to = "/order/pizza">View all deals</Link></button>
        </div>        
      </div>
    )
}
export default Body;