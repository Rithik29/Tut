
++const express=require("express");
const bodyparser=require("body-parser");
const app=express();

app.use(bodyparser.urlencoded({
  extended:true
}));

app.get("/" , function(req , res){

   res.sendFile(__dirname + "/register.html");

});

app.post("/" , function(req, res){
  
  var name=req.body.name;
  var email=res.body.email;
  var countrycode=res.body.countrycode;
  var number=res.body.number;
  var course=res.body.course;
  var userid=res.body.userid;
  
  
  var password=res.body.password;


  res.send("hello" +name=email+8
app.listen(4000, function(){
  console.log("server is running" );
})
