const mysql = require("mysql");
const express = require("express");
const bodyParser = require("body-parser");
const encoder = bodyParser.urlencoded();

const app = express();
app.use("/assets",express.static("assets"));

const connection = mysql.createConnection({
    host     : 'localhost',
	user     : 'root',
	password : 'password',
	database : 'hospital_login'
});

connection.connect(function(error){
    if(error) throw error
    else console.log("connected to the database!")
})


app.get("/", function(req, res){
    res.sendFile(__dirname + "/login.html");
})

app.post("/",encoder, function(req,res){
    var username = req.body.username;
    var password = req.body.password;

    connection.query("select * from loginuser where user_name = ? and user_pass = ?",[username,password],function(error,results,fields){
        if (results.length > 0) {
            res.redirect("/home");
        } else {
            res.redirect("/");

        }
        res.end();
    })
})

app.get("/home", function(req, res){
    res.sendFile(__dirname + "/index.html");
})
app.get("/about", function(req, res){
    res.sendFile(__dirname + "/about.html");
})
app.get("/services", function(req, res){
    res.sendFile(__dirname + "/services.html");
})
app.get("/appointments", function(req, res){
    res.sendFile(__dirname + "/appointments.html");
})
app.get("/contact_us", function(req, res){
    res.sendFile(__dirname + "/contact_us.html");
})
app.get("/programare.html", function(req, res){
    res.sendFile(__dirname + "/programare.html");
})
app.get("/programare", function(req, res){
    res.sendFile(__dirname + "/programare.html");
})
app.get("/login.html", function(req, res){
    res.sendFile(__dirname + "/login.html");
})

app.listen(4000);