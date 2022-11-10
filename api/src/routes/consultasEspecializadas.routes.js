const router= require("express").Router();
const especialController= require("../controllers/consultasEspecializadas.controllers");

router.get('/consulta3Cliente', especialController.consulta3);
router.get('/consultaEsp1', especialController.consultaespecialController1);
module.exports= router;