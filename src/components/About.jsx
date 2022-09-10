import {NavLink} from "react-router-dom"

const About = () => {
  return (
    <div>
      <div className='container py-5 my-5'>
        <div className='row'>
          <div className='col-md-6'>
            <h1 className="text-primary fw-bold mb-4">About Us</h1>
            <p className="mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut sed aliquam esse, officia enim tempore exercitationem, officiis non modi impedit, necessitatibus quae dolorum! Mollitia hic iusto quos pariatur cum molestias dignissimos! Itaque est, earum rem quis asperiores laboriosam! Debitis iure saepe odio quia officia error, doloremque consequatur atque sit recusandae officiis repudiandae pariatur ea non iste maxime dolorum molestias vel, quae necessitatibus cupiditate aut expedita neque. Obcaecati, accusantium totam aspernatur iusto quae nisi atque facilis inventore reprehenderit, sequi cupiditate at nostrum tempora sapiente voluptatibus eaque blanditiis placeat voluptatem? Ullam, commodi. Tenetur temporibus minima vel optio a repellat ea modi dolorum!
            </p>
            <NavLink className="link btn btn-outline-primary" to={"/Contact"}>Contact Us</NavLink>
          </div>

          <div className="col-md-6 ">
            <img src="/assets/images/about.jpg" alt="About Us" height="450px" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About