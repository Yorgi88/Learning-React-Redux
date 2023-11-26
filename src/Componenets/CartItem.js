import React from 'react';
import { ChevronDown, ChevronUp } from '../icons';
import { removeItem, increase, decrease } from '../features/cart/cartSlice';
import { useDispatch } from 'react-redux';
// go to the CartContainer and import this file
const CartItem = ({id, title, price, img, amount}) => {
  // so we destructure the props from the chevronDown and up

  const dispatch = useDispatch();
  return (
    <article className='cart-item'>
      <img src={img} alt={title}/>

      <div>
        <h4>{title}</h4>
        <h4 className='item-price'>${price}</h4>

        <button className='remove-btn' onClick={()=> dispatch(removeItem(id))}>remove</button>
      </div>

      {/* now we wanna set-up the buttons to increase or decrease right after the div
      we will but a <p> in between */}
      <div>
        <button className='amount-btn' onClick={()=> dispatch(increase({id}))}>
          <ChevronUp/>
        </button>
        
        <p className='amount'>{amount}</p>

        <button className='amount-btn' onClick={()=> {
            if (amount === 1) {
              dispatch(removeItem(id));
              // so wen we click on the decrease button below 1 it removes the item from the cart
              return;
              // we pass in the return below because we don't want to continue reading the code
            }
            dispatch(decrease({id}))}
        }>
          {/* with the onClick feature we added for the decrease, we discover that we're  going negative 
          sp lets fix that by tieing it to the {amount}*/}
          <ChevronDown/>
        </button>
      </div>

    </article>
  )
}

export default CartItem