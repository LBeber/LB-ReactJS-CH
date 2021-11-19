import React from 'react';
import './Navbar.scss';
import logo from './logo.svg';



const Navbar = () => {
    return(
      <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><img src={logo} alt="" className="logo ms-2 p-0"/></a>   
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navBar_R" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-end" id="navBar_R">
                    <div className="navbar-nav">
                        <a className="nav-link" href="#">Productos</a>
                        <a className="nav-link" href="#">Nosotros</a>
                        <a className="nav-link" href="#">Contacto</a>
                    </div>
                    <div className="navbar-nav">
                        <a className="nav-link" href="#">Log-In</a>
                        <a className="nav-link" href="#">Carrito</a>
                    </div>
                    </div>
                
            </div>
        </nav>
    )
}

export default Navbar

