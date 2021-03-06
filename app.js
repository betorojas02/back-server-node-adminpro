//requires
var express = require('express');
var mongoose = require('mongoose');

//Inicarlizar variables
var app = express();


//conexion base de datos

mongoose.connection.openUri('mongodb://localhost:27017/hospitalDB', (err, res) => {
    if(err) throw err;
    console.log('Base de datos: \x1b[32m%s\x1b[0m ', 'online');
})

//rutas

app.get('/', (request,response, next ) => {
    response.status(200).jsonp({
        ok:true,
        mensaje: 'Peticion relizada correctamente'
    });
});

//Escuchar peticion
app.listen(3000, ()=> {
    console.log('Express server puerto 3000: \x1b[32m%s\x1b[0m ', 'online');
});

