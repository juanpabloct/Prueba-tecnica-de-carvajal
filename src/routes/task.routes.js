const { Router } = require("express");

const { peticion, saludo, valor } = require("../controllers/task.controller");

const db = require("../db");
const router = Router();

router.get("/", saludo);
router.get("/peticion/:nombre", peticion);
router.post("/hola/", valor);
module.exports = router;
