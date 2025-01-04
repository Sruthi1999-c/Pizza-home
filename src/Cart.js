
import { useSelector } from "react-redux";
const Cart = ()=>{
    const cartitems = useSelector(state => state.cart.cart)
    return (
<div>
{cartitems.map( (item) =>{
    return(
                <div>
                    <h1>{item.kind}</h1>
                    <h2>{item.price}</h2>


               </div>
)
}
)
}
</div>
    )
    
}

export default Cart;