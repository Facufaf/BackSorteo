var express = require('express');
var router = express.Router();
var con = require("./conexion");

  router.get('/:sorteo_id', function(req, res, next) {
    const {authorization}= req.headers;
    console.log(authorization);
    const sql="INSERT INTO ganadores SELECT * FROM sorteo WHERE sorteo_id ="+ req.params.sorteo_id;
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
  router.get('/', function(req, res, next){
    const {authorization}= req.headers;
    console.log(authorization);
    const sql='SELECT* FROM ganadores'
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