const router= require("express").Router();
const gestion= require("../controllers/gestion.controllers");

router.post('/agregarCliente', gestion.agregarCliente);
router.get('/leerCliente/:nombre/productos/:apellido', gestion.leerCliente);
router.put('/editarCliente', gestion.modificarCliente);
router.delete('/eliminarCliente/:nombre/productos/:apellido', gestion.eliminarCliente);
router.get('/totalClientes', gestion.totalClientes)

router.post('/agregarProducto',gestion.agregarProducto);
router.get('/leerProducto/:nombre', gestion.leerProducto);


module.exports= router;