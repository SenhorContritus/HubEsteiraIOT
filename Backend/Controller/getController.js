const express = require("express");
const router = express.Router();
const ID = "admin";
const PASS = "admin";
const client = require("../index.js");
const { error } = require("console");
process.setMaxListeners(0);
require('events').EventEmitter.defaultMaxListeners = 0;

router.get("/mqtt/message", async (req, res) =>{

    
    client.on("message" ,( topic , payload)  =>{
        
        if(!payload){
            return res.status(400).json({
                status:"error"
            })
        }

        //res.status(200).json({message: payload.toString()});

    });

});

router.get("/get", async (req,res) => {

    res.send("SERVER:ONLINE");
    //console.log("Conexão estabelecida com o front");

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

router.post("/mqtt/post" , async (req,res) =>{

    if(!req.body.msg){
        return res.status(400).json({
            status:error
        })
    }
    const response = req.body;
    var message = response.msg;
    client.subscribe("/esteira/receber/");
    client.publish("/esteira/receber/", message.toString());
    res.status(200).json({
        status: "success"
    });

    

});



module.exports = (server) => server.use("/methods", router)