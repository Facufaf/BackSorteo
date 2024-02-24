var express = require('express');
var router = express.Router();
var con = require("./conexion");

  router.post('/', function(req, res, next) {
    const premios=req.body;
    const sql="INSERT INTO premios(nombre)VALUES(?)";
    con.query(sql, [premios.nombre], function(error, result) {
        if (error){
            res.json({
                status:"error" ,
                error
            })
        } else {
            res.json({
                status:"ok",

            });
        }
    })
  });
  
  router.get('/', function(req, res, next){
    const {authorization}= req.headers;
    console.log(authorization);
    const sql='SELECT* FROM premios'
    con.query(sql, function(error, result){
    
        if (error){
            res.json({
                status:"error" ,
                error
            })
        } else {
            res.json({
                status:"ok",
                sorteo:result
            });
        }
    })
});
router.delete('/:premios_id', function(req, res, next) {
    const premios_id = req.params.premios_id;
    const sql = "DELETE FROM sorteo WHERE premios_id = ?";
    con.query(sql, [premios_id], function(error, result) {
        if (error){
            res.json({
                status:"error" ,
                error
            })
        } else {
            res.json({
                status:"ok",
            });
        }
    })
});
router.delete('/', function(req, res, next) {
    const sql = "DELETE FROM premios";
    con.query(sql, function(error, result) {
        if (error){
            res.json({
                status:"error" ,
                error
            })
        } else {
            res.json({
                status:"ok",
            });
        }
    })
});


router.get('/:premios_id', function(req, res, next){
    const {authorization}= req.headers;
    console.log(authorization);
    const sql='SELECT* FROM sorteo where premios_id=' + req.params.premios_id
    con.query(sql, function(error, result){
        
        if (error){
            res.json({
                status:"error" ,
                error
            })
        } else {
            res.json({
                status:"ok",
                sorteo:result
            });
        }
    })
});

  module.exports = router;