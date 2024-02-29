const { response } = require("express");

const p = document.getElementById("get");
const inputId = document.getElementById("id");
const inputPass = document.getElementById("password");
const listQnt  =  document.getElementById("qnt-objetos");
const listVerm = document.getElementById("qnt-vermelho");
const listAzul = document.getElementById("qnt-azul");
const listVerd = document.getElementById("qnt-verde");
const listTempo = document.getElementById("tempo-dec");


function submit(){
    let id = inputId.value
    let pass = inputPass.value
    


    axios({
        method: "post",
        url: "http://localhost:8081/methods/post",
        data:{
            id:id,
            password: pass
        }
    }).then((response) =>{
        console.log(response);
    });
    
}



axios({
    method: "get",
    url: "http://localhost:8081/methods/get"
}).then((response) => {
    console.log(response.data);
    p.innerText = response.data;
});



