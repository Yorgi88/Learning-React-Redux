// import { createSlice } from "@reduxjs/toolkit";
// import CartItems from "../../CartItems";
// import { v4 as uuidv4 } from "uuid";


// const initialState = {
//     CartItems: CartItems,
//     amount: 0,
//     total: 0,
//     isLoading: false

// };


// const CartSlice = createSlice({
//     name: 'cart',
//     initialState,


//     reducers: {
//         clearAllCart: (state) => {
//             state.CartItems = [];
//         },

//        removeItems: (state, action)=> {
//             const ItemId = action.payload;
//             state.CartItems = state.CartItems.filter((item)=>{
//                 return(
//                     item.id !== ItemId
//                 )
//             })

//             console.log(action);
//        }
//     }
// });

// // export default CartSlice.reducer
// export const CartReducer = CartSlice.reducer;
// export const {removeItems, clearAllCart} =  CartSlice.actions;
// // export const {clearAllCart, removeItems} = CartSlice.actions