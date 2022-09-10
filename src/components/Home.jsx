import Products from "./Products"
import CheckOut from './CheckOut'
const Home = () => {
  return (
    <div className=''>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/assets/images/1.jpg" className="d-block w-100" alt="1" height="600px"/>
          </div>
          <div className="carousel-item">
            <img src="/assets/images/2.jpg" className="d-block w-100" alt="2" height="600px" />
          </div>
          <div className="carousel-item">
            <img src="/assets/images/3.jpg" className="d-block w-100" alt="3" height="600px"/>
          </div>
          <div className="carousel-item">
            <img src="/assets/images/4.jpg" className="d-block w-100" alt="4" height="600px"/>
          </div>
          <div className="carousel-item">
            <img src="/assets/images/5.jpg" className="d-block w-100" alt="5" height="600px"/>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <Products />
    </div>
  )
}

export default Home