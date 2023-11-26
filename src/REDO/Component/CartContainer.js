import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { stores } from '../Store'
// import CartItem from '../Component/CartItem'
import CartItemm from './CartItemm'
import { store } from '../../store'
// import { clearAllCart } from '../../features/TestCart/testCart'

// import { clearCart } from '../Features/Cart/CartSlice'
// import { clearAllCart } from '../../features/cart/cartSlice'
import { clearAllCart } from '../../features/TestCart/testCart'


const CartContainer = () => {
    // const {amount, total, cartItems} = useSelector((stored)=>stored.cart);
    // const {amount, total, cartItems} = useSelector((store)=>store.cart2)
    const {amount, total, cartItems} = useSelector((store)=>store.test);

    // const {amount, total, cartItems} = useSelector((store)=>store.cart);

    
    const DispatchActions = useDispatch();



if (amount < 1){
    return(
    <section className='cart'>
        <header>
            <h2>Your bag</h2>
            <h4 className='empty-cart'>is currently empty</h4>
        </header>

    </section>
    )
}



  return (
    <section className='cart'>
        <header>
            <h2>Your bag</h2>
        </header>

        <div>
            {cartItems.map((content)=>{
                return (
                    <CartItemm key={content.id} {...content}/>
                )
            })}
        </div>
   
    

        <footer>
            <hr/>
            <div className='cart-total'>
                <h4> total <span>${total.toFixed(2)}</span>

                </h4>
            </div>

            <button className='btn clear-btn' onClick={()=> DispatchActions(clearAllCart())}>clear cart</button>
        </footer>
    </section>

  )
}

export default CartContainer;