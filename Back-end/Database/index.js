var mysql = require("mysql")
var db=mysql.createConnection({
host : "localhost" , 
user:"root" , 
password:"root"  , 
database:"ecomerce"
})
db.connect(()=>{
console.log("DataBase Is connected")
})
module.exports.db  = db 
