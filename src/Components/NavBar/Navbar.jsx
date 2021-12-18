import React from 'react';
import '../Components.scss';
import logo from './logo.svg';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return(
      <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <Link to={`/`} className="navbar-brand"><img src={logo} alt="" className="logo ms-2 p-0"/></Link>   
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navBar_R" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end " id="navBar_R">
                    <ul className="navbar-nav align-items-center">
                        <Link className="nav-link m-1" to={'/'}>Productos</Link>
                        <Link className="nav-link m-1" to={`/category/ofertas`}>Ofertas</Link>
                        <Link className="nav-link m-1" to={`/category/novedades`}>¡Novedades!</Link>
                        <Link className="nav-link m-1" to={'#'}>Log-In</Link>
                        <Link className="nav-link m-1" to={'/cart'}><CartWidget/></Link>
                    </ul>
                    </div>
                
            </div>
        </nav>
    )
}

export default Navbar

