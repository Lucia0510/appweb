const express = require('express');
const axios = require('axios');
const router = express.Router();

const API_KEY = 'TU_API_KEY_AQUI'; // Cambia esto con tu clave de OpenWeatherMap

router.get('/clima/:ciudad', async (req, res) => {
    const { ciudad } = req.params;
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${API_KEY}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Error al consultar el clima' });
    }
});

module.exports = router;