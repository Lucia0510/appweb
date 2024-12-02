import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Perfil() {
    const [perfil, setPerfil] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        axios
            .get('http://localhost:5000/api/usuarios/perfil', {
                headers: { Authorization: `Bearer ${token}` },
            })
            .then((response) => setPerfil(response.data.usuario))
            .catch((error) => console.error('Error al cargar perfil:', error));
    }, []);

    return perfil ? (
        <div>
            <h1>Perfil</h1>
            <p>Nombre: {perfil.nombre}</p>
            <p>Email: {perfil.email}</p>
            <p>Rol: {perfil.rol}</p>
        </div>
    ) : (
        <p>Cargando perfil...</p>
    );
}

export default Perfil;
