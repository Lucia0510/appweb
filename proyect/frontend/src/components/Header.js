import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.href = '/';
    };

    return (
        <nav>
            <Link to="/equipos">Equipos</Link> | <Link to="/perfil">Perfil</Link>
            <button onClick={handleLogout}>Cerrar Sesión</button>
        </nav>
    );
}

export default Header;
