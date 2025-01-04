import {configureStore} from '@reduxjs/toolkit'
import cartReducer from './cardSlice';

const Store = configureStore({
    reducer: {
        cart: cartReducer,
    },
})
export default Store;