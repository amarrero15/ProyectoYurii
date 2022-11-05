const router= require("express").Router();
const gestion= require("../controllers/gestion.controllers");

router.post('/agregarCliente', gestion.agregarCliente);
//router.get('/importarProducto', datos.importarProductos);
router.put('/editarCliente', gestion.modificarCliente);
router.delete('/eliminarCliente', gestion.eliminarCliente);

module.exports= router;