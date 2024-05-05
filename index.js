const express=require("express");
const app=express();
const port=3000;
const path=require("path");
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));
app.listen(port,()=>{
    console.log("jai peera di");
})
app.get("/",(req,res)=>{
    res.render("home.ejs");
})
app.post("/login",(req,res)=>{
    res.render("login.ejs");
})
app.get("/signup",(req,res)=>{
    res.render("signup.ejs");
})
app.get("/messages",(req,res)=>{
    res.render("messages.ejs");
})
app.get("/quizz",(req,res)=>{
    res.render("quizz.ejs");
})
app.get("/webinars",(req,res)=>{
    res.render("webinars.ejs");
})
app.post("/home",(req,res)=>{
    res.render("home.ejs");
})
app.get("/final",(req,res)=>{
    res.render("final.ejs");
})
app.get("/response",(req,res)=>{
    res.render("response.ejs");
})