import logo from "../assets/logo/logo.png";
function MainNav() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light animate__animated">
        <div className="container">
          <a className="navbar-brand" href="/"><img alt="Website logo" src={logo} /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav" aria-controls="nav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="nav">
            <li className="nav-item">
              <input type="search" className="form-control" placeholder="Search for products" />
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/"><i className="fa-solid fa-heart"></i></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/"><i className="fa-solid fa-user"></i></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/"><i className="fa-solid fa-cart-shopping"></i></a>
              <span className="count">4</span>
            </li>
            <li className="nav-item">
              <small>My Cart</small>
              <a className="nav-link" href="/">$0.00</a>
            </li>
          </div>
        </div>
      </nav>
    </>
  )
}

export default MainNav;