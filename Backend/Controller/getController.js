const express = require("express");
const router = express.Router();
const ID = "admin";
const PASS = "admin";
const fs = require("fs");


router.get("/get", async (req,res) => {

    res.send("SERVER:OK");
    console.log("ta indo");

})

router.post("/post", async (req, res) =>{
    const response = await req.body;
    var id = response.id;
    var password = response.password;

    if(id === ID){
        if(password === PASS){
            res.send("User login OK");         

        }else{
            res.send("Password is incorrect!");
        }

    }else{
        res.send("Incorrect ID!");
    }


});



module.exports = (server) => server.use("/methods", router)