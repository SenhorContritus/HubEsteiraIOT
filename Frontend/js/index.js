const p = document.getElementById("get");
const input = document.getElementById("input");

function submit(){
    let cmd = input.value

    axios({
        method: "post",
        url: "http://localhost:8081/methods/post",
        data:{
            func: cmd
        }
    });
    
}





axios({
    method: "get",
    url: "http://localhost:8081/methods/get"
}).then((response) => {
    console.log(response.data);
    p.innerText = response.data;
});



