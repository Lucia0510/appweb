const express = require('express');
const router = express.Router();
const { obtenerEquipos, crearEquipo } = require('../controllers/equiposController');
const verificarToken = require('../middlewares/auth');

// Proteger todas las rutas
router.use(verificarToken);

// Rutas de equipos
router.get('/', obtenerEquipos);
router.post('/', crearEquipo);

module.exports = router;