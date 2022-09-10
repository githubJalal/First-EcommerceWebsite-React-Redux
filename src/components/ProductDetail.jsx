import { useState } from 'react';
import { useParams, NavLink } from 'react-router-dom'
import { DATA } from "../DATA"

import { useDispatch } from 'react-redux'
import { addToCart,delFromCart } from '../redux/actions/index'

const ProductDetail = () => {
    const [cartBtn, setCartBtn] = useState("Add to Cart");

    const proId = useParams();
    const proDetail = DATA.filter(x => x.id.toString() === proId.id.toString())
    const product = proDetail[0];

    const dispatch = useDispatch()
    const handleProductToCart = (product) => {
        if (cartBtn === "Add to Cart") {
            dispatch(addToCart(product))
            setCartBtn("Remove from Cart")
        } else {
            dispatch(delFromCart(product))
            setCartBtn("Add to Cart")
        }
    }

    return (
        <div className='ProductDetail'>
            <div className="container my-5 py-3">
                <div className="row">
                    <div className="img col-md-6 d-flex justify-content-center mt-5 mx-auto">
                        <img src={product.image} alt={product.title} height="400px" width="350px" />
                    </div>
                    <div className="col-md-6 d-flex flex-column justify-content-center">
                        <h1 className='display-6 fw-bold'>{product.title}</h1>
                        <hr />
                        <p className='lead fs-4'>{product.description}</p>
                        <p className='fs-4 fw-bold'>$ {product.price}</p>

                        <div className='text-monospace fs-4'>
                            <span className='me-2 fa fa-star text-warning d-inline'></span>
                            <p className='me-2 d-inline'>{product.rating.rate}</p>
                            <p className='d-inline '>{product.rating.count}</p>
                        </div>

                        <p className=' fs-4 text-secondary'>category:
                            <span className='text-danger'> {product.category}</span></p>

                        <button onClick={() => handleProductToCart(product)}
                            className="btn btn-outline-primary mt-3 py-3 fs-5">{cartBtn}</button>
                        
                        <div className='d-flex justify-content-between gap-3'>
                            <NavLink to={"/Products/"} className="btn btn-outline-primary w-50 my-3 py-3 fs-5">Back to Product List</NavLink>
                            <NavLink to={"/Cart"} className="btn btn-outline-primary w-50 my-3 py-3 fs-5">Go to Cart</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail