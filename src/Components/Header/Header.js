import React from "react";
import Logo from "../../assets/Logo.png";
import "./Header.css";
import CartWidjet from "../../Components/CartWidjet/CartWidjet";


const Header = () => {
    return(
      <header className="header">
          <nav>
            <ul className="nav-list">
                <li className="nav-item logo">
                    <a href="#"><img src={Logo} alt="logo" width="80" height="80"/></a>
                </li>
                <li className="nav-item">
                    <a href="#">Inicio</a>
                </li>
                <li className="nav-item">
                    <a href="pages/amaranto.html">El amaranto</a>
                </li>
                <li className="nav-item">
                    <a href="pages/enlared.html">En la red</a>
                </li>
                <li className="nav-item">
                    <a href="pages/productos.html">Productos</a>
                </li>
                <li className="nav-item">
                    <a href="pages/nosotros.html">Sobre nosotros</a>
                </li>
                <li className="nav-item">
                    <a href="pages/contacto.html">Contacto</a>
                </li>
                <CartWidjet />
            </ul>
          </nav>
      </header>
    )
}

export default Header;
