import { useRef , useState} from "react";
import { Link, useNavigate} from "react-router-dom";
import { useLocationContext } from "./locationProvider";
import { useSelector } from "react-redux";
import '@fortawesome/fontawesome-free/css/all.min.css';

const Header = ()=>{
  const navigate = useNavigate();
 
  const items = useSelector(state => state.cart.cart)


  const { location, click } = useLocationContext();
  
  const handleHome = ()=>{
   
    navigate('/');

  }

  const handlecart = ()=>{
    navigate('/order/cart')

  }

  
   
  

    return(
        <div>
        { click ?
        <header >

        <div className = "Header">
        <div className = "logo">    
        <img src = "https://static.vecteezy.com/system/resources/previews/045/383/386/non_2x/a-cheesy-delicious-pizza-with-tasty-pepperoni-on-a-transparent-background-png.png" alt = ""></img>                   
        <h1 style = {{color:'red', fontFamily: "'Indie Flower', cursive",marginBottom:'30px'}}  onClick = {handleHome}> PIZZA-HOME</h1> 
        
        </div>   
        <p className = "address"> {location} </p>          
        <p className = "signin " ><Link to = "./signin">Sign in</Link></p>
        <p className = "cart"  onClick = {handlecart}>  🛒  {items.length} </p>
       

        </div>
        <div style = {{display: "flex"}}>
        <div className = "pizza"> 
       
          
          <p> <Link to = "./order/pizza">Pizzas </Link></p>
          
          
        </div>
        <div className = "pizza"> 

          <p> <Link to = "./order/slides">slides </Link></p>
        </div>
        <div className = "pizza"> 
          <p>Pasta</p>
        </div>
        <div className = "pizza"> 
          <p>Deserts</p>
        </div>
        <div className = "pizza"> 
          <p>Drinks</p>
        </div>
        <div className = "pizza"> 
          <p>Deals</p>
        </div>
        </div>

        
      </header> 
    

      :
              <header className = "Header">
              <div className = "logo">    
              <img src = "https://static.vecteezy.com/system/resources/previews/045/383/386/non_2x/a-cheesy-delicious-pizza-with-tasty-pepperoni-on-a-transparent-background-png.png" alt = ""></img>                   
              <h1 style = {{color:'red', fontFamily: "'Indie Flower', cursive",marginBottom:'30px'}} onClick = {handleHome} > PIZZA-HOME</h1> 
              
              </div>   
              <p className = "address"> {location} </p>          
              <p className = "signin "><Link to = "./signin">Sign in </Link></p>
              
              <p className = "cart"  onClick = {handlecart}>  🛒  {items.length} </p>

            </header>

}
        </div>
    )
}
export default Header;