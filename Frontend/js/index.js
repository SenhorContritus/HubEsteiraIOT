
const p = document.getElementById("s-stats");
const inputId = document.getElementById("id");
const inputPass = document.getElementById("password");
const listQnt  =  document.getElementById("qnt-objetos");
const listVerm = document.getElementById("qnt-vermelho");
const listAzul = document.getElementById("qnt-azul");
const listVerd = document.getElementById("qnt-verde");
const listTempo = document.getElementById("tempo-dec");
const url = "https://b078-186-217-113-196.ngrok-free.app";

function submit(){
    let id = inputId.value;
    let pass = inputPass.value;
    console.log(pass);


    axios({
        method: "post",
        url: url+"/methods/get",
        data:{
            id:id,
            password: pass
        }
    }).then((response) =>{
        console.log(response);
        var data = response.data;
        listVerm.innerHTML = data.verm;
        listVerd.innerHTML = data.verd;
        listAzul.innerHTML = data.azul;
        listQnt.innerHTML = data.total;
        listTempo.innerHTML = data.tempo;
        
    });
    
}



axios({
    method: "get",
    url: url+"/methods/get"
}).then((response) => {
    console.log(response.data);
    p.innerHTML = response.data;
});



setInterval(() => {
    try {
        axios({
            method:"get",
            url:url+"/methods/mqtt"
        }).then((response) => {
            console.log(response.data);
        })  
    } catch (error) {
        
    }
},100);
