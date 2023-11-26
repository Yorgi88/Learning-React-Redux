
// import ChevronUp from '../Icons'
// import ChevronDown from '../Icons'
import { ChevronUp, ChevronDown } from '../Icons'
import { useDispatch } from 'react-redux'
// import { removeItems } from '../Features/Cart/CartSlice'
import { removeItem } from '../../features/cart/cartSlice'
// import { removeItems } from '../Features/Cart/CartSlice'
import { removeItems, increment, decrement } from '../../features/TestCart/testCart';


const CartItemm = ({id, title, price, img, amount}) => {
  const dispatch = useDispatch();

  return (
    <article className='cart-item'>
        <img src={img} alt={title}/>
      <div>
      
        <h4>{title}</h4>
        <h4 className='item-price'>${price}</h4>

        <button className='remove-btn' onClick={()=> dispatch(removeItems(id))}>remove item</button>
     </div>
      <div>
        <button className='amount-btn' onClick={()=> dispatch(increment({id}))}>
          <ChevronUp/>
        </button>

        <p className='amount'>{amount}</p>

        <button className='amount-btn' onClick={()=>{
          if (amount === 1) {
              dispatch(removeItems(id))
              return;
          }

          dispatch(decrement({id}));
        }}>
          <ChevronDown/>
        </button>
      </div>
   
    </article>


  )
}

export default CartItemm;