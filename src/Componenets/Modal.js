import React from 'react'
import { clearCart } from '../features/cart/cartSlice';
import { useDispatch } from 'react-redux';
import { cancelModal } from '../features/modal/modalSlice';
// remember in the cartComp we have removed the clearCart and repllaced it with the open modal
// so wen we click on the clearCart button this modal file is trigerred
// and from here we can import the clearCart action and the closeModal

const Modal = () => {
  const dispatch = useDispatch();
  return (
    <aside className='modal-container'>
        <div className='modal'>
            <h4>Remove all items from your shopping cart?</h4>

            <div className='btn-container'>
                <button type='button' className='btn confirm-btn' onClick={()=>{
                  dispatch(clearCart());
                  dispatch(cancelModal());
                }}>confirm</button>
                {/* for the confirm button we wanna do two things, clear the cart and close the modal */}
                <button type='button' className='btn clear-btn' onClick={()=>{
                  dispatch(cancelModal())
                }}>discard</button>
                {/* here we wanna close the modal */}
            </div>
            {/* so next we go to the features folder and add the modal slice file and create its actions and reducers */}

        </div>
    </aside>
  )
}

export default Modal;