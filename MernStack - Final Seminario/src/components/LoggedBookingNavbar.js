import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const getLinkClassName = (location, path) => {
    if (location.pathname === path) {
        return "navbar-brand";
    } else {
        return "nav-link";
    }
}



const LoggedBookingNavbar = () => {
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
                    <Link to="/datePicker" className={getLinkClassName(location, "/datePicker")}>
                        Elegir fecha
                        </Link>
                </li>
                <li className="navbar-item" style={{ flex: 1 }}>
                    <Link to="/bookings" className={getLinkClassName(location, "/bookings")}>
                        Consultar turnos
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

export default LoggedBookingNavbar;