const router= require("express").Router();
const datos= require("../controllers/datos.controllers");

router.get('/importarCliente', datos.importarCliente);
router.get('/importarProducto', datos.importarProductos);
router.get('/importarMarca', datos.importarMarca);
router.get('/importarCompras', datos.importarCompras);

module.exports= router;