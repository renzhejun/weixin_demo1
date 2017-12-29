var express = require('express');
var router = express.Router();
var Database = require("./connect_mysql");

router.get('/', function(req, res, next) {
    // console.log(req);
    new Database().adddishes(req,res);
})

module.exports = router;
