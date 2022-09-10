import { useEffect,useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom"
import axios from 'axios';

const Products = () => {
  const dataAddress = 'https://fakestoreapi.com/products';
  const [productList, setProductList] = useState([])

  useEffect(() => {
    axios.get(dataAddress)
      .then((data) => {
        console.log(data.data)
        setProductList(data.data)
      })
      .catch((error) => (console.log(error)))
  }, [])


  const cardItem = (item) => {
    return (
      <Card className='card mb-4 py-3 px-1' key={item.id} style={{ width: '18rem' }}>
        <Card.Img variant="top" style={{ height: "19rem" }} src={item.image} alt={item.title} />
        <Card.Body >
          <Card.Title style={{fontWeight:'600', color:"#15104F", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{item.title}</Card.Title>
          <p className=" lead fs-4 fw-bold primary">$ {item.price}</p>
          <Link to={`/Products/${item.id}`} className="btn btn-outline-primary">Show Details and Buy</Link>
        </Card.Body>
      </Card>
    )
  }

  return (
    <div className=''>
      <div className='containet py-5'>
        <div className='row '>
          <div className='col-12'>
            <h1 style={{marginLeft:"5rem"}}>Product List</h1>
            <hr className='text-muted mx-5 mt-5' />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row justify-content-around">
          {productList.map(cardItem)}
        </div>

      </div>
    </div>
  )
}

export default Products