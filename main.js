const horaPlanta = 20000;
const horaAdmin = 10000;

let opcion = prompt("Digite la letra P si el empleado es de Planta o  A si es Administrativo : ");
let horasTrabajadas = Number (prompt("Digite las horas trabajadas del empleado"));

if(opcion == "P"){
    pagoPlanta=horaPlanta*horasTrabajadas;
    alert("El total a pagar del empleado de planta es de " + pagoPlanta);
}else if(opcion == "A"){
    pagoAdmin = horaAdmin*horasTrabajadas;
    alert("El total a pagar del empleado administrativo es de " + pagoAdmin)
}else{
    alert("Error al digitar alguna opcion");
}
