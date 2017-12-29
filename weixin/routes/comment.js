var express = require('express');
var router = express.Router();
var Database = require("./connect_mysql");
/* GET home page. */
// router.get('/root', function(req, res, next) {
//     // console.log(req);
//     new Database().getRootType(req,res);
// })
router.get('/', function(req, res, next) {
    // console.log(req);
    new Database().addDisscuss(req,res);
})

module.exports = router;
