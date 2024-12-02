import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Equipos() {
    const [equipos, setEquipos] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem('token');
        axios
            .get('http://localhost:5000/api/equipos', {
                headers: { Authorization: `Bearer ${token}` },
            })
            .then((response) => setEquipos(response.data))
            .catch((error) => console.error('Error al cargar equipos:', error));
    }, []);

    return (
        <div>
            <h1>Lista de Equipos</h1>
            <ul>
                {equipos.map((equipo) => (
                    <li key={equipo._id}>{equipo.nombre} - {equipo.estado}</li>
                ))}
            </ul>
        </div>
    );
}

export default Equipos;
