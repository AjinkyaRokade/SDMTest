var express=require("express");
var app=express();
var path=require("path");
var bodyparser=require("body-parser");
var module=require("./module");

app.use(bodyparser.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname, "public")));
app.get("/", (req, resp)=>{
    resp.sendFile("public/login.html", {root:__dirname});
})

app.get("/submit", (req, resp)=>{
    console.log( req.query.pass);
    if(module.verify(req.query.name, req.query.pass))
    resp.sendFile("/public/main.html", {root:__dirname});
});

app.get("/register", (req, resp)=>{
    resp.sendFile("public/registration.html", {root:__dirname});
})

app.listen(3000);
console.log("serever running on 3000");