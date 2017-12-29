var mysql=require('mysql');

class Database {
    constructor() {
        this.connection = mysql.createConnection({
            host: 'localhost',
            user: "root", //数据库用户名
            password: "root", //数据库密码
            database: "weixin", //数据库
            port: '8889',
            charset: "UTF8_GENERAL_CI",
            timezone: "local",
            multipleStatements: false
        });
    }
    addDisscuss(req,res){
        var that=this;
        that.connection.query("insert into comment set ?",
            {
                create_time:req.query.createtime,
                content:req.query.content,
                star:req.query.star,
                nickname:req.query.nickname,
                head:req.query.head
                //uid:req.query.uid
            },
            function(err,result){
                if (!err){
                    res.send({info: "success"});}
                else {
                    console.log(err)
                }
            }
        )
    }
    showcomment(req,res){
        var that = this;
        that.connection.query("select * from comment",function (err, result) {
            if (err) {
                console.log(err);
            }
            else {
                res.send({centerType: result});
            }
        });
    }
    check(req,res) {
        var that = this;
        // noinspection JSAnnotator
        that.connection.query("select * from password where name=? and password=?", [req.query.name, req.query.password], function (err, result) {
            if (err) {
                console.log(err);
            }
            else {
                res.send({info: result});
            }
        });
    }
    adddishes(req,res){
        var that=this;
        that.connection.query("insert into dishes set ?",
            {
                create_time:req.query.createtime,
                content:req.query.content,
                star:req.query.star,
                title:req.query.title,
                price:req.query.price,
                picture:req.query.picture
                //uid:req.query.uid
            },
            function(err,result){
                if (!err){
                    res.send({info: "success"});}
                else {
                    console.log(err)
                }
            }
        )
    }
    showdishes(req,res){
        var that = this;
        that.connection.query("select * from dishes",function (err, result) {
            if (err) {
                console.log(err);
            }
            else {
                res.send({dishesType: result});
            }
        });
    }
}
module.exports = Database;