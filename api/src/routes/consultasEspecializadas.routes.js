const router= require("express").Router();
const especialController= require("../controllers/consultasEspecializadas.controllers");

router.get('/consulta3Clientes/:nombre/clientes/:apellido', especialController.consulta3Clientes);
router.get('/consultaEsp1/:id', especialController.consultaespecialController1);
module.exports= router;