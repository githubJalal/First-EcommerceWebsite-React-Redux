import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom"
import { DATA } from "../DATA"

const Products = () => {

  const cardItem = (item) => {
    return (
      <Card className='card mb-4 py-3 px-1' key={item.id} style={{ width: '18rem' }}>
        <Card.Img variant="top" style={{ height: "19rem" }} src={item.image} alt={item.title} />
        <Card.Body >
          <Card.Title style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{item.title}</Card.Title>
          <p className=" lead fs-4 fw-bold primary">$ {item.price}</p>
          <Link to={`/Products/${item.id}`} className="btn btn-outline-primary">Show Details and Buy</Link>
        </Card.Body>
      </Card>
    )
  }

  return (
    <div>
      <div className='containet py-5'>
        <div className='row '>
          <div className='col-12 text-center'>
            <h1>Products</h1>
            <hr className='mx-5' />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row justify-content-around">
          {DATA.map(cardItem)}
        </div>

      </div>
    </div>
  )
}

export default Products