import React from 'react'
import { NavLink } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { delFromCart } from '../redux/actions/index'

const Cart = () => {
  const state = useSelector((state) => state.rootReducers.handleCart)
  const dispatch = useDispatch()

  const handleClose = (item) => {
    dispatch(delFromCart(item))
  }

  const cartItems = (cartItem) => {
    return (
      <div className="w-100 px-4 my-2 bg-light rounded-4 border" key={cartItem.id}>
        <div className="container py-4">
          <button onClick={() => handleClose(cartItem)} type="button" class="btn-close float-end" aria-label="Close"></button>
          <div className="row justify-content-between">
            <div className="col-md-2">
              <img src={cartItem.image} alt={cartItem.title} height="110px" width="100px" />
            </div>
            <div className="col-md-8">
              <h3 className='text-danger'>{cartItem.title}</h3>
              <p className='text-success fw-bold fs-4'>$ {cartItem.price}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const emptyCart = () => {
    return (
      <div className="px-4 my-5 bg-light rounded-3" >
        <div className="container py-4">
          <div className="row">
            <h3>Your cart is Empty.....</h3>
          </div>
        </div>
      </div>
    );
  }

  const checkOut = () => {
    return(
      <div className="container">
        <div className="row">
          <NavLink to={"/CheckOut"} className="btn btn-outline-primary my-3 py-2 fs-5">
            Proceed to checkOut</NavLink>
        </div>
      </div>
    )
  }
  return (
    <div className=' d-flex flex-column align-items-center'>
    
      <div className='d-flex flex-column align-items-center '>
        {state != 0 ? state.map(cartItems) : emptyCart()}
      </div>

      <div className='w-50 d-flex align-items-center justify-content-between gap-3'>
        <NavLink to={"/Products/"} className="w-100 btn btn-outline-primary my-3 py-2 fs-5">
          Back to Product List </NavLink>
        {state !== 0 && checkOut() }
      </div>
    </div>
  )
}

export default Cart