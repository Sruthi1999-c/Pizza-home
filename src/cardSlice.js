import { createSlice} from "@reduxjs/toolkit";
const initialState = {
    cart: [],
  };
const cartSlice = createSlice({

    name : 'cart',
    initialState,
    reducers: {
        addCard:(state, action) =>{
            state.cart.push(action.payload); 
        },
        removeCard:(state, action)=>{
            state.cards = state.cart.filter(card => card.id !== action.payload)

        }

    }

})


export const {addCard, removeCard} = cartSlice.actions;
export default cartSlice.reducer;