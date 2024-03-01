const express = require("express");
const server = express();
const cors = require("cors")
const bodyParser = require("body-parser");




exports.handler = async (event) =>{
    const response = {
        statusCode:200,
        Headers:{
        "Access-Control-Allow-Headers" : "Content-Type",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
        }
    }

    return response;
}
server.use(cors())
server.use(bodyParser.json())



require("./Controller/getController")(server);




server.listen("8081" , () =>{
    console.log("Server is running on port 8081! ");
});