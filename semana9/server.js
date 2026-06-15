const express = require('express');
const app = express();

// Ruta raíz que confirma el estado activo del servidor de manera simple
app.get('/', (req, res) => {
  res.send('Servidor activo y funcionando');
});

// Ruta de diagnóstico del servicio que devuelve un objeto estructurado en formato JSON
app.get('/estado', (req, res) => {
  res.json({
    estado: "Servidor funcionando",
    servicio: "API comunitaria"
  });
});

// El servidor se queda en estado de escucha activa en el puerto 3000
app.listen(3000, () => {
  console.log('Servidor ejecutándose en puerto 3000');
});