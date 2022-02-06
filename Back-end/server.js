var express = require("express")
var app = express() 
var cors = require("cors")
var query = require("./Database/query.js")
var bodyParser = require("body-parser")
const { db } = require("./Database/index.js")
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json());
app.get("/api/data" , (req,res)=> {
// pic,name,descr,price
query.GetAlldata(function(rez){
if(rez==null)
res.send("err")
else 
res.send(rez)
})
})
// post request  ; 
app.post("/api/post/data" , (req,res)=> { 
    console.log(req.body)
    query.PostData(req.body , function(rez) { 
  if(rez==null)
   res.send("err")
   else 
   res.send("Data Added")
    })
})
// delete; 
app.delete("/delete" , (req,res)=> {
query.Delete(req.body["id"] , function(rez){
if(rez==null)
res.send("Err Happened")
else 
res.send('Data Deleted ')
})
})
// update; 
app.patch('/update' , (req,res)=> {
query.Update(req.body["id"]  , req.body , function(rez) { 
if(rez==null)
res.send("err")
else 
res.send('Data Updated ')
})
})
// Authentication 


app.listen(8000,()=> { 
console.log("server is running")
})