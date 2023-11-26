import { createSlice } from "@reduxjs/toolkit";
// import cartItems from "../../cartItems";
// import CartItems from "../../CartItems";
import cartItems from '../../REDO/CartItems'


const initialState = {
    cartItems: cartItems,
    amount: 0,
    total: 0,
    isLoading: false

};


const testCartSlice = createSlice({
    name: 'cart',
    initialState,



    reducers: {
        clearAllCart: (state) => {
            state.cartItems = []
            console.log(state);
            // this clears the cart items in our application
        },

        removeItems: (state, action) =>{
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

        increment: (state, {payload}) => {
            const cartItem = state.cartItems.find((item)=>{
                return(
                    item.id === payload.id
                )
            })
            cartItem.amount = cartItem.amount + 1

            console.log(state);
        },
        

        decrement: (state, {payload}) => {
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
        
        CalculateTotals: (state) => {
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
//        },



//        increment: (state, {payload})=>{
//         const increaseItem = state.CartItems.find((incItem)=>{
//             return (
//                 incItem.id === payload.id
                
//             )
//         })
//         increaseItem.amount = increaseItem.amount + 1

//         console.log(state);
//        },

//        decrement: (state, {payload})=>{
//         const increaseItem = state.CartItems.find((incItem)=>{
//             return (
//                 incItem.id === payload.id
                
//             )
//         })
//         increaseItem.amount = increaseItem.amount - 1
//         console.log(state);
//        },

//        CalculateTotals: (state) => {
//         let Amount = 0;
//         let total = 0;

//         // CartItems.forEach((item)=> {
//         //     amount += item.amount;
//         //     total += item.amount * item.price;
//         // });

//         CartItems.forEach((item)=>{
//             Amount += item.amount;
//             total += item.price * item.amount;
//         })

//         state.amount = Amount;
//         state.total = total;

//         console.log(state);
//    },

       
//     }
});

// export default CartSlice.reducer
export const testSlice = testCartSlice.reducer;
export const {removeItems, clearAllCart, increment, decrement, CalculateTotals} =  testCartSlice.actions;