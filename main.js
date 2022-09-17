let num1 = Number(prompt("Ingrese el primer numero : "));
let num2 = Number(prompt("Ingrese el segundo numero : "));
let num3 = Number(prompt("Ingrese el tercer numero : "));

if(num1>num2 && num1>num3){
    document.write("El numero mayor es " + num1);
}else if (num2>num3 && num2>num1){
    document.write("El numero mayor es "+ num2);
}
else{
    document.write("El numero mayor es " + num3)
}

