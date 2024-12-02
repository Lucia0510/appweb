const mongoose = require('mongoose');

const EquipoSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    estado: { type: String, enum: ['Activo', 'Inactivo'], default: 'Activo' },
    fechaMantenimiento: { type: Date },
    tecnico: { type: String },
});

module.exports = mongoose.model('Equipo', EquipoSchema);
