var db = require("./index.js")
var GetAlldata = (callback)=> {
db.db.query("SELECT * FROM data" , (err , rez)=> {
if(err)
callback(null)
else 
callback(rez)
})
}
var PostData= (data,callback)=> {
db.db.query(`INSERT INTO data (pic, name, descr , price) VALUES  ('${data["pic"]}' , '${data["name"]}' , 
'${data["descr"]}' , '${data["price"]}')` , (err , rez)=> {
if(err)
callback(null)
else 
callback(rez)
})
}
var Update = (who , newData, callback)=>{
db.db.query(`UPDATE data SET pic='${newData["pic"]}', name='${newData['name']}' ,descr='${newData["descr"]}',price ='${newData["price"]}' WHERE id ='${who}'`, (err,rez)=> {
if(err)
callback(null)  
else 
callback(rez)
})
}

var Delete = (who , callback)=>{
db.db.query(`DELETE FROM data WHERE id = '${who}'`,(err,rez)=> {
if(err)
callback(null)
else 
callback(rez)
})
}
module.exports ={
GetAlldata , 
PostData,
Update,
Delete
}