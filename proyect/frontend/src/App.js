import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Equipos from './pages/Equipos';
import Perfil from './pages/Perfil';
import Header from './components/Header';

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/equipos" element={<Equipos />} />
                <Route path="/perfil" element={<Perfil />} />
            </Routes>
        </Router>
    );
}

export default App;
