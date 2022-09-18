let producto1=Number(prompt("Escribe el valor del primer producto"));
let producto2=Number(prompt("Escribe el valor del segundo producto"));
let producto3=Number(prompt("Escribe el valor del tercer producto"));
let producto4=Number(prompt("Escribe el valor del cuarto producto"));
let producto5=Number(prompt("Escribe el valor del quinto producto"));
let Iva=Number(prompt("Escribe el iva sin %"));

let subtotal = producto1+producto2+producto3+producto4+producto5;
let iva= Iva/100;
let totalPagar = (subtotal*iva)+subtotal;

alert ("El subtotal a pagar es " + subtotal + " El iva es " + iva + " El total a pagar es " + totalPagar);