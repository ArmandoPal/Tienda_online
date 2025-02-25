import  "./NavbarS.css"

import { 
    FaTags, FaUsers, FaMapMarkerAlt, FaShoppingCart, FaSearch, 
    FaFacebookF, FaInstagram, FaLinkedinIn, FaChevronDown 
  } from "react-icons/fa";
  import { FiMenu } from "react-icons/fi";
  
  const Navbar: React.FC = () => {
    return (
      <>
        {/* Barra superior con información de contacto y redes sociales */}
        <div className="top-bar">
          <span>Central: 975596329</span>
          <div className="social-icons">
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
          </div>
        </div>
  
        {/* Contenedor principal del navbar */}
        <div className="navbar">
          {/* Logo */}
          <img src="/assets/logo.png" alt="Logo de la tienda" className="logo" />
  
          {/* Barra de búsqueda */}
          <div className="search-bar">
            <input type="text" placeholder="Buscar productos..." aria-label="Buscar productos" />
            <FaSearch className="search-icon" />
          </div>
  
          {/* Iconos de navegación */}
          <div className="nav-icons">
            <FaTags className="icon" aria-label="Promociones" />
            <FaUsers className="icon" aria-label="Clientes" />
            <FaMapMarkerAlt className="icon" aria-label="Ubicación" />
            <div className="cart">
              <FaShoppingCart className="icon" aria-label="Carrito de compras" />
              <span className="cart-badge">0</span>
            </div>
          </div>
        </div>
  
        {/* Menú de categorías */}
        <div className="menu">
          <FiMenu className="menu-icon" aria-label="Menú principal" />
          <a href="#">Caballo <FaChevronDown /></a>
          <a href="#">Piel <FaChevronDown /></a>
          <a href="#">Maquillaje <FaChevronDown /></a>
          <a href="#">Color <FaChevronDown /></a>
          <a href="#">Máquinas <FaChevronDown /></a>
          <a href="#" className="sale">Liquidación <span className="sale-icon">🔥</span></a>
        </div>
      </>
    );
  };
  
  export default Navbar;
  