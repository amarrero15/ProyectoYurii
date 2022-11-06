const router= require("express").Router();
const generalController= require("../controllers/consultasGenerales.controllers");

router.get('/consulta1', generalController.consulta1);
router.get('/consulta2', generalController.consulta2);
router.get('/consulta3/:nombre/productos/:apellido', generalController.consulta3);
module.exports= router;

