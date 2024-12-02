const Equipo = require('../models/Equipo');

// Obtener todos los equipos
const obtenerEquipos = async (req, res) => {
    try {
        const equipos = await Equipo.find();
        res.json(equipos);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener equipos' });
    }
};

// Crear un nuevo equipo
const crearEquipo = async (req, res) => {
    try {
        const nuevoEquipo = new Equipo(req.body);
        await nuevoEquipo.save();
        res.json(nuevoEquipo);
    } catch (error) {
        res.status(400).json({ error: 'Error al crear el equipo' });
    }
};

module.exports = { obtenerEquipos, crearEquipo };
