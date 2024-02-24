var express = require('express');
var router = express.Router();

var sorteoRouter = require('./sorteo');
var usuariosRouter= require('./usuarios');
var premiosRouter= require('./premios');
var ganadoresRouter= require('./ganadores');

router.use("/sorteo", sorteoRouter);
router.use("/usuarios", usuariosRouter);
router.use("/premios", premiosRouter);
router.use("/ganadores", ganadoresRouter)

module.exports = router