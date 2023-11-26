// you import configureStore from the redux toolkit
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";

// import './features/cart/cartSlice';
// import cartReducer from './features/cart/cartSlice'
import { cartReducer} from "./features/cart/cartSlice";
import modalSlice from "./features/modal/modalSlice";
import { testSlice } from "./features/TestCart/testCart";

// we gonna access the data in the reducer in the cartSlice 



 export const store = configureStore({
    reducer: {
        cart: cartReducer,
        modal: modalSlice,
        test: testSlice,
        
    },
})

// export const store = combineReducers({
//     cart: cartReducer,
//     cart2: [cartReducer2],
    
// })

