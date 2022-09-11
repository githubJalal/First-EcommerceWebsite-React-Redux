import { useState, useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, delFromCart } from '../redux/actions/index'
import Skeleton from 'react-loading-skeleton'
import axios from 'axios';

const ProductDetail = () => {
    const state = useSelector((state) => state.rootReducers.handleCart);
    const ApiDataAddress = 'https://fakestoreapi.com/products';
    const [cartBtn, setCartBtn] = useState("Add to Cart");
    const proId = useParams();
    const dispatch = useDispatch()
    const [productList, setProductList] = useState([])
    const [loading, setLoading] = useState(true)
    let componentMounted = true;

    useEffect(() => {
        setLoading(true);
        axios.get(ApiDataAddress)
            .then((data) => {
                if (componentMounted) {
                    setProductList(data.data)
                    setLoading(false);
                }
                return () => {
                    componentMounted = (false);
                }
            })
            .catch((error) => (console.log(error)))
    }, [])
    const proDetail = productList.filter(x => x.id.toString() == proId.id.toString())
    const product = proDetail[0];

    const handleProductToCart = (product) => {
        if (cartBtn === "Add to Cart") {
            dispatch(addToCart(product))
            setCartBtn("Remove from Cart")
        } else {
            dispatch(delFromCart(product))
            setCartBtn("Add to Cart")
        }
    }

    const Loading = () => {
        return (
            <div className="d-flex justify-content-center align-items-center gap-5">
                <div className="col-md-6">
                    <Skeleton height="500px" />
                </div>
                <div className="col-md-6 mt-5" style={{ lineHeight: 2 }}>
                    <Skeleton height="110px" width="100" />
                    <Skeleton className='mt-4' height="220px" />
                    <Skeleton height="50px" width="150px" />
                    <Skeleton className='mt-3' height="50px" width="150px" />
                    <Skeleton height="50px" width="270px" />
                    <Skeleton className='mt-4' height="70px" />
                    <div className=' d-flex justify-content-between '>
                        <Skeleton height="60px" width="315px" />
                        <Skeleton height="60px" width="315px" style={{ marginLeft: 0 }} />
                    </div>
                </div>
            </div>
        )
    }

    const ShowProduct = () => {
        return (
            <div className='ProductDetail'>
                <div className="container my-5 py-3">
                    <div className="row">
                        <div className="img col-md-6 d-flex justify-content-center align-items-center mt-5 mx-auto">
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
                                <NavLink to={"/Cart"} className="btn btn-outline-primary w-50 my-3 py-3 fs-5">Go to Cart ({state.length})</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="container py-5">
            <div className="row ">
                <h1>Product Detail:</h1>
                {loading ? <Loading /> : <ShowProduct />}
            </div>
        </div>
    )
}

export default ProductDetail