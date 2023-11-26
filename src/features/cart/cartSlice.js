// import {createSlice} from '@reduxjs/toolkit'
import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import cartItems from "../../REDO/CartItems";
import CartItems from "../../REDO/CartItems";
// go to the store.js and import this file there


// this will take in two things, the type and the callback function


const initialState = {
    // from the cartItems.js we make the carItems: cartItems
    cartItems: [],
    amount: 110 ,//how many items of a particilar product is available
    total: 0,
    isLoading: true,
    

// this is a reducer

};


// const initialStates = {
//     CartItems: CartItems,
//     amount: 0,
//     total: 0,
//     isLoading: true,


// };


const url = 'https://course-api.com/react-useReducer-cart-project';
// we gonna fetch data from the url
// next we createAsyncThunk and set it equal to our function

export const getCartItems = createAsyncThunk('cart/getCartItems', ()=> {
    return fetch(url)
    .then(resp => resp.json())
    // .then is triggered if the the loadup is successful
    .catch((err)=> console.log(err))
})






const cartSlice = createSlice({
    name: 'cart',
    initialState,


    // we will start to create the actions 
// note that useDispatch helps to invoke the actions
    reducers: {
        clearCart: (state) => {
            state.cartItems = []
            console.log(state);
            // this clears the cart items in our application
        },

        removeItem: (state, action) =>{
            // this is to remove items from the cart
            const ItemId = action.payload   //i think action.payload represents something like the uuid
            // state.cartItems = state.cartItems.filter((item)=>{
            //     return(
            //         item.id !== ItemId
            //     )
            // })

            // another way of simplifying the above code using implicit return is

            state.cartItems = state.cartItems.filter((item)=> item.id !== ItemId)
            console.log(action);
            console.log(state);
            // go to the CartItem file and import this particular action there
        },

        increase: (state, {payload}) => {
            const cartItem = state.cartItems.find((item)=>{
                return(
                    item.id === payload.id
                )
            })
            cartItem.amount = cartItem.amount + 1

            console.log(state);
        },
        

        decrease: (state, {payload}) => {
            const cartItem = state.cartItems.find((item)=>{
                return(
                    item.id === payload.id
                )
            })
            cartItem.amount = cartItem.amount - 1

            console.log(state);
        },

        // next, we wanna calculate the totals
        // u use foreach wen u wanna perform some specific action on each elemnt of an array
        
        calculateTotals: (state) => {
            let amount = 0;
            let total = 0;
            
            state.cartItems.forEach((item)=>{
                amount += item.amount;
                total += item.price * item.amount;
            })
            state.amount = amount;
            state.total = total;
            
            
            // so go to the app.js and set it up,  don't forget to grab the useSelector and useDispatch.
            // we gonna also use useEffect
            console.log(state);
        },
        
        
    },
    extraReducers: (builder)=>{
        // using the builder callback notation

        builder.addCase(getCartItems.pending,(state)=>{
            state.isLoading = true;
        }).addCase(getCartItems.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.cartItems = action.payload;

        }).addCase(getCartItems.rejected, (state, action)=>{
            console.log(action);
            state.isLoading = false;
        })


        
    },



    //  WE FUCKIN DONE!!









    // note that after reducers, the property name is called extraReducers
    // extraReducers: {
    //     // note that there are 3 life cycles pending, fufilled, failed
    //     [getCartItems.pending] : (state, action) => {
    //         state.isLoading = true;
    //     },

    //     [getCartItems.fulfilled] : (state, action) => {
    //         state.isLoading = false;
    //         state.cartItems = action.payload
    //     },

    //     [getCartItems.rejected] : (state, action) => {
    //         state.isLoading = false;
    //     }
    //     // once done go to the app js and import the getCartItems
    // }
    
});




// extraReducers: (builder) => {
//     builder
//       .addCase(incrementBy, (state, action) => {
//         // action is inferred correctly here if using TS
//       })
//       // You can chain calls, or have separate `builder.addCase()` lines each time
//       .addCase(decrement, (state, action) => {})
//       // You can match a range of action types
//       .addMatcher(
//         isRejectedAction,
//         // `action` will be inferred as a RejectedAction due to isRejectedAction being defined as a type guard
//         (state, action) => {}
//       )
//       // and provide a default case if no other handlers matched
//       .addDefaultCase((state, action) => {})
//   },

// WORK ON THESE LATER FOR FUN

export const cartReducer = cartSlice.reducer;
export const {clearCart, removeItem, increase, decrease, calculateTotals} = cartSlice.actions;

// export const {clearCart, removeItem, increase, decrease, calculateTotals} = cartSlice.actions;
// export default cartSlice.reducer;

// export const cartReducer = cartSlice.reducer;
// export const {clearCart, removeItem, increase, decrease, calculateTotals} = cartSlice.actions;




// const CartSlice2 = createSlice({
//     name: 'cart2',
//     initialStates,

//     reducers: {
//         clearAllCart: (state)=>{
//             state.CartItems = [];
//         },

//         removeItems: (state, action)=>{
//             const itemid = action.payload;
//             state.CartItems = state.CartItems.filter((item)=>{
//                 return(
//                     item.id !== itemid
//                 )
//             })
//         }

    
//     }
// });

// export const cartReducer2 = CartSlice2.reducer;
// export const {clearAllCart, removeItems} = CartSlice2.actions







// console.log(cartSlice);













// const initialState = {
//     counter: 0
// }

// const counterSlice = createSlice({
//     name: "counter",
//     initialState,
    
//     reducers: {
//         increment: (state)=> {
//             state.counter +=1
//         },

//         decrement: (state)=>{
//             state.counter -=1
//         }

    
//     }
// })

// export const {increment, decrement} = counterSlice.actions;
// export default counterSlice.reducer









