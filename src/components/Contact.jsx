
const Contact = () => {
  return (
    <div>
      <div className='containet py-3 mb-5'>
        <div className='row '>
          <div className='col-12 py-4 my-4'>
            <h1 className="text-center ">Have Some Question?</h1>
            <hr className='mx-5 ' />

          </div>
        </div>

        <div className="row">
          <div className="col-md-5 d-flex justify-content-center">
            <img src="/assets/images/contactus.jpg" alt="Contact Us" height="400px" width="400px" />
          </div>
          <div className="col-md-6">
            <form action="" onSubmit={(event) => event.preventDefault()}>
              <div class="mb-3">
                <label for="exampleForm" class="form-label">Full Name</label>
                <input type="text" class="form-control" id="exampleForm" placeholder="John Smith"/>
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
              </div>
              <button type="submit" class="btn btn-outline-primary">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact