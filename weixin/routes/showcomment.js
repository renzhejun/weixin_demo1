var express = require('express');
var router = express.Router();
var Database = require('./connect_mysql')

/* GET users listing. */
router.get('/', function(req, res, next) {
    new Database().showcomment(req,res);
});
router.get('/center', function(req, res, next) {
    new Database().showcomment(req,res);
});

module.exports = router;