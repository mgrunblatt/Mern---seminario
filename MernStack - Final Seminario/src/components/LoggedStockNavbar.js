import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const getLinkClassName = (location, path) => {
    if (location.pathname === path) {
        return "navbar-brand";
    } else {
        return "nav-link";
    }
}

const LoggedNavbar = () => {
    const location = useLocation();

    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <ul className="navbar-nav mr-auto" style={{ flex: 1 }}>
            <li className="navbar-item" style={{ flex: 1 }}>
                    <Link to="/home" className={getLinkClassName(location, "/home")}>
                        Home
                        </Link>
                </li>
                <li className="navbar-item" style={{ flex: 1 }}>
                    <Link to="/productsList" className={getLinkClassName(location, "/productsList")}>
                        Productos
                        </Link>
                </li>
                <li className="navbar-item" style={{ flex: 1 }}>
                    <Link to="/createProduct" className={getLinkClassName(location, "/createProduct")}>
                        Crear nuevo producto
                        </Link>
                </li>
                <li className="navbar-item" style={{ flex: 1 }} >
                        <Link to="/stockListToAdd" className={getLinkClassName(location, "/stockListToAdd")}>
                            Reponer Stock
                        </Link>
                    </li>
                <li className="navbar-item" style={{ flex: 1 }} >
                    <Link to="/stockListToSell" className={getLinkClassName(location, "/stockListToSell")}>
                        Venta de stock
                    </Link>
                </li>    
                <li className="navbar-item">
                    <Link to="/" className={getLinkClassName(location, "/")}>
                        Salir
                        </Link>
                </li>
            </ul>
        </nav>
    );
}

export default LoggedNavbar;