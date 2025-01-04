import { useDispatch } from "react-redux";
import { addCard } from "./cardSlice";
const Iteminfo = ({item, closemodel})=>{



  const dispatch = useDispatch();
  const handlecart = (item)=>{
      dispatch(addCard(item));
     
  }
    
    return(


        <div className="modal-overlay">
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img src = "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/momo-mia-veg.4e51f4733bea47a514c107c9fd2341e3.1.jpg?width=600" width = "200px"></img>
        <button className="close-btn" onClick={closemodel}>X</button>
          <h2>{item.id}</h2>
          <p>{ "Price: " + item.price}</p>
          <button className = "pizzaboxbut" onClick = { ()=>{handlecart(item)}}> Add </button>
        </div>
      </div>


    )
}

export default Iteminfo;


