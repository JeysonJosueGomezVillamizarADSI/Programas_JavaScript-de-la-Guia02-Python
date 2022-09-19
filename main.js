let valor = Number(prompt("Ingrese el valor de la compra"));
let tipMembresia = prompt("Digite el tipo de membresia que posee , Tipo A ,Tipo B o Tipo C");

if(tipMembresia == "Tipo A"){
    totPago1 = (valor) - (valor*0.10)
    alert("El valor a pagar por poseer la membresia Tipo A es de " + totPago1);
}else if(tipMembresia == "Tipo B"){
    totPago2 = (valor) - (valor*0.15)
    alert("El valor a pagar por poseer la membresia Tipo B es de " + totPago2);
}else if(tipMembresia == "Tipo C"){
    totPago3 = (valor) - (valor*0.20)
    alert("El valor a pagar por poseer la membresia Tipo C es de " + totPago3);
}else{
    alert("El valor a pagar por no poseer ningun tipo de membresia es de " + valor);
}
