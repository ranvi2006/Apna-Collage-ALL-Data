const express=require("express");
const sql=require("mysql2");
const app=express();
const port=3000;



const {faker}=require('@faker-js/faker');
const { v4: uuidv4 } = require('uuid');


const connection=sql.createConnection({
    host:"localhost",
    user:"root",
    database:"sigma_app",
    password:"Rajubhai1mysql"
});

let insert=(array)=>{
    try{
        let q="insert into users values(?,?,?,?)"
        connection.query(q,array,(err,result)=>{
            if(err) throw err;
            console.log(result);
        });
    }
    catch(error)
    {
        console.log(error);
    }

}

let insertUser=()=>{
  let array=  [ uuidv4(),
     faker.person.fullName(),
     faker.internet.email(),
     faker.internet.password()
  ]
  insert(array);

}



showTable();

function showTable() {

   try{
    connection.query("Select * from users",(error,result)=>{
        if(error)throw error;
        console.log(typeof(result));

    });
   }catch(error)
   {
console.log("error found");
   }
    
}


