let temp = Number(prompt("Digite la Temperatura"));
let pres = Number(prompt("Digite la Presión"));

if(temp>200 || pres>100){
    alert("!!ALARMA!!")
}else{
    alert("Estado Normal")
}