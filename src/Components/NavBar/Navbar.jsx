import React from 'react';
import '../Components.scss';
import logo from './logo.svg';
import CartWidget from './CartWidget';


const Navbar = () => {
    return(
      <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><img src={logo} alt="" className="logo ms-2 p-0"/></a>   
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navBar_R" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end " id="navBar_R">
                    <div className="navbar-nav align-items-center">
                        <a className="nav-link m-1" href="">Productos</a>
                        <a className="nav-link m-1" href="">Nosotros</a>
                        <a className="nav-link m-1" href="">Contacto</a>
                        <a className="nav-link m-1" href="">Log-In</a>
                        <a className="nav-link m-1" href=""><CartWidget cant="0"/></a>
                    </div>
                    </div>
                
            </div>
        </nav>
    )
}

export default Navbar

