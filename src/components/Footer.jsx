const Footer = () => {

  return (    
    <footer className="page-footer font-small blue pt-4">
      <hr className="text-muted m-5"/>
      <div className="container-fluid text-center text-md-left">
        <div className="row">
          <div className="col-md-6 mt-md-0 mt-3">
            <h5 className="text-uppercase">Footer Content</h5>
            <p>Here you can use rows and columns to organize your footer content.</p>
            <div className="text-primary mt-4 fs-5 d-flex justify-content-center align-items-center gap-4">
            <span className='fa fa-facebook'></span>
            <span className='fa fa-twitter'></span>
            <span className='fa fa-instagram'></span>
            <span className='fa fa-telegram'></span>
            <span className='fa fa-whatsapp'></span>
            </div>
          </div>

          <hr className="clearfix w-100 d-md-none pb-0" />

          <div className="col-md-3 mb-md-0 mb-3">
            <h5 className="text-uppercase">Links</h5>
            <ul className="list-unstyled">
              <li><a className="a" href="#!">Link 1</a></li>
              <li><a className="a" href="#!">Link 2</a></li>
              <li><a className="a" href="#!">Link 3</a></li> 
            </ul>
          </div>

          <div className="col-md-3 mb-md-0 mb-3">
            <h5 className="text-uppercase">Links</h5>
            <ul className="list-unstyled">
              <li><a className="a" href="#!">Link 1</a></li>
              <li><a className="a" href="#!">Link 2</a></li>
              <li><a className="a" href="#!">Link 3</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-copyright text-center pt-2 pb-4">© 2020 Copyright:
        <a className="a"  href="#"> My Site</a>
      </div>

    </footer>
  )
}

export default Footer