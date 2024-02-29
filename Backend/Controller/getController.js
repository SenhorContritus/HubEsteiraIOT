const express = require("express");
const router = express.Router();



router.get("/get", async (req,res) => {

    res.send("SERVER:OK");
    console.log();

})

router.post("/post", async (req, res) =>{
    var response = await req.body;
    console.log(response);
});



module.exports = (server) => server.use("/methods", router)