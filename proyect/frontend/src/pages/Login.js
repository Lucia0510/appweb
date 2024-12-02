import React, { useState } from 'react';
import axios from 'axios';

function Login() {
    const [email, setEmail] = useState('');
    const [contraseña, setContraseña] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:5000/api/usuarios/login', { email, contraseña });
            localStorage.setItem('token', response.data.token);
            alert('Inicio de sesión exitoso');
            window.location.href = '/equipos'; // Redirige a equipos
        } catch (error) {
            alert('Error al iniciar sesión: ' + error.response.data.error);
        }
    };

    return (
        <div>
            <h1>Iniciar Sesión</h1>
            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Contraseña" onChange={(e) => setContraseña(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}

export default Login;
