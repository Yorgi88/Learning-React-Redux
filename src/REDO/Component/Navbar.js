import { useSelector } from 'react-redux'
import React from 'react'
// import { CartIcon } from '../Icons'
// import CartIcon from '../../icons '
import CartIcon from '../Icons'
import { stores } from '../Store'

const Navbar = () => {
    // const {amount} = useSelector((stores)=>stores.cart)
    // const amount = useSelector((stores)=>stores.cart.amount)
    // const {amount} = useSelector((stored)=>stored.cart)
    // const {amount} = useSelector((store)=>store.cart2)
   
//    const {amount} = useSelector((store)=>store.test)
   const amount = useSelector((store)=>store.test.amount)
  return (
    <nav>
        <div className='nav-center'>
            <h3>E-Commerce store</h3>
        

        <div className='nav-container'>
            <CartIcon/>
            <div className='amount-container'>
                <p className='total-amount'>{amount}</p>
            </div>
        </div>
        </div>
    </nav>
  )
}

export default Navbar