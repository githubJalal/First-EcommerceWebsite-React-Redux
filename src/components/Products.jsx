import { useEffect, useState } from "react";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { Link } from "react-router-dom";
import axios from "axios";

const Products = () => {

  const ApiDataAddress = 'https://fakestoreapi.com/products';
  const [productList, setProductList] = useState([])
  const [filter, setFilter] = useState(productList)
  const [loading, setLoading] = useState(false)
  let componentMounted = true;

  useEffect(() => {
    setLoading(true);
    axios.get(ApiDataAddress)
      .then((data) => {
        if (componentMounted) {
          setProductList(data.data)
          setFilter(data.data);
          setLoading(false);
        }
        return () => {
          componentMounted = (false);
        }
      })
      .catch((error) => (console.log(error)))
  }, [])

  const Loading = () => {
    return (
      <>
        <div className="col-md-3 ">
          <Skeleton height="350px" />
        </div>
        <div className="col-md-3 ">
          <Skeleton height="350px" />
        </div>
        <div className="col-md-3 ">
          <Skeleton height="350px" />
        </div>
        <div className="col-md-3 ">
          <Skeleton height="350px" />
        </div>
      </>
    )
  }

  const filterProduct = (cat) => {
    const updatedList = productList.filter((x) => x.category === cat)
    setFilter(updatedList)
  }

  const ShowProducts = () => {
    return (
      <>
        {filter.map((Product) => {
          return (
            <>
              <div className="col-md-3 mb-4">
                <div className="card h-100 text-center p-3" key={Product.id}>
                  <img src={Product.image} className="card-img-top" alt={Product.title} height="330px" />
                  <div className="card-body d-flex flex-column  align-items-start gap-2">
                    <h5 style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}
                      className="card-title fw-bold text-primary mb-0">{Product.title.substring(0, 21)}...</h5>
                    <p className="card-text lead fw-bold">$ {Product.price}</p>
                    <Link to={`/Products/${Product.id}`} className="btn btn-outline-success fs-5 w-100">Buy Now</Link>
                  </div>
                </div>
              </div>
            </>
          )
        })}
      </>
    )
  }


  return (
    <div className="container my-5 py-5">

      <div className="row">
        <div className="col-12 mb-5">
          <h1 className="display-6 fw-bolder ">Latest Products List: </h1>
          <hr />
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="buttons d-flex justify-content-center mb-5 pb-5 gap-2">
          <button className="btn btn-outline-dark" onClick={() => setFilter(productList)}>All</button>
          <button className="btn btn-outline-dark" onClick={() => filterProduct("men's clothing")}>men's clothing</button>
          <button className="btn btn-outline-dark" onClick={() => filterProduct("women's clothing")}>women's clothing</button>
          <button className="btn btn-outline-dark" onClick={() => filterProduct("jewelery")}>jewelery</button>
          <button className="btn btn-outline-dark" onClick={() => filterProduct("electronics")}>electronics</button>
        </div>
        {loading ? <Loading /> : <ShowProducts />}
      </div>

    </div>
  )
}

export default Products