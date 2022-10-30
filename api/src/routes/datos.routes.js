const router= require("express").Router();
const datos= require("../controllers/datos.controllers");

router.get('/imporCliente', datos.importarCliente);
router.get('/imporProducto', datos.importarProductos);
router.get('/imporMarca', datos.importarMarca);
router.get('/imporCompras', datos.importarCompras);

module.exports= router;