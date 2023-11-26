import Navbar from "./Componenets/Navbar";
import CartComp from "./Componenets/CartComp";
import Modal from "./Componenets/Modal";
import NavBar from './REDO/Component/Navbar';
import CartContainer from './REDO/Component/CartContainer'
import { useSelector, useDispatch } from "react-redux";
import { calculateTotals } from "./features/cart/cartSlice";
import { CalculateTotals } from "./features/TestCart/testCart";
import { useEffect } from "react";
import { getCartItems } from "./features/cart/cartSlice";

  // create a store js file
  // setup cart slice, think of it as the feature of the app, the bigger our app the more feature we gonna have
  // and this is called slice in redux. So now setup a file called features folder or cart folder which is usually a convention
  // setup a file in this folder called cartSlice.js
  // then setup an initial state propertys

function App() {
  
  const {cartItems, isLoading} = useSelector((store)=>store.cart);
  // const {cartItems} = useSelector((store)=>store.test);
  // const CartItems = useSelector((store)=>store.test.CartItems)
  const {isOpen} = useSelector((store)=>store.modal);
  const open = useSelector((store)=>store.modal.isOpen)
  const dispatch = useDispatch();

    useEffect(()=>{
    dispatch(calculateTotals())
    }, [cartItems]);
  // we invoke the callback anytime there's a change to the cartItems
  // so everytime we update something related to the cartItems we will invoke this useEffect
  // so literally we use this useEffect to dynamically update the calculateTotals

  // thers a bug we have to fix which is to make the totals explicitly in 2 decimal places
  // so go to the cartComp and fix it where u have the {total}

  // next create the modal.js and work on it and place it above the Navbar
  // then go to the cartComp and update it eith the modal

  // mext we will need to fetch API and include promises, promises can be fufilled, pending or failed
  // we will also learn and use asyncThunk
// so go to the cartSlice and import asyncThunk

  //   useEffect(()=>{
  //     dispatch(CalculateTotals())
  //  }, [cartItems]);

  useEffect(()=>{
    dispatch(getCartItems())
  }, []);

  if (isLoading) {
    return(
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    )
  }


 






  return (
    <main>
      {isOpen? (
        <Modal/>
      ) : (false || null)}
      {/* let me explain the way i understand it, if we click on the clear cart button, the openModal action is triggered
      and that sets the isOpen to true so by selecting the discard makes the isOpen false again */}
      
      <Navbar/>
      <CartComp/>
      {/* <NavBar/>
      <CartContainer/> */}

    </main>
  )
}
export default App;
