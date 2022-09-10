import {NavLink} from "react-router-dom"
import {useSelector} from 'react-redux'

const CartBtn = () => {

  //we get a state of addDelItems 
  const state = useSelector((state) => state.rootReducers.handleCart);

  return (
    <div>
      {console.log(state.length)}    

        <NavLink to="/Cart" className="btn btn-outline-primary ms-2">
            <span className="fa fa-shopping-cart me-1"></span> Cart ({state.length})
        </NavLink>
    </div>
  )
}

export default CartBtn