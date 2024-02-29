const express = require("express");
const router = express.Router();
const ID = "admin";
const PASS = "admin";
const fs = require("fs");

let dados = fs.readFileSync("./Database/info.json");

router.get("/get", async (req,res) => {

    res.send("SERVER:OK");
    console.log();

})

router.post("/post", async (req, res) =>{
    const response = await req.body;
    var id = response.id;
    var password = response.pass;

    if(id === ID){
        if(password === PASS){
            console.log("User login OK");

            res.send(dados.total);            

        }else{
            console.log("Password is incorrect!");
        }

    }else{
        console.log("Incorrect ID!");
    }


});



module.exports = (server) => server.use("/methods", router)