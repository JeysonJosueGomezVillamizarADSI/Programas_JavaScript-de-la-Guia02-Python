let pago = Number(prompt("Digite el total a pagar del consumo en el restaurante "));

if(pago>130000){
    let descuento = pago*0.10;
    let totalPagar = pago-descuento;
    alert("El total a pagar con el descuento incluido es de " +totalPagar);
}else{
    alert("No tiene descuento");
}