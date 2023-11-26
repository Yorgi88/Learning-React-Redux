import React from 'react'
import CartItem from './CartItem'
import { useSelector, useDispatch } from 'react-redux'
import { store } from '../store'
// import { clearCart } from '../features/cart/cartSlice'
import { openModal } from '../features/modal/modalSlice'

// since we're importing and using the modal slice. actions we won't need the clearCart anymore






const CartContainer= () => {
    // Comp as in the Composition or Container
    const dispatch = useDispatch();
// we use useDispatch to invoke the actions we've created in the cartSlice.js

    const {cartItems, amount, total} = useSelector((store)=> store.cart);
    if (amount < 1) {
      // so now, if we go to the cartSlice file and change the amount from 0 to 1
      // the if wont be trigerred since the amount ain't less than 1
      return (
        <section className='cart'>

          <header>
            <h2>
              Your bag
            </h2>
            <h4 className='empty-cart'>
              is currently empty
            </h4>
          </header>

        </section>
      )
    }


  return (
    <section className='cart'> 

      <header>
        <h2>
          Your bag
        </h2>
      </header>

      <div>
        {cartItems.map((item)=>{
          return (
            <CartItem key={item.id} {...item}/>
            // next we go to the<CartItem/> file and work on it
            // the spread operation above is to pass in the reat of {item} or should i say the rest of cartItems

          )
        })}
      </div>


      <footer>
        {/* here we will display the cart total */}
        <hr />   {/** means horizontal line */}

        <div className='cart-total'>
        <h4>
          total <span>${total.toFixed(2)}</span>
          {/* to keep the total at 2 decimal places */}
        </h4>
        </div>

        <button className='btn clear-btn' onClick={()=> dispatch(openModal())}>Clear cart</button>

      </footer>
    </section>
    
  )


  // const cartItems = useSelector((store)=> store.cart.cartItems);
  // const amount = useSelector((store)=> store.cart.amount);
  // const total = useSelector((store)=> store.cart.total);

  // if (amount < 1) {
  //   return (
  //     <section className='cart'>

  //       <header>
  //         <h2>Your bag</h2>
  //         <h4 className='empty-cart'>is currently empty</h4>
  //       </header>

  //     </section>
  //   )
  // }


  // return (
  //   <section className='cart'>
  //     <header>
  //       <h2>Your bag</h2>

  //     </header>

  //     <div>
  //       {cartItems.map((item)=>{
  //         return(
  //           <CartItem key={item.id} {...item}/>
  //         )
  //       })}
  //     </div>



  //     <footer>
  //       <hr/>
  //       <div className='cart-total'>
  //       <h4>total <span>${total}</span></h4>
  //       </div>
  //       <button className='btn clear-btn'>Clear cart</button>
  //     </footer>
  //   </section>
  // )




}

export default CartContainer;