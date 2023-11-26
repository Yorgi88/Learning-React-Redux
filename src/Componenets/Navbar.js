// import { CartIcon } from "../icons";
import { CartIcon } from "../icons";
import { useSelector } from "react-redux";

import React from 'react'

const Navbar = () => {
    // we wanna access the entire state of our application
    // console.log(useSelector((store)=>{
    //     console.log(store);
    //     // i think with configureStore, u can just dynamically import and access our store.js
    //     // so we say below store.cart to access the values of the cart

    // }));
    
    const amount = useSelector((store)=>store.cart.amount)
    // we are accessing the amount value in the store.js


  return (
    <nav>
        <div className="nav-center">
            <h3>
                Redux Toolkit
            </h3>
            <div className="nav-container">
                <CartIcon/>

                <div className="amount-container">
                    <p className="total-amount">{amount}</p>
                </div>

            </div>
        </div>
    </nav>
  )
}

export default Navbar