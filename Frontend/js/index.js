const pStats = $("#s-stats");
const inputId = $("#id");
const inputPass = $("#password");
const listQnt  =  $("#qnt-objetos");
const listVerm = $("#qnt-vermelho");
const listAzul = $("#qnt-azul");
const listVerd = $("#qnt-verde");
const listTempo = $("#tempo-dec");
const lista = $("#lista");
const buttonLogin = $("#btLogin");
const btMQTT = $("#btMQTT");

var azul =0;
var vermelho = 0;
var verde =0;
var total = 0;

const url = "http://localhost:8081";

function submit(){
    let id = inputId.value;
    let pass = inputPass.value;
    console.log(pass);


    axios({
        method: "post",
        url: url+"/methods/post",
        data:{
            id:id,
            password: pass
        }
    }).then(async(response) =>{
        console.log(response);
        var isLogged = true;
        if(isLogged){
            $('.divLogin').css('display', 'none')
        }
    });
    
}

function mqttMsg(state){
    axios({
        method: "post",
        url: url + "/methods/mqtt/post",
        data:{
            msg: state
        }
    })
}

btMQTT.on('click',() => {
    if(btMQTT.is(':checked')){
        console.log("ligar")
    }else{
        console.log("Desligar");
    }
})
document.getElementById('btMQTT').addEventListener('ch')



setInterval(() => {
    axios({
        method: "get",
        url: url+"/methods/get"
    }).then((response) => {
        console.log(response.data);
        pStats.html(response.data);
    }).catch((err) => {
        pStats.html("SERVER:OFFLINE")
    })
    
    axios({
        method:"get",
        url:url+"/methods/mqtt"
    }).then((response) => {
        const data = response.data;
        const valor = data.valor;
        const valSplit = valor.split(",");
        console.log(valSplit);


        if(valSplit[0] === "blue" )
        {
            azul = valSplit[1];
            total = valSplit[2];
            listAzul.innerHTML = azul;
            listQnt.innerHTML = total;

        }else if(valSplit[0] === "green"){

            verde = valSplit[1];
            total = valSplit[2];
            listVerd.innerHTML = verde;
            listQnt.innerHTML = total;

        }else if(valSplit[0] === "red"){
            vermelho = valSplit[1];
            total = valSplit[2];
            listVerm.innerHTML = vermelho;
            listQnt.innerHTML = total;
        }
        
        
    }).catch((err) =>{
        console.log("Servidor foi de arrasta");
    })
},2000);
