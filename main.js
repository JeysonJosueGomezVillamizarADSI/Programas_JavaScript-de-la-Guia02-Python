let num1 = Number (prompt("Escribe el primer numero : "));
let num2 = Number (prompt("Escribe el segundo numero : "));
let num3 = Number (prompt("Escribe el tercer numero : "));
let num4 = Number (prompt("Escribe el cuarto numero : "));

let result1=num1%2;
let result2=num2%2;
let result3=num3%2;
let result4=num4%2;

if(result1==0 && result2 == 0 && result3 == 0 && result4== 0){
    let suma= num1+num2+num3+num4
    alert ("El resultado de la suma es "+ suma);
}else{
    mult=num1*num2*num3*num4
    alert("El resultado de la multiplicacion es " +mult)
}
