let lado1 = (prompt("Digite el valor del primer lado del rectangulo : "));
let lado2 = (prompt("Digite el segundo lado del rectangulo : "));

if(lado1>0 && lado2>0){
    let area = lado1*lado2;
    document.write("El area del rectagulo es " + area);
}else{
    alert("Error algun lado del rectangulo es negativo vuelva a ingresar los datos  ");
}