import Link from 'next/link'

const Header = () =>{

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" >Booking</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link href="/" >
                <a className="nav-link active" aria-current="page" >Home</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/driver/login" >
                  <a className="nav-link" >Driver Login</a>
                </Link>
              </li>
              <li className="nav-item">
              <Link href="/user/login" >
                <a className="nav-link" >User Login</a>
              </Link>
              </li>
              <li className="nav-item">
              <Link href="/user/dashboard" >
                <a className="nav-link" >User Dashboard</a>
              </Link>
              </li>
              <li className="nav-item">
              <Link href="/driver/dashboard" >
                <a className="nav-link" >Driver Dashboard</a>
              </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default Header;