var express = require('express');
var router = express.Router();
var con = require("./conexion");

router.post('/', function(req, res, next) {
    const sorteo=req.body;
    const sql="INSERT INTO sorteo(nombre,apellido,contacto,dni)VALUES(?,?,?,?)";
    con.query(sql, [sorteo.nombre, sorteo.apellido, sorteo.contacto, sorteo.dni], function(error, result) {
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
    const sql='SELECT* FROM sorteo'
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
router.delete('/:sorteo_id', function(req, res, next) {
    const sorteo_id = req.params.sorteo_id;
    const sql = "DELETE FROM sorteo WHERE sorteo_id = ?";
    con.query(sql, [sorteo_id], function(error, result) {
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
    const sql = "DELETE FROM sorteo";
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
router.get("/ganador", function(req, res, next){
    const {authorization}= req.headers;
    console.log(authorization);
    const sql='SELECT nombre FROM sorteo ORDER BY RAND() LIMIT 1;'
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

router.put('/:sorteo_id', function(req, res, next) {
    const sorteo_id = req.params.sorteo_id;
    const sorteo = req.body;
    const sql = "UPDATE sorteo SET nombre=?, apellido=?, contacto=?, dni=? WHERE sorteo_id=?";
    con.query(sql, [sorteo.nombre, sorteo.apellido, sorteo.contacto, sorteo.dni, sorteo_id], function(error, result) {
            if (error) {
            res.json({
                status: "error",
                error
            })
        } else {
            res.json({
                status: "ok",
            });
        }
    })
});

  module.exports = router;