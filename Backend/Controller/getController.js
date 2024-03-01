const express = require("express");
const router = express.Router();
const ID = "admin";
const PASS = "admin";
const fs = require("fs");


router.get("/get", async (req,res) => {

    res.send("SERVER:OK");

})

router.post("/post", async (req, res) =>{
    const response = await req.body;
    var id = response.id;
    var password = response.password;

    if(id === ID){
        if(password === PASS){
            console.log("User login OK");
            let dados = fs.readFileSync("./Database/info.json");
            res.send(dados);            

        }else{
            console.log("Password is incorrect!");
        }

    }else{
        console.log("Incorrect ID!");
    }


});



module.exports = (server) => server.use("/methods", router)