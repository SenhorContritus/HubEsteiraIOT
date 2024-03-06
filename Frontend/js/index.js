
const p = document.getElementById("s-stats");
const inputId = document.getElementById("id");
const inputPass = document.getElementById("password");
const listQnt  =  document.getElementById("qnt-objetos");
const listVerm = document.getElementById("qnt-vermelho");
const listAzul = document.getElementById("qnt-azul");
const listVerd = document.getElementById("qnt-verde");
const listTempo = document.getElementById("tempo-dec");


function submit(){
    let id = inputId.value;
    let pass = inputPass.value;
    console.log(pass);


    axios({
        method: "post",
        url: "https://a8db-170-81-191-91.ngrok-free.app/methods/get",
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
    url: "https://a8db-170-81-191-91.ngrok-free.app/methods/get"
}).then((response) => {
    console.log(response.data);
    p.innerHTML = response.data;
});



setInterval(() => {
    axios({
        method:"get",
        url:"https://a8db-170-81-191-91.ngrok-free.app/methods/mqtt"
    }).then((response) => {
        console.log(response.data);
    })
},1000);