const router= require("express").Router();
const datos= require("../controllers/datos.controllers");

router.get('/importarCliente', datos.importarCliente);
router.get('/importarProducto', datos.importarProductos);
router.get('/importarMarca', datos.importarMarca);
router.get('/importarCompras', datos.importarCompras);
/*++++++++++++++++++RELACIONES++++++++++++++++++++++++*/
router.get('/relacionarProducto', datos.relacionarProductoCompra);
router.get('/relacionarCliente', datos.relacionarClienteCompra);
router.get('/relacionarMarca', datos.relacionarProductoMarca);

module.exports= router;