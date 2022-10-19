const express = require('express');
require('dotenv').config();

// Crear el servidor de express
const app = express();

//Directorio Publico
app.use( express.static('public'));

//Rutas
// app.get('/', (req, res) => {

//     res.json({
//         ok: true
//     })
// })


// Escuchar peticiones
app.listen( process.env.PORT, () => {
    console.log(`Servidor corriendo en el puerto ${process.env.PORT}`)
});