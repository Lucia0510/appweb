const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Conectar a la base de datos
conectarDB();

// Middleware
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/equipos', require('./routes/equipos'));
app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/external', require('./routes/external'));

// Servidor en marcha
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
