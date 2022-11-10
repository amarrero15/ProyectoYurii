const express = require('express');
const config= require('../config/config');
const cors =require( 'cors');

const general= require('../routes/consultasGenerales.routes');
const cargaDatos= require('../routes/datos.routes');
const especilizadas= require('../routes/consultasEspecializadas.routes')
const app=express();

app.use(cors());
app.use(express.json());
app.set('port',config.port);

app.use(general);
app.use(cargaDatos);
app.use(especilizadas);

app.get('/', (req, res)=>{
    res.send('<h1>API Proyecto</h1>');

});
module.exports=app;