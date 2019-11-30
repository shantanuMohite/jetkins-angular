const express=require('express')
const app=express()
const bodyParser=require('body-parser')
const routerEmployee= require('./routes/employee')

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  
app.use(bodyParser.json())
app.use('/emp',routerEmployee);

app.listen(9898,'0.0.0.0',()=>{
    console.log("server started at 9898");
})
